const LoadingSpinner = ({ fullScreen = false, color = "#2FAC66", size = 50 }) => {
    const spinnerStyle = {
      border: "4px solid #f3f3f3",
      borderTop: `4px solid ${color}`,
      borderRadius: "50%",
      width: `${size}px`,
      height: `${size}px`,
      animation: "spin 1s linear infinite",
    };
  
    const containerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: fullScreen ? "fixed" : "relative",
      top: fullScreen ? 0 : "auto",
      left: fullScreen ? 0 : "auto",
      width: fullScreen ? "100%" : "auto",
      height: fullScreen ? "100vh" : "auto",
      backgroundColor: fullScreen ? "rgba(0, 0, 0, 0.1)" : "transparent",
      zIndex: fullScreen ? 9999 : 1,
    };
  
    return (
      <div style={containerStyle}>
        <div style={spinnerStyle} />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  };
  
  export default LoadingSpinner;
  