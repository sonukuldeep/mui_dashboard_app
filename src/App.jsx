import { Box, ThemeProvider, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box>
          <Typography>Hello, world</Typography>
        </Box>
      </main>
    </ThemeProvider>
  )
}

export default App