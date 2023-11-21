"use client"
import  qs from "query-string"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { ChangeEventHandler, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { useDebounce } from "@/app/hooks/use-debounce"



export const SearchInput = () => {
    const router = useRouter();
    const SearchParms = useSearchParams();
    const categoryId = SearchParms.get("categoryId");
    const name = SearchParms.get("name");
    const [value, setvalue] = useState(name || "");
    const debouncedvalue = useDebounce<string>(value, 500);
    const onchange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setvalue(e.target.value);  
    }
    useEffect(() => { 
        const query = {
            name: debouncedvalue,
            categoryId: categoryId
        };
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true });
        router.push(url);
    },[debouncedvalue,router,categoryId])
    return (
        <div className="relative">
            <Search className="absolute h-4  w-4 top-3 left-4 text-muted-foreground" />
            <Input
                onChange={onchange}
                value={value}
                placeholder="Search..."
                className="pl-10 bg-primary/10"
            />
          
        </div>
    )
}