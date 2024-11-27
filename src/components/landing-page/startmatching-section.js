import { CustomButton } from "@/components/CustomUi";
import { GoHeartFill } from "react-icons/go";
export default function StartMacthing() {
  return (
    <>
    
<section className="flex items-center justify-center  container mx-auto lg:mb-10  lg:px-16">
  <div className="max-w-5xl w-full lg:rounded-badge  bg-gradient-to-r from-pink-600 via-red-500 to-purple-500 p-8 lg:p-20   relative text-center">
    <h2 className="text-2xl lg:text-4xl font-extrabold text-white mb-6">
      Let’s start finding <br />
      and matching someone new
    </h2>

    <CustomButton className=" px-6 py-3 bg-white font-semibold " buttonType="secondary" >
    Start Matching!
    </CustomButton>

    {/* Decorative Hearts  มาเก็บสไตล์ทีหลัง*/}
    {/* big  */}
    <div> <GoHeartFill className="absolute top-4 left-4 w-16 h-16 opacity-50" /> </div>   
      {/* medium  */}  
    <div> <GoHeartFill className="absolute bottom-4 right-4 w-12 h-12  opacity-50" /> </div>
        {/* small  */} 
    <div> <GoHeartFill className="absolute bottom-2 right-2 w-5 h-5  opacity-50" /> </div>
  </div>
</section>

    </>
  );
}

// -left-4 -top-20






