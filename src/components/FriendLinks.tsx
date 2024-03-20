import { User } from "@nextui-org/react";

const LinkCard = ({ avatar, name, description }) => {
  return (
    <User
      name={name}
      description={description}
      avatarProps={{
        src: {avatar}
      }}
    />
  );
};

export default LinkCard;
