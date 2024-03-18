import React from 'react';
import {Chip} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Link, Image, Button } from "@nextui-org/react";
import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";

interface GameCardProps {
    game: CollectionEntry<'game'>;
  }

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card isPressable className="max-w-[400px] mx-auto py-4 shadow-inset-1 cursor-pointer hover:scale-105 transition-400 w-full dark-bg-1">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="font-bold text-large text-color-2 text-left line-clamp-1">{game.data.title}</h3>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex gap-2">
          <Image
            src={game.data.thumbnail}
            alt={game.data.title}
            className="object-cover rounded-xl w-full"
          />
          <Chip
            startContent={<span className="icon-[material-symbols--download]"></span>}
          >
            {game.data.size}
          </Chip>
          <p>{game.data.short_description}</p>
        </CardBody>
        <CardFooter>
          <Button as={Link} href={`/games/${game.slug}`} target="_blank" className='text-white' rel="noopener noreferrer">
            查看
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default GameCard;