import ProjBox from "./proj-box";

export default function Projects() {
    return (
      <div className="h-screen mt-10" id="projects">
        <p className="text-5xl text-center mb-10">Projects</p>
        <ProjBox 
            title="Pizza"
            description="Pizza"
            image="/mee.jpg"
            tools={["pizza", "lobster", "chicken"]}
        />
      </div>
    );
  }