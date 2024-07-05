using System;
namespace chart_data.Models
{
	public class CreditData
	{
		public required string Value { get; set; }
		public required List<ChartData> ChartData { get; set; }
		public required string WeightedBond { get; set; }
		public required string AsOf { get; set; }
	}
}

