import { useState, useContext } from "react";
import styles from "./dragndrop.module.css";
import axios from "axios";
import { GlobalContext } from "../../context/Context";

export default function DragAndDrop() {
  const { formValue, setFormValue, imageUrl, setImageUrl } =
    useContext(GlobalContext);

  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  // const [imageUrl, setImageUrl] = useState("");

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dydzsodx5/image/upload";
  const UPLOAD_PRESET = "preset";
  const handleDrop = async (event) => {
    event.preventDefault();
    setError("");
    setUploading(true);

    const file = event.dataTransfer.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      setUploading(false);
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("File size must be less than 2MB.");
      setUploading(false);
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      setImageUrl(response.data.secure_url);
      setImage(URL.createObjectURL(file));
      setFormValue({ ...formValue, src: imageUrl });
    } catch (error) {
      console.error("Upload failed:", error);
      setError("Upload failed. Please try again.");
    }

    setUploading(false);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.dropContainer}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: "150px",
          height: "120px",
          border: "2px solid #24a0b5",
          borderRadius: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          cursor: "pointer",
          background: "#0e464f",
        }}
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <div>
            <img src="src\assets\cloud-download.png" alt="cloud icon" />
            <p>Drag & drop or click to upload</p>
          </div>
        )}
      </div>

      {uploading && (
        <p style={{ color: "blue", fontSize: "10px" }}>Uploading...</p>
      )}
      {error && <p style={{ color: "red", fontSize: "10px" }}>{error}</p>}

      {/* {imageUrl && (
        <div>
          <p>Uploaded image</p>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "100px", height: "100px" }}
          />

          <p>
            URL:
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              {imageUrl}
            </a>
          </p>
        </div>
      )} */}
    </div>
  );
}
