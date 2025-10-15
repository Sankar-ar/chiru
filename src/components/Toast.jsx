import React, { useEffect, useState } from "react";

export default function Toast({ message, onClose, duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Auto-close after duration
    const timer = setTimeout(() => handleClose(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setVisible(false); // trigger fade-out
    setTimeout(onClose, 300); // remove after animation
  };

  return (
    <div className={`toast ${visible ? "show" : "hide"}`}>
      {message}
      <button onClick={handleClose} className="close-btn">
        ✖
      </button>
     </div> )
}



/* style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    
      {Toast.map((t) => (
        <div
          key={t.id}
          style={{
            minWidth: 300,
            padding: "15px 20px",
            backgroundColor:
              t.variant === "success"
                ? "#4caf50"
                : t.variant === "danger"
                ? "#f44336"
                : "#2196f3",
            color: "white",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            borderLeft: `4px solid ${
              t.variant === "success"
                ? "#388e3c"
                : t.variant === "danger"
                ? "#d32f2f"
                : "#1976d2"
            }`,
          }}
        >
          <div className="fw-bold">{t.title}</div>
          {t.detail && <div style={{ fontSize: 14, opacity: 0.9 }}>{t.detail}</div>}
        </div>
      ))}
    </div>
  );
} */