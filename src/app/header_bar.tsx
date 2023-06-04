import { useEffect, useState } from "react";

export function useClock() {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    var intervalId = setInterval(function () {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return clock;
}

export function HeaderBar() {
  const clock = useClock();
  const H = clock.getHours();
  const M = clock.getMinutes();
  return (
    <div className="bg-gray-200/20 w-full text-center flex flex-row justify-between">
      <div>Delicious OS</div>
      <div>{H + ":" + (M >= 10 ? M : "0" + M)}</div> <div>icon</div>
    </div>
  );
}
