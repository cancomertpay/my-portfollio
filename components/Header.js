// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';


const Header = () => {
  return <header className='absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8  leading-[1.4]'>
        {/* logo */}
        <Link href='/'>
          {/* <Image src={'/logo.svg'} width={220} height={48} priority={true} /> */}
          <div className='xl:hidden block ' priority={true}>
            <h1 className='text-2xl font-bold'>
              can   
            <span className='font-light'>comertpay</span><span className='text-accent'>.</span>
            </h1>
          </div>
          <div className='hidden xl:block ' width={220} height={48} priority={true}>
            <h1 className='h2'>
              can   
            <span className='font-light'>comertpay</span><span className='text-accent'>.</span>
            </h1>
          </div>
        </Link>
        {/* socials */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
