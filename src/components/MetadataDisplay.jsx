const MetadataDisplay = ({ metadata }) => {
    if (!metadata) return null;
  
    return (
      <div style={{
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem'
      }}>
        <h2 style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          marginBottom: '0.75rem',
          color: '#1f2937',
          paddingLeft: '0.5rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          Image Metadata
        </h2>
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
  