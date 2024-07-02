import React from "react";
import ContentLoader from "react-content-loader";

interface PropsType extends React.HTMLAttributes<SVGAElement> {}

const FashionSkleton = (props: PropsType) => (
  <div className="fashion-item-grid">
    {Array.from({ length: 8 }, (_, index) => {
      return (
        <ContentLoader
          key={index}
          className=" h-80 w-full"
          speed={1}
          backgroundColor={"#777"}
          foregroundColor={"#999"}
          style={{ width: "100%", height: "330px" }}
          {...props}
        >
          <rect x="3" y="3" rx="10" ry="10" width="100%" height="230" />
          <rect x="4" y="240" rx="0" ry="0" width="87%" height="20" />
          <rect x="4" y="265" rx="0" ry="0" width="80%" height="20" />
          <rect x="4" y="290" rx="0" ry="0" width="90%" height="20" />
        </ContentLoader>
      );
    })}
  </div>
);

export default FashionSkleton;
