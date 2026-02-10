import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function PixInput({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pix-input flex items-center gap-2">
      <Input
        value={value}
        readOnly
        onClick={(e) => e.currentTarget.select()}
        className="cursor-pointer bg-muted"
      />

      <Button
        type="button"
        size="icon"
        variant="outline"
        onClick={handleCopy}
        aria-label="Copiar chave PIX"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}
