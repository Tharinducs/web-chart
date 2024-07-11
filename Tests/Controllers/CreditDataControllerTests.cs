using System;
using Moq;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using chart_data.Models;
using System.Reflection;

namespace chart_data.Controllers
{
	public class CreditDataControllerTests
	{
        private readonly Mock<ILogger<CreditDataController>> _mockLogger;
        private readonly CreditDataController _controller;
        private readonly List<CreditData> _testData;

        public CreditDataControllerTests()
		{
            _mockLogger = new Mock<ILogger<CreditDataController>>();
            _controller = new CreditDataController(_mockLogger.Object);

            var type = typeof(CreditDataController);
            var field = type.GetField("_creditData", BindingFlags.NonPublic | BindingFlags.Instance);

            if(field != null)
            {
                _testData = new List<CreditData>
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
            };

                field.SetValue(_controller, _testData);
            }
            else
            {
                throw new InvalidOperationException("_creditData field not found.");
            }

        }

        [Fact]
        public void GetReturnsAllCreditData()
        {
            var result = _controller.Get();
            var actionResult = Assert.IsType<ActionResult<IEnumerable<CreditData>>>(result);
            var okResult = Assert.IsType<OkObjectResult>(actionResult.Result);
            var returnValue = Assert.IsType<List<CreditData>>(okResult.Value);
            Assert.Equal(_testData.Count, returnValue.Count);
        }

        [Theory]
        [InlineData("6M")]
        [InlineData("12M")]
        public void GetValidParamReturnsCorrectCreditData(string param)
        {
            var result = _controller.Get(param);
            var actionResult = Assert.IsType<ActionResult<IEnumerable<CreditData>>>(result);
            var okResult = Assert.IsType<OkObjectResult>(actionResult.Result);
            var returnValue = Assert.IsType<List<CreditData>>(okResult.Value);
            Assert.Single(returnValue);
            Assert.Equal(param, returnValue.First().Value);
        }
    }
}

