"use client";
import { WheelEventHandler, useEffect } from "react";
import React from "react";

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

/**
 * execute prevent default effect on contextmenu
 * @returns an empty component that only execute efffect
 */
export function HiddenDisableRightClickComponent() {
  useContextMenuDefaultPrevention();
  return <div className="hidden"></div>;
}

export function scrollDetection(
  onUp: () => void,
  onDown: () => void
): WheelEventHandler<HTMLDivElement> {
  return (e) => {
    if (e.deltaY > 0) {
      onUp();
    } else if (e.deltaY < 0) {
      onDown;
    }
  };
}
