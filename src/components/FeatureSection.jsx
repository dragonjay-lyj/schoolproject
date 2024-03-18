import { Button, Image, Modal, ModalBody, ModalFooter, ModalHeader, ModalContent } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

const FeatureSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  return (
    <div className="">
  <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-center bg-cover bg-no-repeat py-4 md:py-14 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), url(https://cdn.ipfsscan.io/ipfs/QmZgzRa9Zr7TyMk5BeotpGdkE9mj764t9Qsm59WLAG5FDx)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Image
              src="https://cdn.ipfsscan.io/ipfs/QmV8H6tKvXgaazZHExkD6h6WpFC7B4rFf9LDUZRWkGqRLh"
              alt="Feature image"
              width={500}
              height={300}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              不知道作业怎么写？不知道哪能下游戏？那就看这里
            </h2>
            <p className="text-gray-700 mb-8">
              都能给你解决，浇给~
            </p>
            <Button
        variant="solid"
        size="lg"
        onClick={handleOpenModal}
      >
        康一康
      </Button>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        isDismissable
        hideCloseButton={false}
      >
        <ModalContent>
          <ModalHeader>不好意思，你被骗了</ModalHeader>
          <ModalBody>
            <video className=" mx-auto border border-gray-300 shadow-2xl rounded-3xl dark:border-gray-700" controls="controls" autoplay="autoplay">
            <source src="https://file.dragonjay.top/d/Yitong/%E6%88%91%E7%9A%84%E6%96%87%E4%BB%B6%E5%A4%B9/video/%E5%A5%BD%E5%BA%B7%E7%9A%84.mp4?sign=qL4IpG5GGN9rBbxOx06OBM1n4gnTOI1SUyudAiA_ipo=:0" type="video/mp4" />
              </video>
            点一下菜单看看你需要的东西吧
          </ModalBody>
          <ModalFooter>
            <Button
              variant="solid"
              onClick={handleCloseModal}
            >
              知道了！
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </div>
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default FeatureSection;
