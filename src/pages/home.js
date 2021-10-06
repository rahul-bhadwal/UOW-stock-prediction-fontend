import { Box, Divider, Typography, useTheme } from "@material-ui/core";
import { StockList } from "../components/home/stockList";
import { PageWrapper } from "../components/pageWrapper";
import { Recommandation } from "../components/home/recommandation/recommandation";
import { CompanyStats } from "../components/stock/companyStats/CompanyStats";

export const HomePage = () => {
  const theme = useTheme();

  return (
    <PageWrapper>
      <Box mt={2} mb={4}>
        <StockList />
      </Box>
      <Box mt={4}>
        <Recommandation />
      </Box>
    </PageWrapper>
  );
};
