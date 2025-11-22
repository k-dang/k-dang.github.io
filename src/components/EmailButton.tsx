import { useState, useEffect } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EmailButtonProps {
  email: string;
}

export const EmailButton = ({ email }: EmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleOnClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast("Copied to clipboard");
    } catch (err) {
      toast("Failed to copy email: " + err);
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleOnClick}>
      <div className="relative w-full h-full flex items-center justify-center">
        <Mail
          className={`absolute transition-all duration-300 ${
            copied ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />
        <Check
          className={`absolute text-green-500 transition-all duration-300 ${
            copied ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        />
      </div>
    </Button>
  );
};
