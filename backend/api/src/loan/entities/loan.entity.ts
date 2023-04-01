import { EsctopClient } from "src/esctop-client/entities/esctop-client.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

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
    installments: number
    @Column()
    status: string; // status do empréstimo (pago, em andamento, atrasado, etc.)
    @Column()
    slug: string
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    modifiedOn: Date

    @OneToMany(() => EsctopClient, (esctop_client) => esctop_client.loan)
    esctop_clients: EsctopClient[]
}
