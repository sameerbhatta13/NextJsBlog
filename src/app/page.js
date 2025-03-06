import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className=" mx-20 flex justify-center items-center h-screen">
        <div className="w-[100%] max-w-4xl"> {/* Controls width */}
          <Image
            src="/moon.jpg"
            alt="Moon"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg border-4 border-gray-300 transition-transform hover:scale-105"
          />
        </div>
      </div>
    </>
  );
}
