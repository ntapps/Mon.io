using System;

namespace mon_io_app.Models
{
    public class SavingsCategory_BalanceTransfer
    {
        public long ID { get; set; }

        public DateTime TransactionDate { get; set; }

        public double Value { get; set; }

        public bool IsDeleted { get; set; }

        public virtual SavingsCategory_Main SavingsCategoryTo { get; set; }

        public virtual SavingsCategory_Main SavingsCategoryFrom { get; set; }
    }
}