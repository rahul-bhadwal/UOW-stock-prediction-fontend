import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { PageWrapper } from "../components/pageWrapper";
import { StockInfo } from "../components/stock/stockIinfo";
import { RealtimePrediction } from "../components/stock/realtimePrediction";
import { StockChart } from "../components/stockChart";
import { NewsContainer } from "../components/stock/news/newsContainer";
import { StockData } from "../dummyData/stock";
import { CompanyStats } from "../components/stock/companyStats/CompanyStats";
import { MarginPieChart } from "../components/stock/companyStats/PieChart";
import { StockStats } from "../dummyData/stats";
import { Colors } from "../constants/colors";
import { StatsCards } from "../components/stock/statsCards/StatsCards";
import { VolumeRecommandation } from "../components/stock/recommandation/VolumeRecommandation";
import { RevenueEarning } from "../components/stock/companyStats/RevenueEarning";
import { SimilarityRecommandation } from "../components/stock/recommandation/SimilarityRecommandation";

// const useStyle = makeStyles({
//   graphContiner: {
//     '&>*': {
//       flexShrink: 1
//     }
//   },
//   backBtn: {
//     position: 'fixed',
//     left: 30,
//     marginTop: 5,
//     backgroundColor: '#e0e0e07d',
//     border: '1.5px solid transparent',
//     '&:hover': {
//       border: '1.5px solid #cecece'
//     }
//   }
// })

export const StockPage = () => {
  const { symbol } = useParams();
  const isMobileView = useMediaQuery("(max-width:600px)");

  const stock = StockData[symbol];
  const Stats = StockStats[symbol];

  const MarginData = [
    {
      fill: Colors.ORANGE,
      name: "Gross profit",
      value: Stats.gross_profit_margin,
    },
    {
      fill: Colors.GREEN_1,
      name: "Net profit",
      value: Stats.net_profit_margin,
    },
    {
      fill: Colors.YELLOW,
      name: "Operating Margin",
      value: Stats.operating_margin,
    },
  ];

  return (
    <PageWrapper withBackBtn>
      <Box
        display="flex"
        gridGap={20}
        mb={isMobileView ? 2 : 3}
        mt={isMobileView ? -0.8 : 1}
        flexDirection={isMobileView ? "column" : "row"}
      >
        <StockInfo stock={stock} symbol={symbol} />
        {/* {!isMobileView && <RealtimePrediction />} */}
        {<RealtimePrediction stockSymbol={symbol} />}
      </Box>

      <StockChart symbol={symbol} />

      <StatsCards symbol={symbol} />

      <SimilarityRecommandation symbol={symbol} />

      <VolumeRecommandation symbol={symbol} />

      <Box sx={{ fontFamily: useTheme().typography.fontFamily }}>
        <CompanyStats symbol={symbol} />
      </Box>

      <Box
        display="flex"
        flexDirection={isMobileView ? "column" : "row"}
        gridGap={24}
        mb={3}
      >
        <MarginPieChart data={MarginData} />
        <RevenueEarning symbol={symbol} />
      </Box>
      <NewsContainer stockName={stock.name} />

      <Box mb={5} />
    </PageWrapper>
  );
};
