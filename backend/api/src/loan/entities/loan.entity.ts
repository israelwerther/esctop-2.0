import { AfterInsert, BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { CredcoopClient } from "src/credcoop-client/entities/credcoop-client.entity";
import { EsctopClient } from "src/esctop-client/entities/esctop-client.entity";
import { utcToZonedTime } from 'date-fns-tz';


@Entity('loan')
export class Loan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ""})
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

    @Column({default: true})
    inPerson: boolean //modalidade do empréstimo - presencial

    @Column({default: false})
    online: boolean //modalidade do empréstimo - online

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    modifiedOn: Date


    // CREDCOOP CLIENT
    @Column({nullable: true})
    @Exclude()
    credcoopClientId: number;
    @ManyToOne(() => CredcoopClient, (credcoopClient) => credcoopClient.loans, {
        eager: true,
    })
    @JoinColumn({
        name: 'credcoopClientId',
        referencedColumnName: 'id'
    })
    credcoopClient: CredcoopClient

    
    // ESCTOP CLIENT
    @Column({nullable: true})
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
        const modality = this.inPerson ? '0' : '1';
        const clientType = this.credcoopClientId ? '0' : '1';
        let dayOfMonth = '';        
        let date = utcToZonedTime(this.startDate, 'America/Sao_Paulo');
        date = new Date();
        
        if (!isNaN(date.getTime())) {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            dayOfMonth = year + month + day;
        } else {
            console.error('Invalid startDate format');
        }
        
        this.contractNumber = modality + clientType + dayOfMonth;
    }
    
}
