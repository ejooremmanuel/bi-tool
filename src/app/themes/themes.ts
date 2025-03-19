import { colors, createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      multonion: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(68, 84, 21,1)",
      light: "rgba(68, 84, 21, 0.20)",
      contrastText: "#e8d0e7",
    },

    error: {
      main: "#D80606",
      light: "rgba(235, 87, 87, 0.3)",
    },
  
   
    secondary: {
      main: "rgba(219, 230, 76)",
      light: "rgba(219, 230, 76,0.2)",
    },
    success: { main: "#3ab56e", light: "#d4efdf" },
    info: { main: colors.grey[500], light: "#03a9f43b" },
    warning: { main: "#79581a", light: "#f8f4c3" },
  },

  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-scroller": {
            overflow: "auto!important",
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        textColorPrimary: "#414042",
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          // whiteSpace: "nowrap",
          borderBottom: "none",
          maxWidth: "350px",
          // overflow: "hidden",
          // textOverflow: "ellipsis",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          overflow: "scroll",
          maxWidth: "100%",
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          padding: "12px 16px",
          gap: "4px",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "normal",
          elevation: "0",
        },
        text: {
          textTransform: "capitalize",
        },
        contained: {
          textTransform: "none",
          color: "#ffffff",
        },
        outlined: {
          textTransform: "none",
          borderWidth: "2px",
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: { width: "100%", maxWidth: "650px" },
      },
    },

    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: "#00ae6d",
          },
          "&.Mui-active": {
            color: "#ab58a9",
          },
        },
      },
    },

    MuiStepLabel: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: "",
      },
    },

    MuiMenu: {
      styleOverrides: {
        root: {
          maxHeight: "400px",
        },
      },
    },
  },

  typography: {
    fontFamily:
      '"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
});

export default theme;
