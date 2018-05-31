//class used to import data into the homeModule
export class HomeData {
    constructor(budgetNum, expenseNum, savingsNum){
        this.BudgetBalance = budgetNum;
        this.ExpenseBalance = expenseNum;
        this.SavingsBalance = savingsNum;
    }
    public BudgetBalance : number;
    public ExpenseBalance : number;
    public SavingsBalance: number;
}