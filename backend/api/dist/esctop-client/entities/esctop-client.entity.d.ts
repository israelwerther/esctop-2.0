import { Loan } from "src/loan/entities/loan.entity";
export declare class EsctopClient {
    id: number;
    corporateName: string;
    fantasyName: string;
    cnpj: string;
    foundation: Date;
    stateRegistration: string;
    municipalRegistration: string;
    slug: string;
    createdOn: Date;
    modifiedOn: Date;
    loans: Loan[];
    slugifyLoan(): void;
}
