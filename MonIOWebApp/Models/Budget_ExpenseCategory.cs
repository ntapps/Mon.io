using System;
using System.Collections.Generic;

namespace mon_io_app.Models
{
    public class Budget_ExpenseCategory
    {
        public long ID { get; set; }
        
        public string Name { get; set; }

        public double InitialValue { get; set; }

        // Pre-tax, Tax, Bill, Regular Expense, Spending
        public string Type { get; set; }

        public DateTime? DueDate { get; set; }

        public virtual Budget Budget { get; set; }

        public virtual SavingsCategory_Child SavingsCategory_Child { get; set; }

        public virtual Budget_ExpenseCategory OverflowExpenseCategoryTo { get; set; }

        public virtual List<Budget_ExpenseCategory> OverflowExpenseCategoryFrom { get; set; }

        public virtual List<Expense> Expenses { get; set; }

        public virtual List<Expense_Bill> Expense_Bills { get; set; }
        
    }
}