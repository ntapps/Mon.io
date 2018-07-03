import { Injectable } from '@angular/core';
import { MockApiDataService } from 'src/app/mock-services/mock-api-data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Budget, BUDGETEXPENSEENUMS} from 'src/app/models/Budget';
import { Observable } from 'rxjs/internal/Observable';
import { BudgetExpense } from 'src/app/models/BudgetExpense';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
@Injectable({
  providedIn: 'root'
})
export class BudgetDataService {
  budgetData: Budget;
  _budgetData: BehaviorSubject<Budget>;
  constructor(private apiData : MockApiDataService) { 
    this._budgetData = new BehaviorSubject<Budget>(new Budget);
    this.apiData.budgetViewData.subscribe(data => {
      console.log(data);
      if(data !== null || data !== undefined){
        this.budgetData = data;
        this._budgetData.next(data);
      }else{
        this.budgetData = new Budget;
        this._budgetData.next(null);
      }
    });
  }

  getAllBudgetData():Observable<Budget>{
    return this._budgetData.asObservable();
  }


  modifyAnExpense(expense:BudgetExpense, expenseType:string, modificationType:string){
    
    switch(expenseType){
      case BUDGETEXPENSEENUMS.PreTaxExpenses: {
        this.modifyAPreTaxExpense(expense, modificationType);
      }
      case BUDGETEXPENSEENUMS.RegularExpenses: {
        this.modifyARegularExpense(expense, modificationType);
      }
      case BUDGETEXPENSEENUMS.SpendingCategory: {
        this.modifyASpendingCategory(expense, modificationType);
      }
      case BUDGETEXPENSEENUMS.TaxExpenses: {
        this.modifyATaxExpense(expense, modificationType);
      }
    }
    this.apiData.setBudgetData(this.budgetData);
  }

  modifyAPreTaxExpense(expense:BudgetExpense, modificationType:string){
    switch(modificationType){
      case "ADD":{
        this.budgetData.preTaxExpenses.concat(expense);
      }
      case "EDIT":{
        var indexToEdit = this.budgetData.preTaxExpenses.map(x=>x.id).indexOf(expense.id);
        this.budgetData.preTaxExpenses[indexToEdit] = expense;
      }
      case "DELETE":{
        let filteredPreTaxExpenses = this.budgetData.preTaxExpenses.filter(x=>x.id!=expense.id);
        this.budgetData.preTaxExpenses = this.budgetData.preTaxExpenses = filteredPreTaxExpenses;
      }
      default: {return;}
    }
  }

  modifyARegularExpense(expense:BudgetExpense, modificationType:string){
    switch(modificationType){
      case "ADD":{
        this.budgetData.regularExpenses.concat(expense);
      }
      case "EDIT":{
        var indexToEdit = this.budgetData.regularExpenses.map(x=>x.id).indexOf(expense.id);
        this.budgetData.regularExpenses[indexToEdit] = expense;
      }
      case "DELETE":{
        let filteredRegularExpenses = this.budgetData.regularExpenses.filter(x=>x.id!=expense.id);
        this.budgetData.regularExpenses = this.budgetData.regularExpenses = filteredRegularExpenses;
      }
      default: {return;}
    }
        
  }

  modifyASpendingCategory(expense:BudgetExpense, modificationType:string){
    switch(modificationType){
      case "ADD":{
        this.budgetData.spendingCategory.concat(expense);
      }
      case "EDIT":{
        var indexToEdit = this.budgetData.spendingCategory.map(x=>x.id).indexOf(expense.id);
        this.budgetData.spendingCategory[indexToEdit] = expense;
      }
      case "DELETE":{
        let filteredSpendingCategories = this.budgetData.spendingCategory.filter(x=>x.id!=expense.id);
        this.budgetData.spendingCategory = this.budgetData.spendingCategory = filteredSpendingCategories;
      }
      default: {return;}
    }
  }

  modifyATaxExpense(expense:BudgetExpense, modificationType:string){
    switch(modificationType){
      case "ADD":{
        this.budgetData.taxExpenses.concat(expense);
      }
      case "EDIT":{
        var indexToEdit = this.budgetData.taxExpenses.map(x=>x.id).indexOf(expense.id);
        this.budgetData.taxExpenses[indexToEdit] = expense;
      }
      case "DELETE":{
        let filteredTaxExpenses = this.budgetData.taxExpenses.filter(x=>x.id!=expense.id);
        this.budgetData.taxExpenses = this.budgetData.taxExpenses = filteredTaxExpenses;
      }
      default: {return;}
    }
  }
}
