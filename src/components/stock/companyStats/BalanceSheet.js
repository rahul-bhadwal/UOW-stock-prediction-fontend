import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import {
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Colors } from "../../../constants/colors";

const BarGraph = ({ data }) => (
  <ResponsiveContainer>
    <BarChart data={data}>
      <ReferenceLine y={0} stroke="#000" />
      <Tooltip wrapperStyle={{ fontSize: 13 }} />
      <Bar dataKey="totalAssets" fill={Colors.BLUE} />
      <Bar dataKey="longTermDebt" fill={Colors.ORANGE} />
      <XAxis dataKey="date" hide />
    </BarChart>
  </ResponsiveContainer>
);

const StyledRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const BalanceSheet = ({ annualData, quarterData }) => {
  return (
    <Box mt={4} mb={4}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Balance sheet</Typography>
        <Box display="flex" alignItems="center" gridGap={30}>
          <Box display="flex" alignItems="center">
            <Box
              width={15}
              height={15}
              borderRadius={50}
              bgcolor={Colors.BLUE}
              mr={1}
            />
            <Typography variant="body2">Assets</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box
              width={15}
              height={15}
              borderRadius={50}
              bgcolor={Colors.ORANGE}
              mr={1}
            />
            <Typography variant="body2">Debt</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" mt={2} justifyContent="space-between">
        <TableContainer
          component={Paper}
          style={{ height: "fit-content", width: "60%" }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Balance</TableCell>
                <TableCell>Assets</TableCell>
                <TableCell>Debt</TableCell>
                <TableCell>Year/Quater</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...annualData, ...quarterData].map((ann, i) => (
                <StyledRow key={i}>
                  <TableCell>{ann.balance}</TableCell>
                  <TableCell>{ann.totalAssets}</TableCell>
                  <TableCell>{ann.longTermDebt}</TableCell>
                  <TableCell>{ann.date}</TableCell>
                </StyledRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box width={150} flexGrow={1}>
            <BarGraph data={annualData} />
          </Box>
          <Typography variant="body2" style={{ opacity: 0.7 }}>
            <b>Annual</b>
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box width={150} flexGrow={1}>
            <BarGraph data={quarterData} />
          </Box>
          <Typography variant="body2" style={{ opacity: 0.7 }}>
            <b>Quater</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
