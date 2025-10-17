import React from "react";
import ApartmentDetailTitle from "../../sections/ApartmentDetail/ApartmentDetailTitle/ApartmentDetailTitle";
import ApartmentGallery from "../../components/ApartmentGallery/ApartmentGallery";

type ApartmentDetailProps = {
  title: string;
  price: string;
  images: string[];
  meters: string;
};

const ApartmentDetail: React.FC<ApartmentDetailProps> = ({
  title,
  price,
  images,
  meters,
}) => {
  return (
    <>
      <ApartmentDetailTitle title={title} price={price} meters={meters} />
      <ApartmentGallery images={images} />
    </>
  );
};

export default ApartmentDetail;
