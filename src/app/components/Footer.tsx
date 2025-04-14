import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{ p: 2, textAlign: "center", bgcolor: "#f5f5f5", mt: 5 }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} My Gallery
    </Typography>
  </Box>
);

export default Footer;
