import { BudgetIncome } from "src/app/models/BudgetIncome";
import { BudgetExpense } from "src/app/models/BudgetExpense";

//
export class Budget {
  public id:string;
        
  public sumIncome:number;

  public sumPreTaxExpense:number;

  public sumTaxExpense:number;

  public sumExpense:number;

  public monthlyIncome: [BudgetIncome];

  public preTaxExpenses: [BudgetExpense];

  public taxExpenses: [BudgetExpense];

  public regularExpenses: [BudgetExpense];

  public spendingCategory: BudgetExpense;
}