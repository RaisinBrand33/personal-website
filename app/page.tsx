import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LinkBox from "@/components/link-box";
import NameChip from "@/components/name-chip";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between items-center mt-4">

        <div className="max-w-xl flex flex-col space-y-2">
          <p className="text-3xl">Brandon Farber</p>
          <p>I like pizza, sometimes chicken, occassionaly lobster ja;lskdjfj l;asfjdasldf l;adskfjfsadklf ;lakdjf;lksajdf ;lkasksjdfl;kaj al;sdkfkjj;laksdfj l;kasjdsjfl;kasjdf;lk ;lkaksdjdfl;kasjdfd </p>
          <div className="flex space-x-4">
            <LinkBox href="https://www.linkedin.com/in/brandonfarber2027/">
              <FaLinkedin className="w-7 h-7" />
            </LinkBox>
            <LinkBox href="mailto:brandonafarber33@gmail.com">
              <MdEmail className="w-7 h-7" />
            </LinkBox>
          </div>
        </div>

        <div className="w-48 h-48 rounded-full bg-white">

        </div>

      </div>

      <NameChip title="Brandon Farber" />
    </main>
  );
}