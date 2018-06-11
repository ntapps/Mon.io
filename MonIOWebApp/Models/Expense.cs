using System;

namespace mon_io_app.Models
{
    public class Expense
    {
        public long ID { get; set; }

        public string Location { get; set; }

        public string Reason { get; set; }

        public double Cost { get; set; }

        public DateTime TransactionDate { get; set; }

        public bool IsDeleted { get; set; }

        public virtual Budget_ExpenseCategory Budget_ExpenseCategory { get; set; }
    }
}