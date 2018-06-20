using System.Collections.Generic;

namespace mon_io_app.Models
{
    public class Budget
    {
        public long ID     { get; set; }

        public int  Year   { get; set; }

        public int  Month  { get; set; }

        public virtual User User { get; set; }

        public virtual List<Budget_Income> Budget_Incomes { get; set; }

        public virtual List<Budget_ExpenseCategory> Budget_ExpenseCategories { get; set; }
    }
}