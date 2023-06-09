import { Loan } from "src/loan/entities/loan.entity";
export declare class CredcoopClient {
    id: number;
    name: string;
    cpf: string;
    slug: string;
    createdOn: Date;
    modifiedOn: Date;
    loans: Loan[];
    slugifyLoan(): void;
}
