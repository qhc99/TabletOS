"use client";
import {useEffect } from "react";

export function useContextMenuDefaultPrevention() {
  useEffect(() => {
    function preventRightClick(e: any) {
      e.preventDefault();
    }
    const rootElement = document.getElementsByTagName("body")[0];
    rootElement?.addEventListener("contextmenu", preventRightClick);

    return () => {
      rootElement?.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);
}

