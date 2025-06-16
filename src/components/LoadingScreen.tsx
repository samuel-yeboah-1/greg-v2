import React, { useEffect, useState } from "react";

type LoadingScreenProps = {
  onComplete: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const steps = 100;
    const stepTime = duration / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Loading {progress}%</h1>
      <div
        style={{
          width: "60%",
          height: "10px",
          backgroundColor: "#333",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            transition: "width 0.1s ease",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
