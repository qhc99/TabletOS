import Image from "next/image";
import DeliciousOS from "./delicious_os";
import { sleep } from "./utils/utils";

export default async function Home() {
  await sleep(2000);
  return <DeliciousOS />;
}
