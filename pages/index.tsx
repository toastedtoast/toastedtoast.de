import React from "react";

interface Props {}

const Index: React.FC<Props> = ({}) => {
  return (
    <div className="m-6 mt-10 text-gray-700">
      <div className="mb-4 font-bold text font-display">Marco Köppel</div>
      <div className="mb-4 text-xs font-body">
        Dedicated Technologist.
        <br />
        Bold Emerging Experiences Developer.
        <br />
        Loving Father.
      </div>
      <div className="mb-8 text-xs font-body">
        Creative Technologist at{" "}
        <a
          className="text-pink-800 hover:text-pink-900"
          href="https://www.merckgroup.com"
          target="_blank"
        >
          Merck KGaA
        </a>
        .
        <br />
        Using technology to help smart people make the world a better place.
      </div>
      <div className="mb-4 text-xs font-body">
        <div>
          <a
            className="text-pink-800 hover:text-pink-900"
            href="https://github.com/toastedtoast"
            target="_blank"
          >
            github
          </a>
        </div>
        <div>
          <a
            className="text-pink-800 hover:text-pink-900"
            href="https://twitter.com/toastedtoast"
            target="_blank"
          >
            twitter
          </a>
        </div>
        <div>
          <a
            className="text-pink-800 hover:text-pink-900"
            href="http://de.linkedin.com/in/marcokoeppel"
            target="_blank"
          >
            linkedin
          </a>
        </div>
        <div>
          <a
            className="text-pink-800 hover:text-pink-900"
            href="mailto:marco.koeppel@googlemail.com"
            target="_blank"
          >
            mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
