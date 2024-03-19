import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Link, Image, Button } from "@nextui-org/react";
import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";

type AllArticleCardProps = {
    article: CollectionEntry<'post'> | CollectionEntry<'game'>; // 根据您的需求选择合适的类型
  };

  const getArticlePath = (article: CollectionEntry<'post'> | CollectionEntry<'game'>): string => {
    switch (article.collection) {
      case 'post':
        return `/post/${article.slug}`;
      case 'game':
        return `/game/${article.slug}`;
      default:
        throw new Error('Unsupported article collection type');
    }
  };

const AllarticleCard: React.FC<AllArticleCardProps> = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card isPressable className="max-w-[400px] mx-auto py-4 shadow-inset-1 cursor-pointer hover:scale-105 transition-400 w-full dark-bg-1">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="font-bold text-large text-color-2 text-left line-clamp-1">{article.data.title}</h3>
        </CardHeader>
        <CardFooter>
          <Button as={Link} href={getArticlePath(article)} target="_blank" className='text-white' rel="noopener noreferrer">
            查看
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AllarticleCard;