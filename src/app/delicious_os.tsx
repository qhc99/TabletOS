"use client";
import React, { useState } from "react";
import StatusBar from "./statue_bar";
import { useContextMenuPrevension, useSpaceButtonHook } from "./client_api";

export default function DeliciousOS() {
  useContextMenuPrevension();
  useSpaceButtonHook();

  let icons: number[] = [];
  for (let i = 0; i < 30; i++) {
    icons.push(i);
  }
  // 0: left, 1: mid, 2: right
  const [UIpos, setUIPos] = useState(1);

  // ignore wheel event when transiting
  const [transiting, setTransiting] = useState(false);

  // 0: turn left 1: back from left 2: turn right 3: back from right 4: origin
  const [UITransition, setUITransition] = useState(4);
  const transitionCSS = (t: number) => {
    switch (t) {
      case 0:
        return "origin-left move-ui-left";
      case 1:
        return "origin-left resume-ui-from-left";
      case 2:
        return "origin-right move-ui-right";
      case 3:
        return "origin-right resume-ui-from-right";
      default:
        return "";
    }
  };
  const onWheelHook = (e: { deltaY: number }) => {
    if (!transiting) {
      if (e.deltaY < 0) {
        if (UIpos === 1) {
          setUITransition(0);
        } else if (UIpos === 2) {
          setUITransition(3);
        }

        if (UIpos === 1 || UIpos === 2) {
          setUIPos(UIpos - 1);
          setTransiting(true);
          setTimeout(() => setTransiting(false), 300);
        }
      } else if (e.deltaY > 0) {
        if (UIpos === 0) {
          setUITransition(1);
        } else if (UIpos === 1) {
          setUITransition(2);
        }

        if (UIpos === 0 || UIpos === 1) {
          setUIPos(UIpos + 1);
          setTransiting(true);
          setTimeout(() => setTransiting(false), 300);
        }
      }
    }
  };

  return (
    <div
      className="flex flex-col h-screen justify-between items-center overflow-hidden
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      onWheel={onWheelHook}
    >
      <StatusBar />
      <div
        id="ui"
        className={`grid justify-items-center grid-cols-4 md:grid-cols-6 gap-8 w-full overflow-hidden
        ${transitionCSS(UITransition)}`}
      >
        {icons.map((d) => {
          return <Icon key={d} data={d} />;
        })}
      </div>
      <div
        className="bg-gray-300 w-3/4 md:w-2/3
          backdrop-blur-sm opacity-40
          text-center text-5xl rounded-xl"
      >
        menu
      </div>
    </div>
  );
}

function Icon({ data }: { data: number }) {
  return (
    <div className={`bg-green-300 h-14 w-14 rounded-xl text-center`}>
      {data}
    </div>
  );
}
