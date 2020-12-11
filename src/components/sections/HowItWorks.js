import React from "react";
import Image from "../elements/Image";
import img03 from "../../assets/images/img-03.svg";
import classNames from "classnames";

const HowItWorks = ({ section, className }) => {
  return (
    <div id={section} className={classNames(className)}>
      <div className="container">
        <div>
          <h1>Desafie seus amigos</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <Image src={img03} width={450} height={450} alt="plan" />
      </div>
    </div>
  );
};
export default HowItWorks;
