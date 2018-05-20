import { ExpensesModule } from './expenses.module';

describe('ExpensesModule', () => {
  let expensesModule: ExpensesModule;

  beforeEach(() => {
    expensesModule = new ExpensesModule();
  });

  it('should create an instance', () => {
    expect(expensesModule).toBeTruthy();
  });
});
