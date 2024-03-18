import { Image } from "@nextui-org/react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface GameDetails {
  title: string;
  version: string;
  developer: string;
  thumbnail: string;
  description: string;
}

const GameDetailsCard: React.FC<GameDetails> = ({ title, version, developer, thumbnail, description }) => {
  return (
    <Card shadow="md" radius="lg" className="flex flex-col md:flex-row items-stretch w-full">
  <div className="w-full py-6 md:w-1/2">
    <Image
      src={thumbnail}
      alt={title}
      width="100%"
      shadow="sm"
      className=""
    />
  </div>
  <div className="flex-1 md:w-1/2 p-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg">
    <CardHeader className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
      <h2 className="text-xl font-medium">{title}</h2>
    </CardHeader>

    <CardBody>
      <p>{description}</p>
      <p>版本: {version}</p>
      <p>开发商: {developer}</p>
    </CardBody>
  </div>
</Card>
  );
};

export default GameDetailsCard;
