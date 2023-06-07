"use client";
import React, { useState } from "react";
import { HeaderBar } from "./header_bar";
import { useGlobalListener } from "./client_api";
import { HomeUI } from "./home";
import { Setting } from "./os_settings";
import { IconButton } from "./icon_button";
import { text } from "stream/consumers";

export function DeliciousOS() {
  // remove contextmenu
  useGlobalListener("contextmenu", (e) => e.preventDefault());
  // space button as home button
  useGlobalListener("keydown", spaceToHome);

  const componentCountLimit = 10;

  let icons: number[] = [];
  for (let i = 0; i < 30; i++) {
    icons.push(i);
  }

  let iconsComps = icons.map((d) => {
    return { key: d, val: <div>id: {d}</div> };
  });

  let iconsList = iconsComps.map((d) => {
    return (
      <IconButton
        key={d.key}
        callBack={() => {
          if (hasComponentInStack(d.val)) {
            moveComponentToStackHead(d.val);
          } else {
            appendComponentInStack(d.val);
          }
        }}
        text={d.key.toString()}
        icon={null}
      />
    );
  });

  const home = <HomeUI comp={iconsList} />;
  // Component is created tree node, lambda is used as key
  const [componentStack, setComponentStack] = useState(new Array(home));

  function spaceToHome(e: KeyboardEvent) {
    if (e.key === " ") {
      moveComponentToStackHead(home);
    }
  }

  function moveComponentToStackHead(component: React.JSX.Element) {
    setComponentStack([
      ...componentStack
        .filter((comp) => comp !== component)
        .slice(
          Math.max(0, componentStack.length - componentCountLimit),
          componentStack.length
        ),
      component,
    ]);
  }

  function hasComponentInStack(e: React.JSX.Element) {
    return componentStack.some((d) => d === e);
  }

  function appendComponentInStack(e: React.JSX.Element) {
    setComponentStack([...componentStack, e]);
  }

  return (
    <div
      className="flex flex-col h-screen justify-between items-center overflow-hidden
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <HeaderBar />
      {componentStack[componentStack.length - 1]}
    </div>
  );
}
