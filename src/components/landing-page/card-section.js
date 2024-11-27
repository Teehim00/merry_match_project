import { CustomButton } from "@/components/CustomUi";
import { GoHeartFill } from "react-icons/go";
export default function CardSection() {

  const steps = [
    {
      emoji: "😎",
      title: "Upload your cool picture",
      description: "Lorem ipsum is a placeholder text"
    },
    {
      emoji: "😁",
      title: "Explore and find the one you like",
      description: "Lorem ipsum is a placeholder text"
    },
    {
      emoji: "🥳",
      title: "Click ‘Merry’ for get to know!",
      description: "Lorem ipsum is a placeholder text"
    },
    {
      emoji: "😘",
      title: "Start chatting and  relationship",
      description: "Lorem ipsum is a placeholder text"
    }
  ];


  return (
    <>

{/* renderlists */}
<div class=" text-white p-6 lg:p-0 lg:py-24">
  <h2 class="text-center text-3xl font-bold text-second-300 mb-8">How to Merry</h2>
  <figure className="flex flex-col container mx-auto lg:flex-row lg:justify-center lg:gap-5 items-center space-y-6 lg:space-y-0">
  {steps.map((step, index) => (
    <div key={index} className="bg-second-800 p-10 rounded-badge flex flex-col items-center w-full lg:w-[15rem]">
      <div className="text-4xl w-24 h-24 bg-second-600 rounded-full mb-4 flex justify-center items-center">
        <span className="text-center">{step.emoji}</span>
      </div>
      <article className="mt-5 text-center">
        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
        <p className="text-sm text-gray-300">{step.description}</p>
      </article>
    </div>
  ))}
</figure>

</div>




    </>
  );
}







