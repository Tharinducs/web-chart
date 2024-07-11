using chart_data.Models;
using Microsoft.AspNetCore.Mvc;

namespace chart_data.Controllers;

[ApiController]
[Route("api/stock")]
public class StockDataController : ControllerBase
{

    private readonly ILogger<StockDataController> _logger;
    private readonly List<StockData> _stockData;

    public StockDataController(ILogger<StockDataController> logger)
    {
        _logger = logger;
        _stockData = new List<StockData>
           {
                new StockData
                {
                    Value = "6M",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 30 },
                        new ChartData { Date = "03/24", Value = 150.30 },
                        new ChartData { Date = "04/20", Value = 250 },
                        new ChartData { Date = "04/30", Value = 430 },
                        new ChartData { Date = "05/10", Value = 420.95 },
                        new ChartData { Date = "05/24", Value = 450.95 }
                    },
                    LatestPrice = "450.95",
                },
                new StockData
                {
                    Value = "12M",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 30 },
                        new ChartData { Date = "03/24", Value = 150.30 },
                        new ChartData { Date = "04/20", Value = 250 },
                        new ChartData { Date = "04/30", Value = 430 },
                        new ChartData { Date = "05/10", Value = 420.95 },
                        new ChartData { Date = "05/24", Value = 950.95 }
                    },
                    LatestPrice = "950.95",
                },
                new StockData
                {
                    Value = "3Y",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/24", Value = 30 },
                        new ChartData { Date = "03/24", Value = 350.30 },
                        new ChartData { Date = "04/20", Value = 450 },
                        new ChartData { Date = "04/30", Value = 530 },
                        new ChartData { Date = "05/10", Value = 420.95 },
                        new ChartData { Date = "05/24", Value = 450.95 }
                    },
                    LatestPrice = "450.95",
                },
                new StockData
                {
                    Value = "5Y",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/01", Value = 230.2 },
                        new ChartData { Date = "01/02", Value = 231.5 },
                        new ChartData { Date = "01/03", Value = 228.9 },
                        new ChartData { Date = "01/04", Value = 233.3 }
                    },
                    LatestPrice = "233.3",
                },
                new StockData
                {
                    Value = "FYTD",
                    ChartData = new List<ChartData>
                    {
                        new ChartData { Date = "01/01", Value = 2800.1 },
                        new ChartData { Date = "01/02", Value = 2820.4 },
                        new ChartData { Date = "01/03", Value = 2785.6 },
                        new ChartData { Date = "01/04", Value = 2815.7 }
                    },
                    LatestPrice = "2815.7",
                },
            };
    }

    [HttpGet]
    public ActionResult<IEnumerable<StockData>> Get()
    {
        _logger.LogInformation("get whole chart data list");
        return Ok(_stockData);
    }

    [HttpGet("{param}")]
    public ActionResult<IEnumerable<StockData>> Get(string param)
    {
        _logger.LogInformation("get list according to param");
        var filteredList = _stockData.Where(c => c.Value == param).ToList();
        _logger.LogInformation($"Filtered list length {filteredList.Count()}");
        return Ok(filteredList);
    }
}

