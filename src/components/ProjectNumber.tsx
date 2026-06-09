interface ProjectNumberProps {
  number: string;
  className?: string;
}

export default function ProjectNumber({ number, className = '' }: ProjectNumberProps) {
  return <p className={className}>{number}.</p>;
}
