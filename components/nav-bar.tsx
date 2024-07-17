// import Link from "next/link";

// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// };

// // Use this function where needed, for example in your Navvy component:



// export default function Navvy(){
//     return (
//         <div className="flex underline text-3xl space-x-5 p-8 w-full">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <a
//             href="#projects"
//             onClick={(e) => {
//             e.preventDefault();
//             scrollToSection('projects');
//             }}
//               >
//               Projects
//           </a>
//         </div>
//       );
// }

// Projects component


// Navvy component
import Link from 'next/link';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest"});
  }
};

export default function Navvy() {
  return (
    <div className="flex underline text-3xl space-x-5 p-8 w-full">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor link behavior
          scrollToSection('projects');
        }}
      >
        Projects
      </a>
    </div>
  );
}
