import { CustomButton } from "@/components/CustomUi";
import { GoHeartFill } from "react-icons/go";
export default function StartMacthing() {
  
  return (
    <>
<section className="flex items-center justify-center container bg-second-900   mx-auto lg:pb-10 lg:px-16">
  <div className="max-w-5xl w-full lg:rounded-badge bg-gradient-to-r from-primary-600 via-utility-third to-purple-500 p-8 lg:p-20 overflow-hidden pb-28 lg-pb-0 relative text-center">
    
    {/* Decorative Heart - Big (อยู่ข้างหลัง h2) */}
    <div> 
      <GoHeartFill className="absolute text-primary-300 -rotate-[20deg] top-4 -left-7 w-[151px] h-[140px] opacity-30 z-0" /> 
    </div>

    <h2 className="text-5xl lg:text-4xl text-center font-extrabold mt-16 lg:mt-0 text-white mb-6 relative z-10">
      Let’s start finding <br />
      and matching someone&nbsp;new
    </h2>

    <CustomButton className="px-6 py-3 bg-white font-semibold" buttonType="secondary">
      Start Matching!
    </CustomButton>

    {/* Decorative Hearts - Other Sizes */}
    {/* Small */}
    <div> 
      <GoHeartFill className="absolute -rotate-[20deg]   lg:bottom-28  lg:right-12    text-primary-200 right-10 bottom-20 w-[24px] h-[22px] overflow-hidden opacity-50" /> 
    </div>
    
    {/* Medium */}
    <div> 
      <GoHeartFill className="absolute bottom-0 lg:bottom-6 lg:-right-4 rotate-[15deg] text-primary-200 -right-8 w-[77px] h-[70px] overflow-hidden opacity-50" /> 
    </div>
  </div>
</section>

    </>
  );
}







