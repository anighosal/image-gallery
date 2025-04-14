"use client";

import { Box, Container } from "@mui/material";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";
import DeleteConfirmationDialog from "./components/DeleteConfirmationDialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import ImagePreviewModal from "./components/ImagePreviewModal";

const Home = () => {
  const [images, setImages] = useState<string[]>([]);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const handleUploadImage = (url: string) => {
    setImages((prev) => [...prev, url]);
  };

  const handleDelete = (index: number) => {
    setDeleteIndex(index);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      setImages((prev) => prev.filter((_, i) => i !== deleteIndex));
      toast.success("Image deleted successfully ✅");
      setDeleteIndex(null);
    }
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
  };

  return (
    <>
      <Header />
      <Banner onUploadImage={handleUploadImage} />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {images.length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="60vh"
          >
            <Box component="h2" color="text.secondary">
              Welcome to 📸 My Gallery
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 3,
              mt: 4,
            }}
          >
            {images.map((url, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <ImageCard
                  imageUrl={url}
                  onClick={() => {
                    setPreviewImageUrl(url);
                    setPreviewIndex(index);
                  }}
                  onDelete={() => handleDelete(index)}
                />
              </Box>
            ))}
          </Box>
        )}
      </Container>

      <Footer />

      {/* Confirmation dialog */}
      <DeleteConfirmationDialog
        open={deleteIndex !== null}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />

      {/* Preview modal */}
      <ImagePreviewModal
        open={!!previewImageUrl}
        imageUrl={previewImageUrl}
        onClose={() => {
          setPreviewImageUrl(null);
          setPreviewIndex(null);
        }}
        onDelete={() => {
          if (previewIndex !== null) {
            setImages((prev) => prev.filter((_, i) => i !== previewIndex));
            setPreviewImageUrl(null);
            setPreviewIndex(null);
            toast.success("Image deleted successfully ✅");
          }
        }}
      />

      <ToastContainer position="top-center" />
    </>
  );
};

export default Home;
