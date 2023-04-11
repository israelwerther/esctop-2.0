import { Loan } from "src/loan/entities/loan.entity"
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import slugify from "slugify"
@Entity('credcoopClient')
export class CredcoopClient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: string;
    
    @Column()
    slug: string;
    
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    modifiedOn: Date

    @OneToMany(() => Loan, (loan) => loan.credcoopClient)
    loans: Loan[]

    @BeforeInsert()
    slugifyLoan(){
        console.log("SLUG 1")
        this.slug = slugify( this.name.substring(0, 20), {
            lower: true,
            replacement: '_'
        });
        console.log("SLUG 2", this.slug)
    }
}
