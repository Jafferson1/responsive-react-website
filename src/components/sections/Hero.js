import React from "react";
import Button from "../elements/Button";
import Image from "../elements/Image";
import img01 from "../../assets/images/img-01.svg";

const Hero = () => {
  return (
    <div className="hero-content">
      <div>
        <h1>Seu lugar para conversar</h1>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h3>
        <Button
          text="Baixar para Android"
          color="primary"
          size="sm"
          disabled={false}
        />
      </div>
      <Image src={img01} width={200} height={200} alt="plan" />
    </div>
  );
};

export default Hero;
