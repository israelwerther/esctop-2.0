import { EsctopClient } from "src/esctop-client/entities/esctop-client.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Exclude } from "class-transformer";
@Entity('loan')
export class Loan {
    @PrimaryGeneratedColumn()
    id: number; // identificador único do empréstimo
    @Column()
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

}
