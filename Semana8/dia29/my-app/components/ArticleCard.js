export default function ArticleCard({ title, description }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s ease',
    }}>
      <h2 style={{
        marginBottom: '0.5rem',
        fontSize: '1.5rem',
        color: '#1a202c'
      }}>{title}</h2>
      <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
}
