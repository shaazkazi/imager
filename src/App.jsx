import React, { useState } from "react";
import Uploader from "./components/Uploader";
import MetadataDisplay from "./components/MetadataDisplay";

const App = () => {
  const [metadata, setMetadata] = useState(null);

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const API_URL = 'https://imager-backend.onrender.com'

    fetch(`${API_URL}/api/metadata`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => setMetadata(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 50%, #f0f4ff 100%)',
      minHeight: '100vh',
      padding: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '10px'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '0.5rem',
          background: 'linear-gradient(to right, #2563eb, #4f46e5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Image Metadata Viewer
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '0.875rem',
          marginBottom: '1.5rem'
        }}>
          🔒 Your privacy matters - Images are processed locally and never stored on our servers
        </p>
        <div style={{
          width: '100%',
          background: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          boxSizing: 'border-box'
        }}>
          <Uploader onUpload={handleUpload} />
          <MetadataDisplay metadata={metadata} />
        </div>
      </div>
    </div>
  );};

export default App;
