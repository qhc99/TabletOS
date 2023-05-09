'use client';
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

  return (
    <div className="relative flex flex-col h-screen justify-between">
      <div className="sticky top-0 bg-red-500 w-screen text-center">status bar</div>
      <div className="grid grid-cols-5 gap-3">
        <div className="bg-green-100 h-14 w-14">a</div>
        <div className="bg-green-200 h-14 w-14">b</div>
        <div className="bg-green-300 h-14 w-14">c</div>
        <div className="bg-green-400 h-14 w-14">d</div>
        <div className="bg-green-500 h-14 w-14">e</div>
        <div className="bg-green-600 h-14 w-14">f</div>
        <div className="bg-green-700 h-14 w-14">g</div>
        <div className="bg-green-800 h-14 w-14">h</div>
        <div className="bg-green-900 h-14 w-14">i</div>
        <div className="bg-red-100 h-14 w-14">j</div>
        <div className="bg-red-200 h-14 w-14">k</div>
        <div className="bg-red-300 h-14 w-14">l</div>
        <div className="bg-red-400 h-14 w-14">m</div>
        <div className="bg-red-500 h-14 w-14">n</div>
        <div className="bg-red-600 h-14 w-14">o</div>
        <div className="bg-red-700 h-14 w-14">p</div>
        <div className="bg-red-800 h-14 w-14">q</div>
        <div className="bg-red-900 h-14 w-14">r</div>
        <div className="bg-blue-100 h-14 w-14">t</div>
        <div className="bg-blue-200 h-14 w-14">u</div>
        <div className="bg-blue-300 h-14 w-14">v</div>
        <div className="bg-blue-400 h-14 w-14">w</div>
        <div className="bg-blue-500 h-14 w-14">x</div>
        <div className="bg-blue-600 h-14 w-14">y</div>
        <div className="bg-blue-700 h-14 w-14">z</div>
        <div className="bg-blue-800 h-14 w-14">1a</div>
        <div className="bg-blue-900 h-14 w-14">1b</div>
      </div>
      <div className="sticky bottom-0 bg-blue-500 w-screen text-center h-16 text-5xl">menu</div>
    </div>
  );
}

function StatusBar() {}
