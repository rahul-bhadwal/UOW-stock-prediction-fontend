import {
  Box,
  Checkbox,
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
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

const StyledRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const Ratios = ({ data }) => (
  <Box mt={4} mb={2}>
    <Typography variant="h6">Useful Ratios</Typography>
    <Box display="flex" mt={2} alignItems="center">
      <Box flexGrow={1} height={400}>
        <ResponsiveContainer>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart data={data} barSize={40}>
              <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#fff" }}
                background
                clockWise
                dataKey="value"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </ResponsiveContainer>
      </Box>

      <TableContainer component={Paper} style={{ width: "60%" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>View</TableCell>
              <TableCell>Identifier</TableCell>
              <TableCell>Ratio</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell align="center">
                  <Box
                    width={15}
                    height={15}
                    borderRadius={50}
                    bgcolor={item.fill}
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.value}</TableCell>
              </StyledRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
);
