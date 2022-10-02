import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
export default function Progress() {
  return (
    <Box
      sx={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
