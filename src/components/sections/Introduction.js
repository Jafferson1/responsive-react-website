import React from "react";
import Image from "../elements/Image";
import img02 from "../../assets/images/img-02.svg";
import classNames from "classnames";

const Introduction = ({ section, className }) => {
  return (
    <div id={section} className={classNames(className)}>
      <div className="container">
        <Image src={img02} width={400} height={400} alt="plan" />
        <div>
          <h1>Desafie seus amigos</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
