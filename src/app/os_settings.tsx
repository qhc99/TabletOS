import { useState } from "react";

export function Setting() {
  const [s, set] = useState(0);
  return <button onClick={() => set((t) => t + 1)}>setting app state: {s}</button>;
}
