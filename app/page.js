import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  weight: '100 900', 
  variable: '--font-poppins',
  src:"./fonts/Poppins-ExtraBold.ttf"
});
export default function Home() {
  return (
    <div className="">
      <main className="">
        <section className="grid grid-cols-2 h-[50vh] bg-purple-200">
          <div className="flex flex-col justify-center items-center gap-6">
            <p className={` text-4xl text-bold font-p ${poppins.className}`}>
            The Best URL Shortner on the Internet
            </p>
             <div className={`flex flex-col items-center text-xl pb-5`}>
            <p>
                MOST SIMPLE URL SHORTNER
            </p>
             <p>
              NO LOGIN REQUIRED
            </p>
            <p>
              NO TRACKERS
            </p>
            </div>
            <div className="flex gap-5 text-amber-50 font-extrabold">
          <Link href="/"><button className="bg-purple-500 rounded lg py-4 px-6 shadow-lg">Try Now</button></Link>
          <Link href="/"><button className="bg-purple-500 rounded lg py-4 px-6 shadow-lg">GitHub</button></Link>
        </div>
          </div>
            
          <div className="justify-start relative ">
            <Image alt="an image of a vector" src={"/vector.png"} fill={true} className="mix-blend-darken"/>

          </div>
        </section>
      </main>
      
    </div>
  );
}
