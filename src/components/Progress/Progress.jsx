import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B08',
    },
  },
});

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
      <ThemeProvider theme={theme}>
        <CircularProgress color="primary" />
      </ThemeProvider>
    </Box>
  );
}
