using System;
namespace chart_data.Models
{
	public class StockData
	{
		public required string Value { get; set; }
		public required List<ChartData> ChartData { get; set; }
		public required string LatestPrice { get; set; }
	}
}

