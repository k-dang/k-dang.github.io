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
    <Button
      variant="outline"
      size="icon"
      className="rounded-md h-10 w-10 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 hover:cursor-pointer transition-colors duration-200"
      onClick={handleOnClick}
    >
      <Mail />
    </Button>
  );
};
