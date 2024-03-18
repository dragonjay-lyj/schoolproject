import {Accordion, AccordionItem} from "@nextui-org/react";

interface Repacks {
    defaultContent: string;
  }

const Repack: React.FC<Repacks> = ({ defaultContent }) => {
  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="整合包特色：" title="整合包特色：">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}

export default Repack;