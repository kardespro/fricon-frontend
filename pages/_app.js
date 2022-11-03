import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'; 
import NextNProgress from 'nextjs-progressbar'; 

import { toast } from 'react-hot-toast'
function MyApp({ Component, pageProps }) {
  toast.error("This didn't work.")
  console.log(`[Fricon] Connecting Workers...`)
  console.log(`[Fast Connect] Frontend Connected`)
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  
  );
}

export default MyApp
