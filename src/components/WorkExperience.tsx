import WorkExperienceItemComponent, { WorkExperienceItem } from "./items/WorkExperienceItem";

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <div className="space-y-8">
      {experiences.map((item, index) => (
        <WorkExperienceItemComponent
          key={index}
          item={item}
          index={index}
          showLine={index !== experiences.length - 1}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
