import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Button, Link } from '@nextui-org/react';
import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";


interface HomeworkCardProps {
  post: CollectionEntry<'post'>;
}

const HomeworkCard: React.FC<HomeworkCardProps> = ({ post, }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <Card shadow="md" radius="lg" className='max-w-[400px] mx-auto py-4 shadow-inset-1 cursor-pointer hover:scale-105 transition-400 w-full dark-bg-1'>
      <CardHeader>{post.data.title}</CardHeader>
      <CardBody>
        <p>{post.data.description}</p>
      </CardBody>
      <CardFooter>
        <Link
          href={post.data.herf}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          underline="hover"
          isExternal
        >
          查看详情
        </Link>
      </CardFooter>
    </Card>
    </motion.div>
  );
};

export default HomeworkCard;