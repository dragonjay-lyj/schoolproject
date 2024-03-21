import { Avatar, AvatarGroup, User, Link, Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <AvatarGroup max={5} total={1} size="lg">
            <Avatar src="https://allsaintsstreet.com/assets/img/character/thumb-01_n.png" />
            <Avatar src="https://allsaintsstreet.com/assets/img/character/thumb-02_n.png" />
            <Avatar src="https://allsaintsstreet.com/assets/img/character/thumb-03_n.png" />
            <Avatar src="https://allsaintsstreet.com/assets/img/character/thumb-04_n.png" />
            <Avatar src="https://allsaintsstreet.com/assets/img/character/thumb-05_n.png" />
          </AvatarGroup>
        </div>
        <div className="mb-4 md:mb-0 gap-2">
          <a href="https://icp.gov.moe/?keyword=20240260" target="_blank">萌ICP备20240260号</a>
        </div>
        <div className="flex gap-3">
        <Button href="/" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--home-rounded]"></span>首页</Button>
        <Button href="/games" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--videogame-asset]"></span>游戏</Button>
        <Button href="/posts" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--workspace-premium-rounded]"></span>作业</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
