using System.Collections.Generic;

namespace mon_io_app.Models
{
    public class SavingsCategory_Main
    {
        public long ID { get; set; }

        public string Name { get; set; }

        public virtual User User { get; set; }

        public virtual List<SavingsCategory_Child> SavingsCategory_Children { get; set; }

        public virtual List<SavingsCategory_BalanceTransfer> BalanceTransfersSent { get; set; }

        public virtual List<SavingsCategory_BalanceTransfer> BalanceTransfersReceived { get; set; }
    }
}