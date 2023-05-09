"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return <DeliciousOS />;
}

function DeliciousOS() {
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

  let icons = [];

  for(let i = 0; i < 24; i++){
    icons.push(i);
  }

  return (
    <div className="relative flex flex-col h-screen  justify-between items-center">
      <div className="sticky top-0 bg-gray-200 w-full text-center">
        status bar
      </div>
      <div className="grid grid-cols-4 gap-12">
        {icons.map(d=>{
            return <Icon key={d} data={d}/>;
        })}
      </div>
      <div
        className="sticky bottom-0 bg-gray-300 w-3/4 text-center h-16 text-5xl 
        rounded-xl"
      >
        menu
      </div>
    </div>
  );
}

function Icon(props: any){
    const css = `bg-green-${props.data*100%700 + 200} h-14 w-14 rounded-xl text-center`;
    return <div className={css}>{props.data}</div>
}

function StatusBar() {}
