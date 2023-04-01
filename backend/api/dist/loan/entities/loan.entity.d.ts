import { EsctopClient } from "src/esctop-client/entities/esctop-client.entity";
export declare class Loan {
    id: number;
    contractNumber: string;
    amount: number;
    interestRate: number;
    startDate: Date;
    installments: number;
    status: string;
    slug: string;
    createdOn: Date;
    modifiedOn: Date;
    esctop_clients: EsctopClient[];
}
