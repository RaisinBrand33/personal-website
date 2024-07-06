import Link from "next/link";

export default function Navvy(){
    return (
        <div className="flex underline text-3xl space-x-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </div>
      );
}