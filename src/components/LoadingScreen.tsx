import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

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
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div>
        <Spline scene="https://prod.spline.design/jeLjM-LIjeTGsI2I/scene.splinecode" />
      </div>
      <div className="flex flex-row gap-4">
        <div>
          <p className="text-2xl font-semibold">
            Hi there Buddy, You found Greg
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
