"use client"

export default function NameChip({title}: {title: string}){
    return (
        <div className="flex flex-col 
                        mx-auto w-fit 
                        relative
                        "
        >
            <div className="flex space-x-6 mx-auto sm:space-x-10 z-10">
                {Array.from(Array(8)).map((num) => (
                    <div key={num} className="w-4 h-6 bg-gradient-to-t from-zinc-700 to-zinc-300 rounded-t-sm" />
                ))}
            </div>
            <div className="relative 
                            rounded-2xl
                            before:z-20 
                            before:absolute before:inset-0
                            before:hover:animate-none
                            before:-translate-x-full
                            before:animate-[shimmer_4s_infinite]
                            before:bg-gradient-to-r
                            before:from-transparent
                            before:via-white/10 
                            before:to-transparent
                            isolate
                            overflow-hidden
                            hover:overflow-visible
                            hover:before:hidden
                            shadow-xl 
                            shadow-black/5
                            before:border-t 
                            before:border-white/10
                            ring-2 
                            ring-zinc-700 
                            hover:ring-nasa-cyan 
                            transition 
                            duration-200
                            select-none
                            "
            >
                <div className="absolute -inset-0.5 opacity-75 group-hover:opacity-100 transition duration-200 bg-nasa-cyan rounded-2xl blur-md z-0"></div>
                <div className="relative bg-zinc-800 max-w-lg text-center p-10 rounded-2xl ">
                    <p className="text-3xl sm:text-5xl font-bold">{title}</p>
                </div>
            </div>
            
            <div className="flex space-x-6 mx-auto sm:space-x-10 z-10">
                {Array.from(Array(8)).map((num) => (
                    <div key={num} className="w-4 h-6 bg-gradient-to-b from-zinc-700 to-zinc-300 rounded-b-sm" />
                ))}
            </div>


        </div>
    )
}