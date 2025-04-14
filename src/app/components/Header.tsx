"use client";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{ backgroundColor: "#f5f5f5" }} // Light green color
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div" sx={{ color: "#047e29" }}>
            Image Gallery
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
