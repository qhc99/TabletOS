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

export default function HeaderBar() {
  const clock = useClock();
  return (
    <div className="bg-gray-200/20 w-full text-center flex flex-row justify-between">
      <div>Delicious OS</div>
      <div>
        {clock.getHours() + ":" + clock.getMinutes()}
      </div>{" "}
      <div>icon</div>
    </div>
  );
}
