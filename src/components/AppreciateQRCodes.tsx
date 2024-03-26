import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import {Image} from "@nextui-org/react";

const AppreciateQRCodes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCopied, setIsCopied] = useState(false);

  return (
    <>
      <Button startContent={<span className="icon-[heroicons--qr-code]"></span>} onPress={onOpen}>
  赞赏
</Button>
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalContent className="bg-black rounded-lg shadow-md p-6">
    <ModalHeader className="text-lg font-medium leading-6 text-white">觉得可以的话，不妨赞赏一下我吧~ღ( ´･ᴗ･` )</ModalHeader>
    <ModalBody>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center space-y-2">
          <span>微信</span>
          <Image
            loading="lazy"
            width={300}
            alt="微信赞赏码"
            src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1711460449/dev/wxpf2f0-A3-Od-YPia-HEFVtuk-UAXWeru-XC50p0c-Sk-L6-N8o-LV5-DZio_webkuf.png"
          />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <span>支付宝</span>
          <Image
            loading="lazy"
            width={300}
            alt="支付宝赞赏码"
            src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1711460499/dev/httpsqr-alipay-comfkx10123ym1kfeinpuekk36_dbs0jc.png"
          />
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="danger" variant="light" onPress={onClose}>
        \(^o^)/~
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  );
};

export default AppreciateQRCodes;
