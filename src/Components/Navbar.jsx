import Button from './Template/Button'
function Navbar() {
  return (
    <div className='w-full h-12 bg-[#1e1f1f] py-8 px-30 flex justify-between text-white items-center fixed top-0 left-0 z-100'>
      <div className="logo">
        Logo
      </div>
      <div className="navlinks flex gap-4 font-semibold">
            <a className='hover:text-yellow-500' href='/home'>Home</a>
            <a className='hover:text-yellow-500' href='/about'>About</a>
            <a className='hover:text-yellow-500' href='/services'>Services</a>
            <a className='hover:text-yellow-500' href='/gallery'>Gallery</a>
            <a className='hover:text-yellow-500' href='/contact'>Contact</a>
      </div>
      <div className="right flex gap-4 items-center">
        <p className='font-semibold'><i class="ri-phone-line text-yellow-500 text-lg mr-1"></i>+1 940-612-9127</p>
        <Button name="Book an Appointment" px="px-5" py="py-2"/>
      </div>
    </div>
  )
}

export default Navbar
