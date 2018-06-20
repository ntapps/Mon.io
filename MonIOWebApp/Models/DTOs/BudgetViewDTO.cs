using System.Collections.Generic;

namespace mon_io_app.Models.DTOs
{
    public class BudgetViewDTO
    {
        public long ID { get; set; }
        
        public double SumIncome { get; set; }

        public double SumPreTaxExpense { get; set; }

        public double SumTaxExpense { get; set; }

        public double SumExpense { get; set; }

        public List<BudgetIncomeDTO> MonthlyIncome { get; set; }

        public List<BudgetExpenseDTO> PreTaxExpenses { get; set; }

        public List<BudgetExpenseDTO> TaxExpenses { get; set; }

        public List<BudgetExpenseDTO> RegularExpenses { get; set; }

        public BudgetExpenseDTO SpendingCategory { get; set; }
    }
}