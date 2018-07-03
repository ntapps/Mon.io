import { BudgetIncome } from "src/app/models/BudgetIncome";
import { BudgetExpense } from "src/app/models/BudgetExpense";

//
export class Budget {
  public id:string;
        
  public sumIncome:number;

  public sumPreTaxExpense:number;

  public sumTaxExpense:number;

  public sumExpense:number;

  public monthlyIncome: Array<BudgetIncome>;

  public preTaxExpenses: Array<BudgetExpense>;

  public taxExpenses: Array<BudgetExpense>;

  public regularExpenses: Array<BudgetExpense>;

  public spendingCategory: Array<BudgetExpense>;
}

export enum BUDGETEXPENSEENUMS {
  PreTaxExpenses = "PreTaxExpenses",
  TaxExpenses = "TaxExpenses",
  RegularExpenses = "RegularExpenses",
  SpendingCategory = "SpendingCategory"
}