import React from "react";

type DetailsCardProps = {
  description: string;
  title: string;
  icon: string;
  alt: string;
  classs: string;
};

const DetailsCard: React.FC<DetailsCardProps> = ({
  description,
  title,
  icon,
  alt,
  classs,
}) => {
  return (
    <div className={classs}>
      <img src={icon} alt={alt} width={40} height={40} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default DetailsCard;
