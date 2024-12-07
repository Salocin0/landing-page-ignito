const FloatingBottomWhatsapp = () => {
  const whatsappUrl = import.meta.env.VITE_LINK_WHATSAPP;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        zIndex: 9999,
      }}
      onClick={() => handleWhatsAppClick()}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: '30px',
          height: '30px',
        }}
      />
    </div>
  );
};

export default FloatingBottomWhatsapp;
