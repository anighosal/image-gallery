import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";
import React, { useRef } from "react";

interface UploadImageProps {
  onUpload: (imageUrl: string) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url); // send to parent
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <IconButton
        onClick={handleClick}
        sx={{
          width: 80,
          height: 80,
          border: "2px dashed #90ee90",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#90ee90",
          "&:hover": {
            backgroundColor: "#f0fff0",
          },
        }}
      >
        <AddIcon fontSize="large" />
      </IconButton>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default UploadImage;
