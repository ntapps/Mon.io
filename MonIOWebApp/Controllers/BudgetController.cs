using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using mon_io_app.DataLayer;
using mon_io_app.Models.DTOs;

namespace mon_io_app.Controllers
{
    [Route("api/[controller]")]
    public class BudgetController : Controller
    {
        private IConfiguration _iconfiguration;
        private BudgetDataService _budgetDataService;

        public BudgetController(IConfiguration iconfiguration, MonioContext context )
        {
            _iconfiguration = iconfiguration;

            _budgetDataService = new BudgetDataService(context);
        }

        [HttpGet("[action]")]
        public BudgetViewDTO GetMainBudgetView(long userid)
        {
            return _budgetDataService.GetCurrentBudgetOverview(userid);
        }

        [HttpGet("[action]")]
        public BudgetExpenseDetailedDTO GetDetailedBudgetExpenseCategory(long expensecategoryid)
        {
            return _budgetDataService.GetDetailedBudgetExpenseByID(expensecategoryid);
        }
    }
}
