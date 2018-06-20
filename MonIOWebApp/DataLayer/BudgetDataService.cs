using System;
using System.Collections.Generic;
using mon_io_app.Models.DTOs;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace mon_io_app.DataLayer
{
    public class BudgetDataService
    {
        private MonioContext _context;
        public BudgetDataService(MonioContext ctx)
        {
            _context = ctx;
        }

        public BudgetViewDTO GetCurrentBudgetOverview(long userID)
        {
            var budget = _context.Budget
                            .Include("User")
                            .Include("Budget_Incomes")
                            .Include("Budget_ExpenseCategories")
                            .Where(x => x.User.ID == userID)
                            .OrderBy(o => o.Year)
                            .ThenBy(o => o.Month)
                            .LastOrDefault();

            var retval = new BudgetViewDTO {
                ID = budget.ID,
                MonthlyIncome = budget.Budget_Incomes
                                    .Select(x => new BudgetIncomeDTO {
                                        ID = x.ID,
                                        Name = x.Name,
                                        Value = x.Value,
                                        IsTaxable = x.IsTaxable
                                    }).ToList(),
                PreTaxExpenses = budget.Budget_ExpenseCategories
                                    .Where(x => x.Type == "PreTax")
                                    .Select(x => new BudgetExpenseDTO {
                                        ID = x.ID,
                                        Name = x.Name,
                                        InitialValue = x.InitialValue
                                    }).ToList(),
                TaxExpenses = budget.Budget_ExpenseCategories
                                    .Where(x => x.Type == "Tax")
                                    .Select(x => new BudgetExpenseDTO {
                                        ID = x.ID,
                                        Name = x.Name,
                                        InitialValue = x.InitialValue
                                    }).ToList(),
                RegularExpenses = budget.Budget_ExpenseCategories
                                    .Where(x => x.Type == "RegularExpense")
                                    .Select(x => new BudgetExpenseDTO {
                                        ID = x.ID,
                                        Name = x.Name,
                                        InitialValue = x.InitialValue
                                    }).ToList(),
                SpendingCategory = budget.Budget_ExpenseCategories
                                    .Where(x => x.Type == "Spending")
                                    .Select(x => new BudgetExpenseDTO {
                                        ID = x.ID,
                                        Name = x.Name,
                                        InitialValue = x.InitialValue
                                    }).FirstOrDefault()
            };

            retval.SumIncome = retval.MonthlyIncome.Sum(x => x.Value);
            retval.SumPreTaxExpense = retval.PreTaxExpenses.Sum(x => x.InitialValue);
            retval.SumTaxExpense = retval.PreTaxExpenses.Sum(x => x.InitialValue);
            retval.SumExpense = retval.PreTaxExpenses.Sum(x => x.InitialValue);

            return retval;
        }
    }
}