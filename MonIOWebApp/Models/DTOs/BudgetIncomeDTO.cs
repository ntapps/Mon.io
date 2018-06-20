namespace mon_io_app.Models.DTOs
{
    public class BudgetIncomeDTO
    {
        public long ID { get; set; }
        
        public string Name { get; set; }

        public double Value { get; set; }

        public bool IsTaxable { get; set; }
    }
}