import { CardImage, CustomButton } from "@/components/CustomUi";
import { NavBar } from "@/components/NavBar";
export default function HeaderSection() {
  return (
    <>

{/* เหลือแก้ responsive และ ใส่ chat buble  */}

<header className="relative min-h-screen flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-center ">

<div className=" overflow-hidden lg:p-0 ">
<CardImage className="h-[20rem] w-[11.5rem]  ">
  <img
    src="/images/person-hompage1.jpg"
    alt="Person"
    className="scale-120 h-full w-full object-cover"
  />
</CardImage>

</div>

<section className="flex flex-col items-center  p-5 lg:contain text-center ">
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



  <div className="pl-[13rem] lg:p-0 overflow-hidden ">
  <CardImage
    className="h-[20rem] w-[11.5rem] "
  >
    <img
      src="/images/person-hompage2.jpg"
      alt="Person"
      className="scale-120 h-full w-full object-cover"
    />

  </CardImage>
</div>

</header>


    </>
  );
}