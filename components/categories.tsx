"use client";
import qs from "query-string"
import { cn } from "@/lib/utils";
import { category } from "prisma/prisma-client"
import {useRouter,useSearchParams} from "next/navigation"

interface categoriesProps{
    data:category[];
}
export const Categories = ({
    data
}: categoriesProps) => {
    const router = useRouter();
    const searchParms = useSearchParams();
    const categoryId = searchParms.get("categoryId");
    const Onclick = (id: string | undefined) => {
        const query = { categoryId: id };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true });
        router.push(url);
    }
    return (
        <div className="w-full overflow-auto space-x-2 flex p-1">
            <button
                onClick={()=> Onclick(undefined)}
                className={cn(`
                flex
                items-center
                text-center
                text-xs
                md:text-sm
                px-2
                md:px-4
                py-2
                md:py-3
                rounded-md
                bg-primary/10
                hover:opacity-75
                transition
                `,
                    !categoryId ?"bg-primary/25" :"bg-primary/10"
                )}
            >
                     Newest
            </button>
            {data.map((item) => (
                <button
                    onClick={()=> Onclick(item.id)}
                    key={item.id}
                className={cn(`
                flex
                items-center
                text-center
                text-xs
                md:text-sm
                px-2
                md:px-4
                py-2
                md:py-3
                rounded-md
                bg-primary/10
                hover:opacity-75
                transition
                `,
                    item.id===categoryId ?"bg-primary/25": "bg-primary/10"
                )}
            >
                   {item.name}
            </button>
            ))}
        </div>
    )

}