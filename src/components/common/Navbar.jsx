import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import Logo from "../../assets/TimeLineLogo/logo.png"


const Navbar = () => {
  return (
    <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700`}>
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="logo" width={170} height={30} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;