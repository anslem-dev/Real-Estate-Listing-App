import  {createContext,useState } from 'react'

const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState ("");
  const [type, setType]= useState("")
  return (
    <FilterContext.Provider
        value = {{
    search,
    setSearch,
    location, 
    setLocation,
    price,
    setPrice,
    type,
    setType,
        }}
    >
        {children}
    </FilterContext.Provider>
  )
}
export default FilterContext ;


