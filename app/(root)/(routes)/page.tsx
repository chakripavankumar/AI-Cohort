import { Categories } from "@/components/categories";
import { SearchInput } from "@/components/search-input";
import primsadb from "@/lib/prismadb";


const Loginpage =  async() => {
  const categories = await primsadb.category.findMany();
    return ( 
      <div className="h-full p-4">
        <SearchInput />  
        < Categories data={categories}   /> 
       </div>
     );
}
 
export default Loginpage;