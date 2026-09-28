import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const Logo = () => {
  return (
    <Link href={"/"}>
    <h2 className={twMerge("text-2xl text-accent-300 hover:text-darkOrange inline-flex font-bold hoverEffect relativeuppercase")} >Gadget Base
        <span className='absolute left-0 bottom-0 w-full h-px bg-darkOrange'  />
    </h2>
    </Link>
  )
}

export default Logo