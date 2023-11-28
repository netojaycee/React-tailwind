import logo from "../images/mhapy-logo.png";

export default function Nav() {
    return (
        <nav className='w-[90%] flex items-center mx-auto p-[20px] h-[20vh] hover:shadow-md justify-between'>
        
        <div><a href="/"><img src={logo} alt='logo' className='object-cover w-full' /></a></div>
        <div className=' text-purple-400 '>
          <ul className='md:flex gap-5 justify-center hidden'>
            <li>
              <a className='bg-transparent hover:bg-primary text-primary hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded-lg ease-in duration-300' href='#'>Home</a>
            </li>
            <li>
              <a className='bg-transparent hover:bg-primary text-primary hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded-lg ease-out duration-300'   href='#'>Pricing</a>
            </li>
            <li>
              <a className='bg-transparent hover:bg-primary text-primary hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded-lg transition delay-300 duration-300 ease-in-out'  href='#'>Blog</a>
            </li>
            <li>
              <a className='bg-transparent hover:bg-primary text-primary hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded-lg transition duration-700 ease-in-out'  href='#'>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}