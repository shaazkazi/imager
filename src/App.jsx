import React, { useState } from "react";
import Uploader from "./components/Uploader";
import MetadataDisplay from "./components/MetadataDisplay";

const App = () => {
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = (file) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    fetch("http://localhost:5000/api/metadata", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => {
        setMetadata(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
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
        <Uploader onUpload={handleUpload} />
        {isLoading ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            color: '#4b5563'
          }}>
            <div style={{
              display: 'inline-block',
              animation: 'spin 1s linear infinite',
              border: '3px solid #e5e7eb',
              borderTopColor: '#3b82f6',
              borderRadius: '50%',
              width: '2rem',
              height: '2rem',
              marginBottom: '0.5rem'
            }} />
            <p>Processing image metadata...</p>
          </div>
        ) : (
          <MetadataDisplay metadata={metadata} />
        )}
      </div>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;