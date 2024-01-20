import Image from "next/image";
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div>
        <img src="/Image/bg.png" alt="" />
      </div>
    </main> 
  );
}
