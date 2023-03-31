import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('esctop_client')
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
}
