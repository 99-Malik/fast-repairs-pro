import FixedCallButtons from '@/components/buttons/FixCallButtons'
import SamsungFooter from '@/components/sections/samsung/SamsungFooter'
import SamsungHeader from '@/components/sections/samsung/SamsungHeader'

const SamsungLayout = ({children}) => {
  return (
    <body>
        <SamsungHeader />
        {children}
        <SamsungFooter /> 
        <FixedCallButtons />
    </body>
  )
}

export default SamsungLayout