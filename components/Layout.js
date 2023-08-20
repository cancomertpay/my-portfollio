// fonts
import {Sora } from '@next/font/google'

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

// font settings
const sora = Sora ({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800'],
})

// components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({children}) => {
  return (
    <div
     className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <motion.div 
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      >
      <Header />
      </motion.div>
      {children}
    </div>
  )
};

export default Layout;
