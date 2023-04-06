import { EsctopClient } from "src/esctop-client/entities/esctop-client.entity";
export declare class Loan {
    id: number;
    contractNumber: string;
    amount: number;
    interestRate: number;
    startDate: Date;
    amountOfInstallments: number;
    installments: number;
    status: string;
    inPerson: boolean;
    online: boolean;
    slug: string;
    createdOn: Date;
    modifiedOn: Date;
    esctopClientId: number;
    esctopClient: EsctopClient;
    slugifyLoan(): void;
    createContractNumber(): void;
}
