using System.Collections.Generic;

namespace mon_io_app.Models
{
    public class User
    {
        public long ID { get; set; }

        public string UserName { get; set; }

        public string GoogleAccountID { get; set; }

        public virtual List<Budget> Budgets { get; set; }

        public virtual List<SavingsCategory_Main> SavingsCategories { get; set; }
    }
}