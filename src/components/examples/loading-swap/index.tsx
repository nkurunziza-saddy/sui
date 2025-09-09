"use client";
import { useState } from "react";
import { LoadingSwap } from "../../../registry/new-york/blocks/loading-swap/index";
import { Button } from "@/components/ui/button";

export function LoadingSwapExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Button onClick={handleClick} disabled={isLoading} className="w-32">
      <LoadingSwap isLoading={isLoading}>Click me</LoadingSwap>
    </Button>
  );
}
