using System;
using System.Collections.Generic;

namespace mon_io_app.Models.DTOs
{
    public class BudgetExpenseDTO
    {
        public long ID { get; set; }
        
        public string Name { get; set; }

        public double InitialValue { get; set; }

    }
}