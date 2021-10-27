import { createTheme } from "@mui/material/styles";

const primaryMainColor = "#13223C";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryMainColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: primaryMainColor,
        },
      },
    },
  },
});
