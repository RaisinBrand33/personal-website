type LinkBoxParams = {
    href: string,
    children: React.ReactNode
}

export default function LinkBox({href, children}: LinkBoxParams){
    return (
        <a href={href}>
            <div className="bg-gradient-to-t 
            from-nasa-yello 
            via-nasa-orange 
            to-nasa-red 
            rounded-lg
            w-12
            h-12
            grid 
            place-items-center
            "
            >
                <div className="w-11 h-11 
                                hover:bg-transparent transition duration-200 ease-in
                                bg-black rounded-[7px] 
                                grid place-items-center
                                hover:ring-2 hover:ring-nasa-cream
                                "
                     >
                    {children}
                </div>
            </div>
        </a>
      );
}