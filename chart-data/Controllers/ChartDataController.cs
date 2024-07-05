using chart_data.Models;
using Microsoft.AspNetCore.Mvc;

namespace chart_data.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChartDataController : ControllerBase
{

    private readonly ILogger<ChartDataController> _logger;

    public ChartDataController(ILogger<ChartDataController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetChartData")]
    public ActionResult<IEnumerable<CreditData>> Get()
    {
        var creditData = new List<CreditData>
            {
                new CreditData
                {
                    Value = "6M",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 10 },
                        new ChartData { Date = "03/24", Value = 150.30 },
                        new ChartData { Date = "04/20", Value = 250 },
                        new ChartData { Date = "04/30", Value = 430 },
                        new ChartData { Date = "05/10", Value = 420.95 },
                        new ChartData { Date = "05/24", Value = 450.95 }
                    },
                    WeightedBond = "1.89 BSD",
                    AsOf = "2024/05/24"
                },
                new CreditData
                {
                    Value = "12M",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 10 },
                        new ChartData { Date = "03/24", Value = 150.30 },
                        new ChartData { Date = "04/20", Value = 250 },
                        new ChartData { Date = "04/30", Value = 430 },
                        new ChartData { Date = "05/10", Value = 420.95 },
                        new ChartData { Date = "05/24", Value = 450.95 }
                    },
                    WeightedBond = "1.89 BSD",
                    AsOf = "2024/05/24"
                },
                new CreditData
                {
                    Value = "3Y",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 10 },
                        new ChartData { Date = "03/24", Value = 150.30 },
                        new ChartData { Date = "04/20", Value = 250 },
                        new ChartData { Date = "04/30", Value = 430 },
                        new ChartData { Date = "05/10", Value = 420.95 },
                        new ChartData { Date = "05/24", Value = 450.95 }
                    },
                    WeightedBond = "1.89 BSD",
                    AsOf = "2024/05/24"
                },
                new CreditData
                {
                    Value = "5Y",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 10 },
                        new ChartData { Date = "03/24", Value = 150.30 },
                        new ChartData { Date = "04/20", Value = 250 },
                        new ChartData { Date = "04/30", Value = 430 },
                        new ChartData { Date = "05/10", Value = 420.95 },
                        new ChartData { Date = "05/24", Value = 450.95 }
                    },
                    WeightedBond = "1.89 BSD",
                    AsOf = "2024/05/24"
                },
                new CreditData
                {
                    Value = "FYTD",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 10 },
                        new ChartData { Date = "03/24", Value = 150.30 },
                        new ChartData { Date = "04/20", Value = 250 },
                        new ChartData { Date = "04/30", Value = 430 },
                        new ChartData { Date = "05/10", Value = 420.95 },
                        new ChartData { Date = "05/24", Value = 450.95 }
                    },
                    WeightedBond = "1.89 BSD",
                    AsOf = "2024/05/24"
                }
            };
        return Ok(creditData);
    }
}

