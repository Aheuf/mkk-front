import Required from "../Required";

interface DescriptionProps {
  description?: string;
  required?: boolean;
}

export default function Description({ description, required }: DescriptionProps) {
  return (
    <span className="w-max mb-1 grid grid-cols-2">
      {description && <p>{description}&nbsp;</p>}
      {required && <Required />}
    </span>
  );
}
