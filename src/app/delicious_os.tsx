import React from 'react';

export default function DeliciousOS() {
  let icons = [];
  for (let i = 0; i < 30; i++) {
    icons.push(i);
  }

  return (
    <div
      className="relative flex flex-col h-screen justify-between items-center 
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <div className="sticky top-0 bg-gray-200/20 w-full text-center">
        status bar
      </div>
      <div
        className="grid justify-items-center grid-cols-4 md:grid-cols-6 gap-8 w-full
        phase-out origin-top-left"
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

// function StatusBar() {}
