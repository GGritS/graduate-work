import { Box } from "@mui/material";
import { ChangeEvent, FC } from "react";

type UploadImageProps = {
  onUpload: (imageUrl: string) => void;
  image: string;
};

export const UploadImage: FC<UploadImageProps> = ({ onUpload, image }) => {
  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? event.target.files[0] : undefined;
    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files);

      reader.onload = () => {
        const imageSrc = reader.result ? reader.result.toString() : undefined;
        if (imageSrc) {
          onUpload(imageSrc);
        }
      };
    }
  };

  return (
    <Box
      sx={{
        width: " 100%",
        height: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label htmlFor="addImage" style={{ width: "50%", height: "100%" }}>
        <input
          id="addImage"
          type="file"
          accept="image/*"
          onChange={(e) => uploadImage(e)}
          style={{ display: "none" }}
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid black",
            borderRadius: "0.6rem",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="картинка"
              style={{ width: "100%", borderRadius: "0.5rem" }}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
              }}
            >
              Натисніть сюди, для того щоб додати картинку (картинка повинна
              будти меньше 1Мб)
            </Box>
          )}
        </Box>
      </label>
    </Box>
  );
};
