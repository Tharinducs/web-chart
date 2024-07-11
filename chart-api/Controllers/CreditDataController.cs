using chart_data.Models;
using Microsoft.AspNetCore.Mvc;

namespace chart_data.Controllers;

[ApiController]
[Route("api/credit")]
public class CreditDataController : ControllerBase
{

    private readonly ILogger<CreditDataController> _logger;
    private readonly List<CreditData> _creditData;

    public CreditDataController(ILogger<CreditDataController> logger)
    {
        _logger = logger;
        _creditData = new List<CreditData>
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
                        new ChartData { Date = "01/24", Value = 20 },
                        new ChartData { Date = "03/24", Value = 450.30 },
                        new ChartData { Date = "04/20", Value = 350 },
                        new ChartData { Date = "04/30", Value = 480 },
                        new ChartData { Date = "05/10", Value = 490.95 },
                        new ChartData { Date = "05/24", Value = 550.95 }
                    },
                    WeightedBond = "2.89 BSD",
                    AsOf = "2024/05/24"
                },
                new CreditData
                {
                    Value = "3Y",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 0 },
                        new ChartData { Date = "03/24", Value = 250.30 },
                        new ChartData { Date = "04/20", Value = 350 },
                        new ChartData { Date = "04/30", Value = 480 },
                        new ChartData { Date = "05/10", Value = 440.95 },
                        new ChartData { Date = "05/24", Value = 470 }
                    },
                    WeightedBond = "3.89 BSD",
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
                    WeightedBond = "2.40 BSD",
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
                    WeightedBond = "3.20 BSD",
                    AsOf = "2024/05/24"
                }
            };
    }

    [HttpGet]
    public ActionResult<IEnumerable<CreditData>> Get()
    {
        _logger.LogInformation("get whole chart list");
        return Ok(_creditData);
    }

    [HttpGet("{param}")]
    public ActionResult<IEnumerable<CreditData>> Get(string param)
    {
        _logger.LogInformation("get list according to param");
        var filteredList = _creditData.Where(c => c.Value == param).ToList();
        _logger.LogInformation($"Filtered list length {filteredList.Count()}");
        return Ok(filteredList);
    }
}

