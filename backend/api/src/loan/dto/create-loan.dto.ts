export class CreateLoanDto {
    contractNumber: string;
    amount: number;
    interestRate: number;
    startDate: Date;
    amountOfInstallments: number;
    installments: number
    status: string;
    inPerson: boolean;
    online: boolean;
}
