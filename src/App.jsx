import React, { useState } from "react";
import Uploader from "./components/Uploader";
import MetadataDisplay from "./components/MetadataDisplay";

const App = () => {
  const [metadata, setMetadata] = useState(null);

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

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
      width: '100%',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '10px',
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(to right, #2563eb, #4f46e5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Image Metadata Viewer
        </h1>
        
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
  );
};

export default App;
