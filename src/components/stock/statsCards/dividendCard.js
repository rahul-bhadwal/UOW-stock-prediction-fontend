import { Paper, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  container: {
    borderRadius: 50,
    maxWidth: 200,
    display: "flex",
  },
  nameTxt: {
    fontSize: 17,
    fontWeight: 600,
    opacity: 0.45,
    textTransform: "uppercase",
    letterSpacing: 1.3,
    textAlign: "center",
    marginBottom: -5,
    marginTop: 5,
  },
});

const InfoCard = ({ name, value, smallFont }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.container}>
      <Box
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          variant="h3"
          style={{
            marginBottom: 10,
            fontSize: smallFont ? 36 : 45,
            opacity: 0.5,
          }}
        >
          {value ? (
            <>
              {value}
              <text style={{ fontSize: 25 }}>%</text>
            </>
          ) : (
            "-"
          )}
        </Typography>
        <Typography className={classes.nameTxt} variant="body1">
          {name}
        </Typography>
      </Box>
    </Paper>
  );
};

export const DividendCard = ({ rate, yild, avg }) => (
  <Box display="flex" gridGap={24}>
    <InfoCard name="Dividend Rate" value={rate} />
    <InfoCard
      name="Dividend Yild"
      value={yild}
      smallFont={yild && toString(yild).length > 3}
    />
    <InfoCard name="Dividend Yild 5y avg." value={avg} />
  </Box>
);
