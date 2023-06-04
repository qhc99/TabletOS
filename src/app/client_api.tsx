"use client";
import { useEffect } from "react";

export function useGlobalListener(
  listenerName: string,
  func: (e: any) => void
) {
  useEffect(() => {
    document.addEventListener(listenerName, (event) => func(event));
    return () => {
      document.removeEventListener(listenerName, func);
    };
  });
}
