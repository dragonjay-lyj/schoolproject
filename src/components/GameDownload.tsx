import React, { useState } from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';

interface FileData {
  name: string;
  type: string;
  size: string;
  downloadUrl: string;
}

const DownloadButton: React.FC<{ file: FileData }> = ({ file }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
    // 在实际项目中，可以通过监听modal打开状态来决定何时触发下载动作
    // 下面的setTimeout仅作为模拟下载前显示modal的简单示例
    setTimeout(() => {
      window.open(file.downloadUrl, '_blank');
    }, 200); // Open download link after a small delay to ensure modal appears first
  };

  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <Button variant="solid" color="primary" onClick={handleClick}>
        下载文件
      </Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} isKeyboardDismissDisabled>
        <ModalContent>
          <ModalHeader>{file.name}</ModalHeader>
          <ModalBody>
            <div>
              类型: <strong>{file.type}</strong>
            </div>
            <div>
              大小: <strong>{file.size}</strong>
            </div>
          </ModalBody>
          <ModalFooter>
            <p>下载已经开始，请查看浏览器的新标签页或下载列表，种子下载完后请用迅雷下载全部文件</p>
            {/* Optionally add a close button here if desired */}
            {/* <Button auto variant="flat" onClick={handleCloseModal}>关闭</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DownloadButton;