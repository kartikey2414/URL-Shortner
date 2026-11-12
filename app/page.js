import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-purple-100 min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
          <section className="grid grid-cols-1 md:grid-cols-2 w-full py-8 md:py-0 items-center">
            
            {/* Left Text Content */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
              <p className="font-bold font-poppins text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-tight">
                The best URL Shortener in the Market
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed max-w-lg">
                We are the most straightforward URL shortener in the World. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
              </p>
              <div className="flex flex-row justify-center md:justify-start gap-3 w-full sm:w-auto mt-2">
                <Link href="/shorten">
                  <button className="bg-purple-500 hover:bg-purple-600 active:scale-95 font-bold shadow-lg text-white cursor-pointer rounded-lg py-2 px-4 sm:py-2.5 sm:px-6 transition">
                    Try Now
                  </button>
                </Link>
                <Link href="https://github.com" target="_blank">
                  <button className="bg-purple-500 hover:bg-purple-600 active:scale-95 font-bold shadow-lg text-white cursor-pointer rounded-lg py-2 px-4 sm:py-2.5 sm:px-6 transition">
                    Github
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Vector Image Section */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full mt-6 md:mt-0 flex justify-center items-center">
              <Image
                alt="an Image of Vector"
                className="mix-blend-darken object-contain"
                src={"/vector.jpg"}
                fill={true}
                priority
              />
            </div>

          </section>
        </div>
      </main>
    </>
  );
}