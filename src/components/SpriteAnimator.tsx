import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface SpriteAnimatorProps {
  src: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number;
  fps?: number;
  scale?: number;
  rows?: number;
  pingPong?: boolean;
  showSheetPreview?: boolean;
  sheetPreviewMaxWidth?: number;
}

export const SpriteAnimator = ({
  src,
  frameWidth,
  frameHeight,
  frameCount,
  fps = 12,
  scale = 2,
  rows = 1,
  pingPong = false,
  showSheetPreview = true,
  sheetPreviewMaxWidth = 640,
}: SpriteAnimatorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const directionRef = useRef<1 | -1>(1);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentFrame, setCurrentFrame] = useState(0);

  const frameDuration = 1000 / fps;
  const canvasWidth = frameWidth * scale;
  const canvasHeight = frameHeight * scale;
  const totalFrames = frameCount * rows;

  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const image = imageRef.current;

      if (!canvas || !ctx || !image) return;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.imageSmoothingEnabled = false;

      // Calculate which row and column based on frame index
      const row = Math.floor(frameIndex / frameCount);
      const col = frameIndex % frameCount;

      const sourceX = col * frameWidth;
      const sourceY = row * frameHeight;

      ctx.drawImage(
        image,
        sourceX,
        sourceY,
        frameWidth,
        frameHeight,
        0,
        0,
        canvasWidth,
        canvasHeight
      );
    },
    [frameWidth, frameHeight, canvasWidth, canvasHeight, frameCount]
  );

  const animate = useCallback(
    (timestamp: number) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTimeRef.current;

      if (elapsed >= frameDuration) {
        let nextFrame = currentFrameRef.current + directionRef.current;

        if (pingPong) {
          // Reverse direction at boundaries
          if (nextFrame >= totalFrames) {
            directionRef.current = -1;
            nextFrame = totalFrames - 2;
          } else if (nextFrame < 0) {
            directionRef.current = 1;
            nextFrame = 1;
          }
        } else {
          // Simple loop
          nextFrame = nextFrame % totalFrames;
        }

        currentFrameRef.current = nextFrame;
        setCurrentFrame(nextFrame);
        drawFrame(currentFrameRef.current);
        lastFrameTimeRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [frameDuration, totalFrames, pingPong, drawFrame]
  );

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      imageRef.current = image;
      setIsLoaded(true);
      currentFrameRef.current = 0;
      setCurrentFrame(0);
      drawFrame(0);
    };

    image.onerror = () => {
      setError("Failed to load sprite sheet image");
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [src, drawFrame]);

  useEffect(() => {
    if (isLoaded && isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLoaded, isPlaying, animate]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      lastFrameTimeRef.current = 0;
    }
  };

  const handleReset = () => {
    currentFrameRef.current = 0;
    setCurrentFrame(0);
    directionRef.current = 1;
    lastFrameTimeRef.current = 0;
    drawFrame(0);
  };

  const activeRow = Math.floor(currentFrame / frameCount);
  const activeCol = currentFrame % frameCount;

  if (error) {
    return <div className="text-red-500 dark:text-red-400 p-4 text-center">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="block"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      {!isLoaded && <p className="text-gray-500 dark:text-gray-400">Loading sprite sheet...</p>}

      {isLoaded && (
        <>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleTogglePlay}>
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {showSheetPreview && (
            <div className="w-full max-w-full">
              <p className="mb-2 text-center text-sm text-gray-600 dark:text-gray-300">
                Frame {currentFrame + 1} / {totalFrames}
              </p>
              <div
                className="relative mx-auto w-full overflow-hidden rounded-md border border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
                style={{ maxWidth: `${sheetPreviewMaxWidth}px` }}
              >
                <img
                  src={src}
                  alt="Sprite sheet preview"
                  className="block h-auto w-full"
                  style={{ imageRendering: "pixelated" }}
                />
                <div
                  className="pointer-events-none absolute box-border border-2 border-amber-400 shadow-[0_0_0_1px_rgba(0,0,0,0.5),0_0_12px_rgba(251,191,36,0.6)]"
                  style={{
                    left: `${(activeCol / frameCount) * 100}%`,
                    top: `${(activeRow / rows) * 100}%`,
                    width: `${(1 / frameCount) * 100}%`,
                    height: `${(1 / rows) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}
        </>
      )}

    </div>
  );
};
