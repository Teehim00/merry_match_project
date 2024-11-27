import { CustomButton } from "@/components/CustomUi";
import { GoHeartFill } from "react-icons/go";
export default function CardSection() {
  return (
    <>


{/* ใช้คอนเซป prop มาช่วย render */}
<div class=" text-white p-6 lg:py-24">
  <h2 class="text-center text-3xl font-bold text-second-300 mb-8">How to Merry</h2>
  {/* box for responsive  ไส้นอก */}
  <figure class="flex flex-col container mx-auto  lg:flex-row lg:justify-center lg:gap-5 items-center space-y-6  lg:space-y-0">
    {/* <!-- Step 1 --> */}
    <div class="bg-second-700 p-10 rounded-badge flex  flex-col items-center w-full lg:w-[15rem]">
      <div class="text-4xl w-24 h-24 bg-second-600 rounded-full mb-4 flex  col justify-center items-center"> <span className="text-center"> 😎 </span> </div>
      <article className="mt-5 text-center">
      <h3 class="text-xl  font-semibold mb-2">Upload your cool picture</h3>
      <p class="text-sm text-gray-300">Lorem ipsum is a placeholder text</p>
      </article>
    </div>
    {/* <!-- Step 2 --> */}
    <div class="bg-second-700 p-10 rounded-badge flex  flex-col items-center w-full lg:w-[15rem]">
      <div class="text-4xl w-24 h-24 bg-second-600 rounded-full mb-4 flex  col justify-center items-center"> <span className="text-center"> 😁 </span> </div>
      <article className="mt-5 text-center">
      <h3 class="text-xl  font-semibold mb-2">Explore and find the one you like</h3>
      <p class="text-sm text-gray-300">Lorem ipsum is a placeholder text</p>
      </article>
    </div>
    {/* <!-- Step 3 --> */}
    <div class="bg-second-700 p-10 rounded-badge flex  flex-col items-center w-full lg:w-[15rem]">
      <div class="text-4xl w-24 h-24 bg-second-600 rounded-full mb-4 flex  col justify-center items-center"> <span className="text-center"> 🥳 </span> </div>
      <article className="mt-5 text-center">
      <h3 class="text-xl  font-semibold mb-2">Click ‘Merry’ for get to know!</h3>
      <p class="text-sm text-gray-300">Lorem ipsum is a placeholder text</p>
      </article>
    </div>
    {/* <!-- Step 4 --> */}
    <div class="bg-second-700 p-10 rounded-badge flex  flex-col items-center w-full lg:w-[15rem]">
      <div class="text-4xl w-24 h-24 bg-second-600 rounded-full mb-4 flex col justify-center items-center"> <span className="text-center"> 😘 </span> </div>
      <article className="mt-5 text-center">
      <h3 class="text-xl  font-semibold mb-2">Start chating and relationship </h3>
      <p class="text-sm text-gray-300">Lorem ipsum is a placeholder text</p>
      </article>
    </div>
  </figure>

</div>




{/* ใส่ onclike เพื่อ ย้อน path ไป หน้า macthcing or login */}


    </>
  );
}

// -left-4 -top-20






