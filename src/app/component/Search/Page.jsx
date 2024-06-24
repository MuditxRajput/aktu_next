
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../store/slice.js";
const Search = () => {
   const router = useRouter();
  const[search,setSearch] = useState("");
  const handleChange=(e)=>{
    
    setSearch(e.target.value)
  }
  const dispatch = useDispatch();
  const setHandle=(e)=>{
      dispatch(setQuery(search))
    
  }
  return (
    <div className="flex justify-center h-[70px] items-center mt-10 ">
    <div className="relative  flex items-center">
      <input
        type="search"
        placeholder="Search pdf here.."
        className="border-2 border-orange-600 rounded-full px-4 py-2 w-[270px] sm:w-[600px] outline-none "
        onChange={(e)=>handleChange(e)}
        value={search}
      />
      <button onClick={(e)=>setHandle(e)}  className="bg-orange-600 hover:bg-orange-700 rounded-full absolute px-4 py-2 text-white right-0">Search</button>
    </div>
  </div>
  )
}

export default Search