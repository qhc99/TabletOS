'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return <OSAPP />;
}

function OSAPP() {
    
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
  
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="bg-red-500">1</div>
      <div className="bg-green-500">2</div>
      <div className="bg-blue-500">3</div>
    </div>
  );
}

function StatusBar() {}
