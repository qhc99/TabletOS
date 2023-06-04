"use client";
import React, { useState } from "react";
import { HeaderBar } from "./header_bar";
import { useGlobalListener } from "./client_api";
import { HomeUI } from "./home";
import { Setting } from "./os_settings";
import { Icon } from "./home_icon";

export function DeliciousOS() {
  // remove contextmenu
  useGlobalListener("contextmenu", (e) => e.preventDefault());
  // space button as home button
  useGlobalListener("keydown", spaceToHome);

  const componentNumberLimit = 10;

  let icons: number[] = [];
  for (let i = 0; i < 30; i++) {
    icons.push(i);
  }

  let t = icons.map((d) => {
    return <Icon key={d} data={d} />;
  });
  // TODO: add click 
//   t = [<Setting />, ...t];

  const home = <HomeUI comp={t} />;

  // Component is created tree node, lambda is used as key
  const [componentQueue, setComponentQueue] = useState(
    new Array({ lambda: HomeUI, Component: home })
  );

  function spaceToHome(e: KeyboardEvent) {
    if (e.key === " ") {
      setComponentQueue([
        { lambda: HomeUI, Component: home },
        ...componentQueue
          .filter((e) => e.lambda !== HomeUI)
          .slice(0, componentNumberLimit),
      ]);
    }
  }

  return (
    <div
      className="flex flex-col h-screen justify-between items-center overflow-hidden
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <HeaderBar />
      {componentQueue[0].Component}
    </div>
  );
}
