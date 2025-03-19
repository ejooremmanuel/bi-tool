"use client"; // This ensures it's a Client Component

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../themes/themes";
import { useState, useEffect } from "react";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {

    const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      {children}
    </ThemeProvider>
  );
}
