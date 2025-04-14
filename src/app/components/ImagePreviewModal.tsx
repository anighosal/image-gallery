import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Dialog, DialogActions, IconButton } from "@mui/material";

interface Props {
  open: boolean;
  imageUrl: string | null;
  onClose: () => void;
  onDelete: () => void;
}

const ImagePreviewModal: React.FC<Props> = ({
  open,
  imageUrl,
  onClose,
  onDelete,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          alt="Preview"
          sx={{
            width: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      )}
      <DialogActions sx={{ justifyContent: "space-between", px: 2 }}>
        <IconButton onClick={onDelete} color="error">
          <DeleteIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default ImagePreviewModal;
