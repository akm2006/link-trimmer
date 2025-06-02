import Image from "next/image";
import localFont from "next/font/local"

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
          <div className="flex flex-col justify-center items-center gap-4">
            <p className={` text-4xl text-bold font-p ${poppins.className}`}>
            The Best URL Shortner in the Market
            </p>
            <p>
              We are the most straight forward URL Shortner
            </p>
          </div>
            
          <div className="justify-start relative ">
            <Image alt="an image of a vector" src={"/vector.png"} fill={true} className="mix-blend-darken"/>

          </div>
        </section>
      </main>
      
    </div>
  );
}
