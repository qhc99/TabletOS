import { useState } from "react";

export function Counter({
  id,
  updateSelf,
}: {
  id: number;
  updateSelf: (k: string, e: React.JSX.Element) => void;
}) {
  const [c, setC] = useState(0);
  const self = (
    <button
      onClick={() => {
        setC((d) => d++);
        update();
      }}
    >
      id:{id}, counter: {c}
    </button>
  );

  function update() {
    updateSelf(id.toString(), self);
  }

  return self;
}
