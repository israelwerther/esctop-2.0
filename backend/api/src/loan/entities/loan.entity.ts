import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { CredcoopClient } from "src/credcoop-client/entities/credcoop-client.entity";
import { EsctopClient } from "src/esctop-client/entities/esctop-client.entity";


@Entity('loan')
export class Loan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    contractNumber: string;

    @Column()
    amount: number; // valor do empréstimo

    @Column()
    interestRate: number; // taxa de juros

    @Column()
    startDate: Date; // data de início do empréstimo

    @Column()
    amountOfInstallments: number; // quantidade de prestações

    @Column()
    installments: number // Parcelas

    @Column()
    status: string; // status do empréstimo (pago, em andamento, atrasado, etc.)
    
    @Column()
    inPerson: boolean //modalidade do empréstimo - presencial

    @Column()
    online: boolean //modalidade do empréstimo - online

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    modifiedOn: Date

    // CREDCOOP CLIENT
    @Column({nullable: true})
    // @Exclude()
    credcoopClientIdteste: number;
    @ManyToOne(() => CredcoopClient, (credcoopClient) => credcoopClient.loans, {
        eager: true,
    })
    @JoinColumn({
        name: 'credcoopClientIdteste',
        referencedColumnName: 'id'
    })
    credcoopClient: CredcoopClient

    // ESCTOP CLIENT
    @Column({ nullable: true })
    @Exclude()
    esctopClientId: number;
    @ManyToOne(() => EsctopClient, (esctopClient) => esctopClient.loans, {
        eager: true
    })
    @JoinColumn({
        name: 'esctopClientId',
        referencedColumnName: 'id'
    })
    esctopClient: EsctopClient

    @BeforeInsert()
    createContractNumber(){
        let modality: string

        if(this.online){
            modality = "1"
        } else{
            modality = "0"
        }
        this.contractNumber = modality+modality
    }

}
