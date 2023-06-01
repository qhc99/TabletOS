"use client";
import { useEffect } from "react";

export function useContextMenuPrevension() {
  function preventRightClick(e: any) {
    e.preventDefault();
  }
  
  useEffect(() => {
    document?.addEventListener("contextmenu", preventRightClick);
    return () => {
      document?.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);
}

export function useSpaceButtonHook() {
  function printKey(e: KeyboardEvent) {
    if (e.key === " ") {
      console.log("run");
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", printKey);
    return () => {
      document.removeEventListener("keydown", printKey);
    };
  }, []);
}
