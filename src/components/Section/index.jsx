import { FcNegativeDynamic, FcTreeStructure, FcCircuit } from "react-icons/fc";
function Section() {
  return (
    <section className="my-20">
      <div className="text-26 text-center pb-20">Everything you need</div>
      <div className="flex flex-col gap-10 md:flex-row mx-[70px] ">
        <div className="bg-white/50  shadow-md rounded-md p-10 text-center flex flex-col gap-2">
          <div className="text-9xl w-full">
            <FcNegativeDynamic className="w-full" />
          </div>
          <div className="">Payment cards for all</div>
          <div className="text-13 font-100">
            Distribute virtual or plastic cards with custom predefined limits in
            just a few clicks
          </div>
        </div>
        <div className="bg-white/50  shadow-md rounded-md p-10 text-center flex flex-col gap-2">
          <div className="text-9xl w-full">
            <FcCircuit className="w-full" />
          </div>
          <div className="">Automated expense reports</div>
          <div className="text-13 font-100">
            Real-time notifications remind employees to take an image of the
            receipt on-the-go
          </div>
        </div>
        <div className="bg-white/50  shadow-md rounded-md p-10 text-center flex flex-col gap-2">
          <div className="text-9xl w-full">
            <FcTreeStructure className="w-full" />
          </div>
          <div className="">Real-time spending</div>
          <div className="text-13 font-100">
            See all company spending in one place as it happens and sync it to
            you accounting system
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
