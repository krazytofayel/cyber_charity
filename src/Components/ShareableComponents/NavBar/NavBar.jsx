import { useState } from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../../../../public/assets/nav-img/main-logo.png'
import { motion } from 'framer-motion';
const NavBar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Programs', link: '/programs' },
    { name: 'About', link: '/aboutus' },
    { name: 'Resources', link: '/resources' },
    { name: 'Get Involved', link: '/getinvoice' },
    { name: 'Contact ', link: '/contactus' },
 
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
       <div>
       <div className='bg-[#ddd6d6] p-2 '>
          <p className='text-end animate-bounce'>Free Help: 1300 12 176 <span className='text-[#16b1b5]'>(AEST:8AM-6PM)</span></p>
        </div>
        <nav className="container mx-auto md:flex justify-between items-center text-black py-[18.5px] p-5 ">
          <div className="p-2 md:p-0 lg:p-0 ">

            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1, }}
              transition={{
                ease: "linear",
                duration: 2,

              }}> <img src={navlogo} alt=" main logo" className='h-16' /></motion.div>


          </div>

          <motion.div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
            whileHover={{ scale: 1.1 }}
          >
            {open ? 'x' : '...'}
          </motion.div>

          <motion.ul
            className={`md:flex md:items-center md:bg-inherit md:pb-0 pb-12 absolute md:static text-gray-600 bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto md:pl-0 pl-5 gap-5 transition-all duration-500 ease-in-out ${open ? 'right-19' : 'hidden'
              }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 2 }}
          >
            {Links.map((link) => (
              <motion.li
                key={link.name}
                className="md:ml-4 md:text-[11px] truncate md:my-0 my-7 lg:text-lg relative group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-x-0 bottom-0 h-.5 bg-[#089bab] border-b border-transparent transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                <Link to={link.link} className="duration-500 text-[20px] font-bold">
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="md:hidden my-3 truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="login">Login</Link>
            </motion.li>
            <motion.li
              className="md:hidden truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="signup">Create An Account</Link>
            </motion.li>
          </motion.ul>

          <div className={`hidden md:flex md:items-center ml-2 md:justify-between md:gap-5 ${open ? 'right-19' : 'hidden'}`}>
            <button className="bg-[#16b1b5] text-white md:text-[11px] lg:text-[20px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/donate">Donate</Link>
            </button>
            <button className="bg-[#16b1b5] text-white md:text-[11px] lg:text-[20px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/sign_in">Sign in</Link>
            </button>
          </div>
        </nav>
      </div>
      <div>

      </div>

    </>
  );
}

export default NavBar;