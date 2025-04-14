import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

interface ImageCardProps {
  imageUrl: string;
  onDelete: () => void;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  onDelete,
  onClick,
}) => {
  return (
    <Card sx={{ width: 200, boxShadow: 3, position: "relative" }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt="Uploaded"
        onClick={onClick}
        sx={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
          Uploaded Image
        </Typography>
      </CardContent>
      <IconButton
        onClick={onDelete}
        sx={{ position: "absolute", top: 5, right: 5, background: "#fff" }}
        size="small"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Card>
  );
};

export default ImageCard;
