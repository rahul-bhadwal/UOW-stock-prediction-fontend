import {
  Box,
  Paper,
  Typography,
  Divider,
  useMediaQuery,
  LinearProgress,
} from "@material-ui/core";
import { useQuery } from "react-query";
import { fetchVolatility } from "../../../api/api";
import { ReturnsRecommandation } from "./ReturnsRecommandation";
import { VoletalityRecommandation } from "./VoletalityRecommandation";

export const Recommandation = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { data, isLoading } = useQuery("voletality", () => fetchVolatility());

  return (
    <Paper
      style={{
        padding: 25,
        borderRadius: 10,
        paddingBottom: 0,
        marginTop: 24,
        marginBottom: 20,
      }}
      elevation={4}
      variant="outlined"
    >
      <Typography variant="h5">Recommandations</Typography>
      <Divider style={{ marginTop: 15 }} />
      {isLoading ? (
        <Box height={460}>
          <LinearProgress style={{ opacity: 0.6 }} />
        </Box>
      ) : (
        <Box
          py={4}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexDirection={isMobile ? "column" : "row"}
        >
          <Box
            display="flex"
            width="100%"
            flexDirection="column"
            alignItems="center"
          >
            <VoletalityRecommandation
              data={data.volatility}
              isMobile={isMobile}
            />
            <Typography variant="body2" style={{ opacity: 0.6 }}>
              <b>Voletality</b>
            </Typography>
          </Box>
          {isMobile && <Divider style={{ margin: "40px 0", width: "100%" }} />}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            height="100%"
            width="100%"
          >
            <ReturnsRecommandation data={data.returns} isMobile={isMobile} />
            <Typography variant="body2" style={{ opacity: 0.6 }}>
              <b>Returns</b>
            </Typography>
          </Box>
        </Box>
      )}
    </Paper>
  );
};
