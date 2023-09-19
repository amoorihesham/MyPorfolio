import BackArrow from "@/app/components/BackArrow";
import ProjectsCards from "@/app/components/projectsCard/ProjectsCards";

const page = () => {
  return (
    <div className="worksPage py-8">
      <div className="container mx-auto px-5">
        <BackArrow />
        <ProjectsCards />
      </div>
    </div>
  );
};

export default page;
