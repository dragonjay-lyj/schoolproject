import {Image} from "@nextui-org/react";

interface ArticalImage {
  src: string;
}

const ArticalImage: React.FC<ArticalImage> = ({ src }) => {
  return (
    <Image
      width={750}
      src={src}
    />
  );
};

export default ArticalImage;
