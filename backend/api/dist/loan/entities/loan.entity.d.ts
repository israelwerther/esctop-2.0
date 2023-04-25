import { CredcoopClient } from "src/credcoop-client/entities/credcoop-client.entity";
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
    createdOn: Date;
    modifiedOn: Date;
    credcoopClientIdteste: number;
    credcoopClient: CredcoopClient;
    esctopClientId: number;
    esctopClient: EsctopClient;
    createContractNumber(): void;
}
