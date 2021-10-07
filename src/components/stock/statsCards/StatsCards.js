import { Box } from "@material-ui/core";
import { DividendCard } from "./dividendCard";
import { InfoTableCard } from "./InfoTableCard";
import { StockStats } from "../../../dummyData/stats";

export const StatsCards = ({ symbol }) => {
  const stock = StockStats[symbol];

  const infoTableData = [
    { name: "Earnings Growth", value: stock.earningsGrowth },
    { name: "Quaterly Earnings Growth", value: stock.earningsQuarterlyGrowth },
    { name: "Enterprice Value", value: stock.enterpriseValue },
    { name: "Enterprice Multiple", value: stock.enterpriseMultiple },
  ];

  return (
    <Box mt={4} mb={4} display="flex">
      <DividendCard
        rate={stock.dividendRate}
        yild={stock.dividendYield}
        avg={stock.fiveYearAvgDividendYield}
      />
      <InfoTableCard data={infoTableData} />
    </Box>
  );
};
