//
export class Budget {
  public id: Number;
  public year: Number;
  public month: Number;
  public expenseName: string;
  public expenseValue: number;

  constructor(id:Number, year:Number, month:Number, expenseName:string, expenseValue:number){
    this.id = id;
    this.year = year;
    this.month = month;
    this.expenseName = expenseName;
    this.expenseValue = expenseValue;
  };
}