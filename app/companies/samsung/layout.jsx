import FixedCallButtons from '@/components/buttons/FixCallButtons'
import SamsungFooter from '@/components/sections/samsung/SamsungFooter'
import SamsungHeader from '@/components/sections/samsung/SamsungHeader'
import Header from "@/components/headers/Header";
import Footer from "@/components/sections/home/Footer";
const SamsungLayout = ({children}) => {
  return (
    <body>
        {/* <SamsungHeader /> */}
              <Header/>

        {children}
        {/* <SamsungFooter />  */}
              <Footer/>

        <FixedCallButtons />
    </body>
  )
}

export default SamsungLayout