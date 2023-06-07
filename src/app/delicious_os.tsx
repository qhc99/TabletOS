"use client";
import React, { useState } from "react";
import { HeaderBar } from "./header_bar";
import { useGlobalListener } from "./client_api";
import { HomeUI } from "./home";
import { Setting } from "./os_settings";
import { IconButton } from "./icon_button";
import { text } from "stream/consumers";
import { Counter } from "./counter";

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

  const [iconsComps, setComps] = useState(
    icons.map((d) => {
      return { key: d, val: <Counter id={d} updateSelf={updateComponent} /> };
    })
  );

  // TODO: fix bug, add key to component stack. Add callback when state change in any sub component
  let iconsList = iconsComps.map((d) => {
    return (
      <IconButton
        key={d.key}
        callBack={() => {
          if (hasComponentInStack(d.key.toString())) {
            moveComponentToStackHead(d.key.toString(), d.val);
          } else {
            appendComponentInStack(d.key.toString(), d.val);
          }
        }}
        text={d.key.toString()}
        icon={null}
      />
    );
  });

  const [home, setHome] = useState(<HomeUI comp={iconsList} />);
  // Component is created tree node, lambda is used as key
  const [componentStack, setComponentStack] = useState(
    new Array({
      key: "home",
      comp: home,
    })
  );

  function spaceToHome(e: KeyboardEvent) {
    if (e.key === " ") {
      moveComponentToStackHead("home", home);
    }
  }

  // TODO: fix bug, component stack is const, which should not be caught in lambda
  function moveComponentToStackHead(key: string, component: React.JSX.Element) {
    setComponentStack([
      ...componentStack
        .filter((d) => d.key !== key)
        .slice(
          Math.max(0, componentStack.length - componentCountLimit),
          componentStack.length
        ),
      { key: key, comp: component },
    ]);
  }

  function hasComponentInStack(k: string) {
    return componentStack.some((d) => d.key === k);
  }

  function appendComponentInStack(k: string, e: React.JSX.Element) {
    setComponentStack([...componentStack, { key: k, comp: e }]);
  }
  function updateComponent(k: string, e: React.JSX.Element) {
    const res = componentStack.map((d) => {
      if (d.key !== k) return d;
      else return { key: k, comp: e };
    });
    setComponentStack(res);
  }
  return (
    <div
      className="flex flex-col h-screen justify-between items-center overflow-hidden
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <HeaderBar />
      {componentStack[componentStack.length - 1].comp}
    </div>
  );
}
