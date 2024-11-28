import { CustomButton } from "@/components/CustomUi";
import { GoHeartFill } from "react-icons/go";
export default function WhyMerrySection() {
  return (
    <>
    <section className="flex bg-second-900  flex-col lg:flex-row items-center justify-center gap-8  ">
  {/* Left Content */}
  <article className="max-w-lg text-white p-6 lg:p-8">
    <h1 className="text-3xl lg:text-4xl font-extrabold text-second-300 mb-6">
      Why Merry Match?
    </h1>
    <p className="text-lg mb-6">
      Merry Match is a new generation of online dating website for everyone
    </p>
    <p className="text-sm leading-relaxed">
      Whether you’re committed to dating, meeting new people, expanding your
      social network, meeting locals while traveling, or even just making a
      small chat with strangers.
    </p>
    <p className="text-sm leading-relaxed mt-4">
      This site allows you to make your own dating profile, discover new people,
      save favorite profiles, and let them know that you’re interested.
    </p>
  </article>

  {/* Right Content */}
  <figure className="relative flex flex-col md:flex-row lg:flex-col items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 lg:space-x-0">
    {/* Box 1 */}
    <div className=" flex items-center justify-between w-[16rem] h-[5rem] md:w-[18rem] md:h-[6rem] rounded-lg bg-pink-600">
      <div className="flex items-center px-4">
        <p className="ml-2">Fast</p>
      </div>
      <div className="absolute top-[-1.5rem] right-[-1.5rem] rounded-full overflow-hidden w-10 h-10">
        {/* Optional Image */}
      </div>
    </div>

    {/* Box 2 */}
    <div className="flex items-center justify-between w-[16rem] h-[5rem] md:w-[18rem] md:h-[6rem] rounded-lg bg-pink-400">
      <div className="flex items-center px-4">
        <p className="ml-2">Secure</p>
      </div>
      <div className="absolute top-[-1.5rem] left-[-1.5rem] rounded-full overflow-hidden w-10 h-10">
        {/* Optional Image */}
      </div>
    </div>

    {/* Box 3 */}
    <div className=" flex items-center justify-between w-[16rem] h-[5rem] md:w-[18rem] md:h-[6rem] rounded-lg bg-pink-200">
      <div className="flex items-center px-4">
        <p className="ml-2">Easy</p>
      </div>
      <div className="absolute bottom-[-1.5rem] right-[-1.5rem] rounded-full overflow-hidden w-10 h-10">
        {/* Optional Image */}
      </div>
    </div>
  </figure>
</section>


    </>
  );
}