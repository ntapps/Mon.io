using System;
using System.Collections.Generic;

namespace mon_io_app.Models.DTOs
{
    public class BudgetExpenseDetailedDTO
    {
        public long ID { get; set; }
        
        public string Name { get; set; }

        public double InitialValue { get; set; }

        // Pre-tax, Tax, Bill, Regular Expense, Spending
        public string Type { get; set; }

        public DateTime? DueDate { get; set; }

        public long BudgetID { get; set; }

        public long SavingsCategoryID { get; set; }

        public long OverflowExpenseCategoryID { get; set; }
    }
}