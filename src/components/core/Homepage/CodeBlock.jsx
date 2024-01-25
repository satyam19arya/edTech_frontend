import React from 'react';
import { TypeAnimation } from "react-type-animation";
import { MdArrowRightAlt } from "react-icons/md";
import Button from './Button';

const CodeBlock = ({
    position,
    heading,
    subheading,
    button1,
    button2,
    codeColor,
    codeblock
}) => {
  return (
    <div className={`flex ${position} flex-col my-8 justify-between lg:my-12`}>
        <div className='w-[100%] lg:w-[48%] flex flex-col gap-8'>
            {heading}
            <div className='text-richblack-300 text-base font-bold w-[85%] -mt-3'>
                {subheading}
            </div>

            <div className='flex gap-7 lg:mt-3'>
                <Button active={button1.active} link={button1.link}>
                    <div className='flex items-center gap-2'>
                        {button1.text}
                        <MdArrowRightAlt />
                    </div>
                </Button>
                <Button active={button2.active} link={button2.link}>
                    {button2.text}
                </Button>
            </div>
        </div>

        <div className='h-fit code-border flex flex-row py-3  text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[45%]' data-aos="flip-left">
            <div className='w-[10%] text-center flex flex-col select-none text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>

            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}>
                <TypeAnimation
                    sequence={[codeblock, 1000, ""]}
                    cursor={true}
                    repeat={Infinity}
                    style={{
                        whiteSpace: "pre-line",
                        display: "block"
                    }}
                    omitDeletionAnimation={true}
                    speed={50}
                />
            </div>
        </div>
    </div>
  )
}

export default CodeBlock;