import { User } from "@nextui-org/react";
import {Link} from "@nextui-org/react";

const LinkCard = ({ avatar, name, description, link }) => {
  return (
    <Link href={link} color="foreground">
    <User
      name={name}
      description={description}
      avatarProps={{
        src: {avatar}
      }}
    />
    </Link>
  );
};

export default LinkCard;
