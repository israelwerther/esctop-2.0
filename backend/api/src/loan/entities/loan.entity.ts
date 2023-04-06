import { EsctopClient } from "src/esctop-client/entities/esctop-client.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import slugify from "slugify";


@Entity('loan')
export class Loan {
    @PrimaryGeneratedColumn()
    id: number; // identificador único do empréstimo

    @Column({default: ''})
    @Exclude()
    contractNumber: string; // número do contrato

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

    @Column()
    slug: string

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    modifiedOn: Date

    @Column({ default: 1 })
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
    slugifyLoan(){
        console.log("=================== 1")
        this.slug = slugify( this.status.substring(0, 20), {
            lower: true,
            replacement: '_'
        });
    }

    @BeforeInsert()
    createContractNumber(){
        console.log("Entrou")
        let modality: string

        if(this.online){
            modality = "1"
        } else{
            modality = "0"
        }
        this.contractNumber = modality+modality
        console.log("Num Contract", this.contractNumber)
    }

}
