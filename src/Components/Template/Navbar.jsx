import Button from "./Button"

function Navbar() {
  return (
    <div className='w-full h-12 bg-[#1e1f1f] sm:py-8 py-5 xl:px-30 lg:px-20 md:px-10 px-3 flex justify-between text-white items-center fixed top-0 left-0 z-100'>
      <div className="logo">
        Logo
      </div>
      <div className="navlinks flex gap-4 font-semibold">
            <a className='hover:text-yellow-500 transition lg:text-md md:text-sm text-xs' href='#home'>Home</a>
            <a className='hover:text-yellow-500 transition lg:text-md md:text-sm text-xs' href='#about'>About</a>
            <a className='hover:text-yellow-500 transition lg:text-md md:text-sm text-xs' href='#services'>Services</a>
            <a className='hover:text-yellow-500 transition lg:text-md md:text-sm text-xs' href='#gallery'>Gallery</a>
            <a className='hover:text-yellow-500 transition lg:text-md md:text-sm text-xs' href='#contact'>Contact</a>
      </div>
      <div className="right flex gap-4 items-center">
        <p className='font-semibold lg:text-md md:text-sm sm:block hidden'><i class="ri-phone-line text-yellow-500 text-lg mr-1"></i>+1 940-612-9127</p>
        <div className="hidden lg:block">
        <Button name="Book an Appointment" px="px-5" py="py-2" icon/></div>
      </div>
    </div>
  )
}

export default Navbar
