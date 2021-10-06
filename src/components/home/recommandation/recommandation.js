import { Box, Paper, Typography, Divider } from "@material-ui/core";

export const Recommandation = () => {
  return (
    <Paper
      style={{ padding: 25, borderRadius: 10, paddingBottom: 0, marginTop: 24 }}
      elevation={4}
      variant="outlined"
    >
      <Typography variant="h5">Recommandations</Typography>
      <Divider style={{ marginTop: 15 }} />
      <Box height={250}></Box>
    </Paper>
  );
};
