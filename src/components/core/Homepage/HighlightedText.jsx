import React from 'react'

const HighlightedText = ({text}) => {
  return (
    <span className='bg-yellow-25 text-transparent bg-clip-text font-bold'>{text}</span>
  )
}

export default HighlightedText;