import  {createContext, useState } from 'react'

const StarRateContext = createContext();

export const StarRateContextProvider = ({children}) => {
const [rate, setRate] = useState(0)
  return (
    <StarRateContext.Provider
        value = {{
            rate,
             setRate
        }}
    >
        {children}
    </StarRateContext.Provider>
  )
}
export default StarRateContext ;


        