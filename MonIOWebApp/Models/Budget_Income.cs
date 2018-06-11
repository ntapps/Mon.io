namespace mon_io_app.Models
{
    public class Budget_Income
    {
        public long ID { get; set; }
        
        public string Name { get; set; }

        public double Value { get; set; }

        public bool IsTaxable { get; set; }

        public virtual Budget Budget { get; set; }
    }
}