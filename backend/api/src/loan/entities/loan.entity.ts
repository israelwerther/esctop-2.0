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

    @Column({default: "0"})
    modality: string //modalidade do empréstimo

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
    slugifyPost(){
        console.log("===================")
        this.slug = slugify( this.status.substring(0, 20), {
            lower: true,
            replacement: '_'
        });
    }

}
