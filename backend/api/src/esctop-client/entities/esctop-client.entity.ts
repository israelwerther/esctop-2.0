import { Loan } from "src/loan/entities/loan.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('esctopClient')
export class EsctopClient {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    corporateName: string
    @Column()
    fantasyName: string
    @Column()
    cnpj: string
    @Column()
    foundation: Date
    @Column()
    stateRegistration: string
    @Column()
    municipalRegistration: string
    @Column()
    slug: string

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    modifiedOn: Date

    @OneToMany(() => Loan, (loan) => loan.esctopClient)
    loans: Loan[]
}
