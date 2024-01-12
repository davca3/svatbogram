"use client";

import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { themeOptions } from "@/theme";
import { FunctionComponent, PropsWithChildren } from "react";

const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <MUIThemeProvider theme={themeOptions}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
