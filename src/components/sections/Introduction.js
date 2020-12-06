import React from "react";
import Image from "../elements/Image";
import img02 from "../../assets/images/img-02.svg";

const Introduction = () => {
  return (
    <div className="introduction-content">
      <Image src={img02} width={200} height={200} alt="plan" />
      <div>
        <h1>Desafie seus amigos</h1>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h3>
      </div>
    </div>
  );
};
export default Introduction;
