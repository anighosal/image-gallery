import { Box, Container } from "@mui/material";

import UploadImage from "./UploadImage";

interface BannerProps {
  onUploadImage: (imageUrl: string) => void;
}

const Banner: React.FC<BannerProps> = ({ onUploadImage }) => {
  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 80,
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", left: 0 }}>
            <UploadImage onUpload={onUploadImage} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
