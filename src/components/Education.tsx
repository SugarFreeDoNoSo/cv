import EducationItemComponent, { EducationItem } from "./items/EducationItem";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="space-y-8">
      {education.map((item, index) => (
        <EducationItemComponent
          key={index}
          item={item}
          index={index}
          showLine={index !== education.length - 1}
        />
      ))}
    </div>
  );
}
