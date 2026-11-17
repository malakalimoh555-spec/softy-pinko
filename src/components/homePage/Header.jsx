import { useState } from 'react'
import logo from '../../assets/images/logo.png'

const links = [
  { href: '#welcome', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work Process' },
  { href: '#testi', label: 'Testimonials' },
  { href: '#price', label: 'Pricing Tables' },
  { href: '#blog', label: 'Blog Entries' },
  { href: '#contact', label: 'Contact Us' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-[30px] z-100 mx-3 mt-[10px] rounded-nav border border-white/30 bg-white/65 px-[25px] py-[15px] shadow-soft backdrop-blur-[4.2px] transition-all duration-300 ease-in-out lg:mx-[100px] xl:mx-[150px] min-[1400px]:mx-[200px] min-[1500px]:mx-[250px] min-[1700px]:mx-[300px] min-[1701px]:mx-[400px]">
      <nav className="flex flex-wrap items-center justify-between">
        <a href="#welcome" className="py-[5px]">
          <img src={logo} alt="Softy Pinko logo" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-controls="navbarScroll"
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="cursor-pointer rounded-md border border-black/15 px-3 py-1 lg:hidden"
        >
          <i className={`bx ${open ? 'bx-x' : 'bx-menu'} text-2xl`} />
        </button>

        <ul
          id="navbarScroll"
          className={`${open ? 'flex' : 'hidden'} w-full flex-col text-center lg:ml-auto lg:flex lg:w-auto lg:flex-row`}
        >
          {links.map(({ href, label }) => (
            <li
              key={href}
              className="relative my-[5px] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[70%] after:-translate-x-1/2 after:bg-line last:after:hidden lg:my-0 lg:after:hidden"
            >
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2 text-txt transition-colors hover:text-brand-pink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
