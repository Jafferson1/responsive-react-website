import React from "react";
import Button from "../elements/Button";
import Image from "../elements/Image";
import img01 from "../../assets/images/img-01.svg";
import classNames from "classnames";

const Hero = ({ className }) => {
  return (
    <div className={classNames(className)}>
      <div className="container">
        <div>
          <h1>Seu lugar para conversar</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="button-group">
            <Button
              text="App Store"
              size="sm"
              icon="fa-apple"
              disabled={false}
            />
            <Button
              text="Google Play"
              size="sm"
              icon="fa-google"
              disabled={false}
            />
          </div>
        </div>
        <Image src={img01} width={450} height={450} alt="plan" />
      </div>
    </div>
  );
};

export default Hero;
