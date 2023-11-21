 PROGRESS!
 
   [ Environment setup]
 1.@latest nextjs with tailwind 

  [Folder setup]
 2.How to create the routing inside the nexts js => go to App create a folter Test init create page.tsx =>now 
 its time for test go to the url and click on the /test its going work(now  the way routeing works on the app folder)
   "Every folder that we createnin the App folder that will reflect to url"
 now the question is? => how to create a folder that doesn't  reflect to url => this can be done by Route groups
 "By giving special convention (folder name) OR [[...folder name]]"
  the same way we can use for the layout 
  "create  one layout file and they reflect everything"

 [Authentication ]
    "Clerk Authentication"
 3.simply follow the Docs  from official clerk website  

 [NavBar ]
 4.create a layout file in the  (root) folder the same way we created in the (auth) folder
     cn=> "used for dynamic classes" How it works?
     div className={cn("properties"),
     dynamic className
     }
    5.how create a button using shadcn "Go to the docs " use npx  =>in nextjs it creates a separate folder named  as UI you can edit in it for example we creates premium button using the same method
    6.how to create a icon using lucid react => "import Menu Sprakles"

    [Dark/Light Mode]
    7.simply go to the shadcn docs and follow everything 
    [sidebar]
    8.create a navbar component  in components folder -> create a div  element for placeing all the icons/features i.e home,create,seetings 
    9.create a route object {icon:lucid-react,href:tagto particular route,lable:name of icon,pro:paid/free version}
    10. hooks used are usepathname-> for ex pathname===route.href,use navigate-> for navigation through routes
    11. creating a new mobile sidebar component for better responsiveness of application -> in navbar component remove that menu icon and add mobile sidebar component
    12.mobile sidebar component-> intsall sheet component from shadcn  and import Sheet,SheetContent,SheetTrigger  and do the necessary 
    [Searchbar]
    13.create a new searchbar component ->import an icon from lucid& input component from shadcn react and add inpuit tag with basuic tailwind init
    14.place this component in the rootpage ->app/root/routes->page.tsx(it is a server component)
    15. [debounceing]
      create a new hook -> use-debounce using settimeout of 500 milli seconds
     
 






 [category ]
 20.instaLIZE prisma and planetscale(mysql database) pscale_pw_I3JItLDvyXIxWBtJR2vZMiHjPvHeMxWpvkBuD9TK5Ec

 21.every time we made any change in the database -> npx prisma generate(for example we added a new model category 
 and by doing this we will add this new model to local
 ->npx prisma db push -> by doing this we will add this new model to planet scale)
 22.now create a new folder on the root level @script and create  seed.ts(here we're using require instead of import because it's not a react/nextjs thimg its purly node thing)
 23.now you can see the categories in the database i.e in prisma studio now we need to acess the categories in the project for acheving this we need to open app/routes/root ->page.tsx (its a server component so we can access our categories here)