import React, { useState } from 'react';

const MetadataDisplay = ({ metadata }) => {
  const [copyStatus, setCopyStatus] = useState(false);

  if (!metadata) return null;

  const handleCopyAll = () => {
    const formattedData = Object.entries(metadata)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    navigator.clipboard.writeText(formattedData)
      .then(() => {
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000);
      });
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      borderRadius: '0.5rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.75rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem'
      }}>
        <h2 style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#1f2937',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          Image Metadata
        </h2>
        <button
          onClick={handleCopyAll}
          style={{
            padding: '0.5rem',
            backgroundColor: copyStatus ? '#10B981' : '#f3f4f6',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.2s',
            color: copyStatus ? 'white' : 'currentColor'
          }}
          title={copyStatus ? "Copied!" : "Copy all metadata"}
        >
          {copyStatus ? (
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          )}
        </button>
      </div>
      <div style={{
        width: '100%',
        maxWidth: '100%',
        overflowX: 'auto',
        borderRadius: '0.375rem',
        border: '1px solid #e5e7eb',
        WebkitOverflowScrolling: 'touch'
      }}>
        <table style={{
          width: '100%',
          minWidth: '100%',
          borderCollapse: 'collapse',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          <thead style={{
            backgroundColor: '#f9fafb'
          }}>
            <tr>
              <th style={{
                width: '35%',
                minWidth: '120px',
                padding: '0.625rem',
                textAlign: 'left',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#4b5563',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Property
              </th>
              <th style={{
                width: '65%',
                padding: '0.625rem',
                textAlign: 'left',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#4b5563',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(metadata).map(([key, value]) => (
              <tr key={key}>
                <td style={{
                  padding: '0.625rem',
                  fontSize: '0.8125rem',
                  color: '#111827',
                  fontWeight: '500',
                  lineHeight: '1.4',
                  wordBreak: 'break-word',
                  minWidth: '120px'
                }}>
                  {key}
                </td>
                <td style={{
                  padding: '0.625rem',
                  fontSize: '0.8125rem',
                  color: '#374151',
                  lineHeight: '1.4',
                  wordBreak: 'break-word',
                  maxWidth: '0',
                  width: '100%'
                }}>
                  <div style={{
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {String(value)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MetadataDisplay;
