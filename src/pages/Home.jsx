import React from 'react';
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import HighlightedText from '../components/core/Homepage/HighlightedText';
import Button from '../components/core/Homepage/Button';
// import Hero1 from '../assets/Images/hero1.png';
// import Hero2 from '../assets/Images/hero2.png';
// import Hero3 from '../assets/Images/hero3.png';
import CodeBlock from '../components/core/Homepage/CodeBlock';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Logo1 from "../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../assets/Images/TimelineImage.png";
import Know_your_progress from "../assets/Images/Know_your_progress.svg";
import Compare_with_others from "../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../assets/Images/Plan_your_lessons.svg";
import Footer from "../components/common/Footer";
import ReviewSlide from '../components/common/ReviewSlide';

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];

  return (
    <div>
      {/* Section 1 */}
      <div className='w-11/12 mx-auto flex flex-col items-center justify-between gap-8 text-white'>
        <Link to={"/signup"}>
          <div className='mt-32 mx-auto bg-richblack-900 rounded-full p-1 font-medium text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-105 group hover:drop-shadow-none'>
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <button>Become an Instructor </button>
              <MdArrowRightAlt />
            </div>
          </div>
        </Link>

        <div className='text-center text-4xl font-semibold'>
          Build your own Empire, <HighlightedText text={"Code by Code"} />
        </div>

        <div className='mt-3 w-[90%] text-center text-lg font-semi-bold text-richblack-300'>
          From beginner to developer, we've got you covered. Build the skills you need to thrive in the tech industry and make a difference in the world with technology.       
        </div>

        <div className='flex flex-row gap-7 mt-4 mb-28'>
          <Button active={true} link={"/signup"}>Signup</Button>
          <Button active={false} link={"/login"}>Login</Button>
        </div>

        {/* <div className='flex items-center justify-center gap-[10rem]'>
          <img className='object-contain h-52' src={Hero1} alt="Hero1" />
          <img className='object-contain h-40' src={Hero3} alt="Hero2" />
          <img className='object-contain h-40' src={Hero2} alt="Hero3" />
        </div> */}

        <div>
          <CodeBlock
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock your <HighlightedText text={"coding potential"} /> with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            button1={{
              active: true,
              link: "/signup",
              text: "Try it yourself",
            }}
            button2={{
              active: false,
              link: "/login",
              text: "Learn more",
            }}
            codeColor={"text-white"}
            codeblock={`#include <iostream>\n using namespace std;\n\nint main() {\n cout << "Hello, World!";\n int x = 22; \n cout << x << endl;\n return 0;\n}            `}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        <div>
          <CodeBlock
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold'>
                Learn to code by <HighlightedText text={"doing"} />
              </div>
            }
            subheading={
              "Code with confidence. We'll guide you every step of the way. The possibilities are endless. Learn to code, build anything.."
            }
            button1={{
              active: true,
              link: "/signup",
              text: "Try it yourself",
            }}
            button2={{
              active: false,
              link: "/login",
              text: "Learn more",
            }}
            codeColor={"text-caribbeangreen-25"}
            codeblock={`import React from "react";\n import Button from "./Button";\nimport {TypeAnimation} from "react-type-animation";\nimport {MdArrowRightAlt} from "react-icons/md";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          />
        </div>

      </div>

      {/* Section 2 */}
      <div className='bg-pure-greys-5'>
        <div className='homepage_bg h-[320px]'>
          <div className='w-11/12 flex flex-col mx-auto items-center justify-between gap-8'>
            <div className='lg:h-[150px]'></div>
            <div className='flex flex-row gap-7 text-white lg:mt-8'>
              <Button active={true} link={"/signup"}>Signup</Button>
              <Button active={false} link={"/login"}>Login</Button>
            </div>
          </div>
        </div>

        <div className='mx-auto flex w-10/12 flex-col items-center justify-between gap-8'>
          <div className='mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0'>
            <div className='text-3xl font-semibold lg:w-[45%]'>
              Get the skills you need for a <HighlightedText text={"job that is in demand."} />
            </div>

            <div className='flex flex-col items-start gap-6 lg:w-[40%]'>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than.
              </div>
              <Button active={true} link={"/signup"}>Signup</Button>
            </div>
          </div>

          {/* TimeLine section */}
          <div className='flex flex-col lg:flex-row gap-20 items-center'>
            <div className='lg:w-[45%] flex flex-col gap-14 lg:gap-3'>
              {TimeLine.map((element, i) => {
                return (
                  <div className='flex flex-col lg:gap:3' key={i}>
                    <div className='flex gap-6'>
                      <div className='w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]'>
                        <img src={element.Logo} alt='Logo' />
                      </div>
                      <div className='flex flex-col'>
                        <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                        <p className='text-base'>{element.Description}</p>
                      </div> 
                    </div>
                    <div className={`hidden h-12 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px] ${ TimeLine.length - 1 === i ? "hidden" : "lg:block"}`}></div>
                  </div>
                );
              })}
            </div>
            
            <div className='w-fit h-fit'>
              <img src={TimeLineImage} alt='TimeLine' className='shadow-white shadow-[20px_20px_0px_0px] object-cover hidden lg:block lg:h-[420px]'/>
            </div>
          </div>

          {/* Learing Language */}
          <div className='text-4xl font-semibold text-center my-20'>
            Your swiss knife for <HighlightedText text={"learning any programming language"} />
            <div className='text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3'>
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule and more.
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
              <img src={Know_your_progress} alt='Know_your_progress' className='object-contain lg:-mr-32' />
              <img src={Compare_with_others} alt='Compare_with_others' className='object-contain lg:-mb-10 lg:-mt-0 -mt-12'/>
              <img src={Plan_your_lessons} alt='Plan_your_lessons' className='object-contain lg:-ml-36 lg:-mt-5 -mt-16'/>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='mx-auto my-10 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
        <h1 className='text-center text-4xl font-semibold mt-8'>Reviews from other learners</h1>
        <ReviewSlide />
      </div>
      <Footer />
    </div>
  )
}

export default Home;