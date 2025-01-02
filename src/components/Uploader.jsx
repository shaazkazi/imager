import React, { useState } from "react";

const Uploader = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div 
        style={{
          width: '100%',
          maxWidth: '400px',
          border: `2px dashed ${isDragging ? '#3b82f6' : '#e5e7eb'}`,
          borderRadius: '0.5rem',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'all 0.2s ease',
          backgroundColor: isDragging ? '#f0f9ff' : 'transparent',
          textAlign: 'center'
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const file = e.dataTransfer.files[0];
          handleFile(file);
        }}
      >
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'contain',
                borderRadius: '0.5rem'
              }}
            />
          ) : (
            <div>
              <svg
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  color: '#9ca3af',
                  margin: '0 auto'
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p style={{
                marginTop: '0.5rem',
                fontSize: '0.875rem',
                color: '#6b7280'
              }}>
                Drag and drop or click to upload
              </p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files[0])}
            style={{ display: 'none' }}
            id="file-input"
          />
          <label
            htmlFor="file-input"
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s ease',
              marginTop: '0.5rem'
            }}
          >
            Select Image
          </label>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
