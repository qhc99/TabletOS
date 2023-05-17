"use client";
import React, { useState } from "react";
import StatusBar from "./statue_bar";

export default function DeliciousOS() {
  let icons = [];
  for (let i = 0; i < 30; i++) {
    icons.push(i);
  }
  const [UIpos, setUIPos] = useState(1); // 0: left, 1: mid, 2: right
  const [UITransition, setUITransition] = useState(4); // 0: turn left 1: left back 2: turn right 3: right back 4: origin
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
  return (
    <div
      className="relative flex flex-col h-screen justify-between items-center
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      onWheel={(e) => {
        if (e.deltaY < 0) {
          if (UIpos === 1) {
            setUITransition(0);
            setUIPos((p) => p - 1);
          } else if (UIpos === 2) {
            setUITransition(3);
            setUIPos((p) => p - 1);
          }
        } else if (e.deltaY > 0) {
          if (UIpos === 0) {
            setUITransition(1);
            setUIPos((p) => p + 1);
          } else if (UIpos === 1) {
            setUITransition(2);
            setUIPos((p) => p + 1);
          }
        }
      }}
    >
      <StatusBar />
      <div
        id="ui"
        className={`grid justify-items-center grid-cols-4 md:grid-cols-6 gap-8 w-full 
        ${transitionCSS(UITransition)}`}
      >
        {icons.map((d) => {
          return <Icon key={d} data={d} />;
        })}
      </div>
      <div
        className="sticky bottom-0 bg-gray-300 w-3/4 md:w-2/3 
          backdrop-blur-sm opacity-40
          text-center h-16 text-5xl rounded-xl"
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
