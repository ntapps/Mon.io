import { BudgetExpense } from "src/app/models/BudgetExpense";
import { Budget } from "src/app/models/Budget";
import { BudgetIncome } from "src/app/models/BudgetIncome";

const mockBudgetExpense1: any = new BudgetExpense;
mockBudgetExpense1.id = 10;
mockBudgetExpense1.name = "mockBudgetExpense1"
mockBudgetExpense1.value = 10;
mockBudgetExpense1.isTaxable = true;

const mockBudgetExpense2: any = new BudgetExpense;
mockBudgetExpense2.id = 12;
mockBudgetExpense2.name = "mockBudgetExpense1"
mockBudgetExpense2.value = 10.56;
mockBudgetExpense2.isTaxable = true;

const mockBudgetIncome1: any = new BudgetIncome;
mockBudgetIncome1.id = 11;
mockBudgetIncome1.name = "mockBudgetIncome1";
mockBudgetIncome1.value = 10;

const mockBudgetIncome2: any = new BudgetIncome;
mockBudgetIncome2.id = 13;
mockBudgetIncome2.name = "mockBudgetIncome1";
mockBudgetIncome2.value = 10.56;


const constMockBudget: any = new Budget;
constMockBudget.id = 1;
constMockBudget.sumIncome = 100;
constMockBudget.sumPreTaxExpense = 100.69;
constMockBudget.sumTaxExpense = .69;
constMockBudget.sumExpense = 0.01;
constMockBudget.taxExpenses = [mockBudgetExpense1, mockBudgetExpense2];
constMockBudget.monthlyIncome = [mockBudgetIncome1, mockBudgetIncome2];
constMockBudget.preTaxExpenses = [mockBudgetExpense1, mockBudgetExpense2];
constMockBudget.regularExpenses = [mockBudgetExpense1, mockBudgetExpense2];
constMockBudget.spendingCategory = mockBudgetExpense1;

export let MockBudget = constMockBudget;