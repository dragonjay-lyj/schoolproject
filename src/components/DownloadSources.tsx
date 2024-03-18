import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Button, Link } from '@nextui-org/react';

interface DownloadSource {
  name: string;
  url: string;
  des: string;
}

interface DownloadCardProps {
  fileName: string;
  sources: DownloadSource[];
}

const DownloadCard: React.FC<DownloadCardProps> = ({ fileName, sources }) => {
  return (
    <Card shadow="md" radius="lg" fullWidth>
      <CardHeader>{fileName}</CardHeader>
      <CardBody>
        {sources.map((source, index) => (
          <div key={index} className="flex gap-2 items-center mt-2">
            <Button as={Link} href={source.url} download={fileName} isExternal className='text-white'>
              {source.name}
            </Button>
            <p>{source.des}</p>
          </div>
        ))}
      </CardBody>
      <CardFooter>
        {/* 如果需要，可以在这里添加一个自定义的下载按钮 */}
        {/* <Button>下载</Button> */}
      </CardFooter>
    </Card>
  );
};

export default DownloadCard;