import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EmailButtonProps {
  email: string;
}

export const EmailButton = ({ email }: EmailButtonProps) => {
  const handleOnClick = () => {
    try {
      toast("Copied to clipboard");
      navigator.clipboard.writeText(email);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleOnClick}>
      <Mail />
    </Button>
  );
};
