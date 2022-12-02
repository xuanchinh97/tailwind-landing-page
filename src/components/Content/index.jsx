import { FaUser } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import checkIconMobile from "../../assets/mobile/check.svg";
import { BsFillCreditCardFill } from "react-icons/bs";

function Content() {
  const customer = useSpring({ customers: 1997, from: { customers: 0 } });
  const card = useSpring({ cards: 2022, from: { cards: 0 } });

  return (
    <section className="md:flex md:flex-row">
      <div className="mx-[70px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent md:w-[30%]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">
              Customers
            </p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-16">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16"> Cards Issued </p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] mx-[70px]  md:mt-0 md:text-16 justify-center gap-14 ">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> Card reports sent to your phone every weeks </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>No external fees </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
