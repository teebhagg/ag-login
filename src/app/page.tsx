import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth");
  return (
    <main className="">
    </main>
  );
}
