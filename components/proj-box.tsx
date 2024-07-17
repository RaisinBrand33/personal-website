import Image from "next/image"
import NameChip from "./name-chip"
import MoreInfo from "./more-info"


export default function ProjBox({title, description, tools, image}: {title: string, description: string, tools: string[], image: string}){
    return(
        <div className="flex items-center justify-center gap-28">
            <div className="bg-zinc-800 max-w-lg aspect-[9/7] h-auto rounded-3xl text-center p-4 flex flex-col">
                <p className="text-3xl font-bold text-nasa-cream">{title}</p>
                <p className="text-nasa-cream p-2">{description}</p>
                <div className="mt-auto flex flex-col gap-3">
                    <div className="flex gap-5 justify-center">
                        {tools.map((tool)=>(
                            <div key={tool} className="bg-zinc-950 p-1 rounded-lg border border-white">
                                <p>{tool}</p>
                            </div>
                        ))}
                    </div>
                    <MoreInfo />
                </div>
            </div>
            <div className="w-[250px] h-[250px] rounded-2xl bg-zinc-800 grid place-items-center">
                <Image src={image} className="rounded-xl z-50" width={200} height={200} alt="Pizza is my favorite fooddddddddddddddddd"/>
            </div>
        </div>
    )
}
