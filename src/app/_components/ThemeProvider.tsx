"use client";

import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { themeOptions } from "@/theme";
import { SnackbarProvider } from "@/app/_components/SnackbarProvider";
import { FunctionComponent, PropsWithChildren } from "react";

const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <MUIThemeProvider theme={themeOptions}>
      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
