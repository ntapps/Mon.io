using System.Collections.Generic;

namespace mon_io_app.Models
{
    public class SavingsCategory_Child
    {
        public long ID     { get; set; }

        public int  Year   { get; set; }

        public int  Month  { get; set; }

        public virtual SavingsCategory_Main SavingsCategory_Main { get; set; }

        public virtual List<Budget_ExpenseCategory> Budget_ExpenseCategories { get; set; }
    }
}