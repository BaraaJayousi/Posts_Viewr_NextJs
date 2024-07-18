import Link from "next/link"


const NavbarComponent = () => {
  return (
    <nav className="w-100 flex justify-around py-4 px-10 bg-white">
      <h1 className="tracking-widest text-2xl font-black grow">POSTX.</h1>
      <div className="flex justify-evenly grow">
        <Link href="/">BLOG</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
    </nav>
  )
}

export default NavbarComponent