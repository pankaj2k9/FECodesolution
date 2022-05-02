import React from "react";
import { AppBar, styled, Box, Toolbar } from "@mui/material";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Typography } from "@mui/material";
export const Header = () => {
  return (
    <AppBarWrapper sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <ToolBarWrapper disableGutters variant="dense">
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h1">Where in the world?</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <ThemeSwitcher />
        </Box>
      </ToolBarWrapper>
    </AppBarWrapper>
  );
};

const ToolBarWrapper = styled(Toolbar)(({ theme }) => ({
  maxWidth: "1440px",
  width: "100%",
  padding: theme.spacing(0, 1),
}));

const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  width: "100%",
  alignItems: "center",
  padding: theme.spacing(0.5, 1),
  position: "relative"
}));
