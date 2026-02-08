import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CursorFollowerSpriteProps {
  spriteSrc: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number;
  fps?: number;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
}

export const CursorFollowerSprite = ({
  spriteSrc,
  frameWidth,
  frameHeight,
  frameCount,
  fps = 8,
  scale = 0.5,
  offsetX = 12,
  offsetY = 12,
}: CursorFollowerSpriteProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  const currentFrameRef = useRef(0);
  const cursorTargetRef = useRef({ x: 0, y: 0 });
  const hasCursorTargetRef = useRef(false);
  const spritePositionRef = useRef({ x: 0, y: 0 });
  const facingRef = useRef<1 | -1>(1);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const canvasWidth = useMemo(() => frameWidth * scale, [frameWidth, scale]);
  const canvasHeight = useMemo(() => frameHeight * scale, [frameHeight, scale]);
  const frontGap = 8;
  const horizontalFacingThreshold = 0.05;

  const getPointerTarget = (pointerX: number, pointerY: number) => {
    if (typeof window === "undefined") {
      return { x: pointerX, y: pointerY };
    }

    const unclampedX = pointerX - canvasWidth / 2 + offsetX;
    const unclampedY = pointerY - canvasHeight - frontGap + offsetY;
    const maxX = Math.max(0, window.innerWidth - canvasWidth);
    const maxY = Math.max(0, window.innerHeight - canvasHeight);

    return {
      x: Math.min(Math.max(unclampedX, 0), maxX),
      y: Math.min(Math.max(unclampedY, 0), maxY),
    };
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateSupport = () => {
      const supported = mediaQuery.matches;
      setIsSupported(supported);
      if (!supported) {
        setIsEnabled(false);
      }
    };

    updateSupport();

    mediaQuery.addEventListener("change", updateSupport);
    return () => mediaQuery.removeEventListener("change", updateSupport);
  }, []);

  useEffect(() => {
    if (!isSupported || typeof window === "undefined") return;

    const handleMouseMove = (event: MouseEvent) => {
      cursorTargetRef.current = getPointerTarget(event.clientX, event.clientY);
      hasCursorTargetRef.current = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [canvasHeight, canvasWidth, isSupported, offsetX, offsetY]);

  useEffect(() => {
    if (!isSupported || !isEnabled) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      }
      return;
    }

    const image = new Image();
    image.src = spriteSrc;

    const applyCanvasTransform = (x: number, y: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${facingRef.current})`;
    };

    const drawFrame = (frameIndex: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const spriteImage = imageRef.current;

      if (!canvas || !ctx || !spriteImage) return;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.imageSmoothingEnabled = false;

      const sourceX = frameIndex * frameWidth;
      ctx.drawImage(
        spriteImage,
        sourceX,
        0,
        frameWidth,
        frameHeight,
        0,
        0,
        canvasWidth,
        canvasHeight
      );
    };

    const updateSpritePosition = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const currentX = spritePositionRef.current.x;
      const currentY = spritePositionRef.current.y;
      const targetX = cursorTargetRef.current.x;
      const targetY = cursorTargetRef.current.y;
      const deltaX = targetX - currentX;
      const deltaY = targetY - currentY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < 0.001) return;
      if (Math.abs(deltaX) > horizontalFacingThreshold) {
        facingRef.current = deltaX > 0 ? 1 : -1;
      }

      const maxSpeedPxPerFrame = 1.5;
      const easing = 0.08;
      const step = Math.min(maxSpeedPxPerFrame, distance * easing);
      const nextX = currentX + (deltaX / distance) * step;
      const nextY = currentY + (deltaY / distance) * step;

      spritePositionRef.current = { x: nextX, y: nextY };
      applyCanvasTransform(nextX, nextY);
    };

    const animate = (timestamp: number) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      if (timestamp - lastFrameTimeRef.current >= 1000 / fps) {
        currentFrameRef.current = (currentFrameRef.current + 1) % frameCount;
        drawFrame(currentFrameRef.current);
        lastFrameTimeRef.current = timestamp;
      }

      updateSpritePosition();
      animationRef.current = requestAnimationFrame(animate);
    };

    image.onload = () => {
      imageRef.current = image;
      const spawnX = Math.max(0, window.innerWidth - canvasWidth);
      const spawnY = Math.max(0, window.innerHeight - canvasHeight);
      const target = hasCursorTargetRef.current
        ? cursorTargetRef.current
        : getPointerTarget(window.innerWidth / 2, window.innerHeight / 2);

      cursorTargetRef.current = target;
      spritePositionRef.current = { x: spawnX, y: spawnY };
      const spawnDeltaX = target.x - spawnX;
      if (Math.abs(spawnDeltaX) > horizontalFacingThreshold) {
        facingRef.current = spawnDeltaX > 0 ? 1 : -1;
      }
      lastFrameTimeRef.current = 0;
      currentFrameRef.current = 0;
      drawFrame(0);
      applyCanvasTransform(spawnX, spawnY);
      animationRef.current = requestAnimationFrame(animate);
    };

    image.onerror = () => {
      setIsEnabled(false);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    canvasHeight,
    canvasWidth,
    fps,
    frameCount,
    frameHeight,
    frameWidth,
    isEnabled,
    isSupported,
    offsetX,
    offsetY,
    spriteSrc,
  ]);

  if (!isSupported) {
    return null;
  }

  return (
    <>
      <div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-pressed={isEnabled}
          aria-label={isEnabled ? "Disable sprite follower" : "Enable sprite follower"}
          title={isEnabled ? "Disable sprite follower" : "Enable sprite follower"}
          onClick={() => setIsEnabled((current) => !current)}
        >
          {isEnabled ? <Pause size={16} /> : <Play size={16} />}
        </Button>
      </div>

      {isEnabled && (
        typeof document !== "undefined" &&
        createPortal(
          <canvas
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            className="pointer-events-none fixed left-0 top-0 z-[100]"
            style={{ imageRendering: "pixelated" }}
            aria-hidden="true"
          />,
          document.body
        )
      )}
    </>
  );
};
