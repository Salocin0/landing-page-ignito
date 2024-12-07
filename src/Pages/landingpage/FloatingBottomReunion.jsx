const FloatingBottomReunion = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '100px',
        backgroundColor: '#FE7A27',
        borderRadius: '30px',
        width: '200px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        zIndex: 9999,
      }}
    >
      <a href="#contacto" style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>Agendar una reuni&oacute;n</a>
    </div>
  );
};

export default FloatingBottomReunion;
