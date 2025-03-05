
import Image from "next/image";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div>

        <div className="bg-[#CBCBCB] mx-20 my-3">
          <div className="grid grid-cols-4">
            <div className=" bg-red-300 grid col-span-2 p-2 m-3 ">
              <h1>
                this is first block
              </h1>
            </div>
            <div className="bg-green-300 grid col-span-2 p-2 m-3">
              <h1>this is second block</h1>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
