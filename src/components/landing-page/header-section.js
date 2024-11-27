import { CustomButton } from "@/components/CustomUi";
import { NavBar } from "@/components/NavBar";
export default function HeaderSection() {
  return (
    <>
<header className="relative min-h-screen flex flex-col w-full items-center justify-center">
  {/* รูปภาพและ Bubble ซ้าย */}
  <figure className="absolute -left-4 -top-[95px] lg:top-20 lg:left-20">
    <div className="relative h-[20rem] w-[11.5rem] overflow-hidden rounded-full">
      <img
        src="/images/person-hompage1.jpg"
        alt="Person"
        className="scale-120 h-full w-full object-cover"
      />
    </div>
    <div className="chat chat-start relative -top-[7rem] left-[8rem] lg:-top-[6rem] lg:left-[10rem]">
      <div className="chat-bubble chat-bubble-primary p-2 text-sm text-utility-primary">
        Hi! Nice to meet you
      </div>
    </div>
  </figure>

  {/* Section ตรงกลาง */}
  <section className="flex flex-col items-center justify-center text-center space-y-12 mt-36 lg:ml-8">
    <article>
      <h1 className="text-6xl font-extrabold text-utility-primary">
        Make the <br />
        first ‘Merry’
      </h1>
      <h2 className="mt-6 text-xl font-bold text-utility-primary">
        If you feel lonely, let’s start meeting <br />
        new people in your area! <br />
        Don’t forget to get Merry with us
      </h2>
      <div className="mt-12">
        <CustomButton type="submit" buttonType="primary" customStyle="w-40">
          Start matching!
        </CustomButton>
      </div>
    </article>
  </section>

  {/* รูปภาพและ Bubble ขวา */}
  <figure className="absolute top-[38rem] left-[12rem] lg:top-20 lg:right-20">
    <div className=" h-[20rem] w-[11.5rem] overflow-hidden rounded-full">
      <img
        src="/images/person-hompage2.jpg"
        alt="Person"
        className="scale-120 h-full w-full object-cover"
      />
    </div>
  </figure>
</header>

    </>
  );
}