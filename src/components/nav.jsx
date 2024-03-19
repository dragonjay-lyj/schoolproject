import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Avatar,
    Link, Button,
  } from "@nextui-org/react";
  import SearchComponent from "../components/Search";
  
  const MyNavbar = () => {
    return (
      <Navbar>
        <NavbarBrand>
          <Avatar src="https://cdn.ipfsscan.io/ipfs/QmQqXgZAbEZbegbGS3zpo99XozzqA5YNwNL1W5NPRvRHVS" alt="Logo" />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem><Button href="/" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--home-rounded]"></span>首页</Button></NavbarItem>
          <NavbarItem><Button href="/games" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--videogame-asset]"></span>游戏</Button></NavbarItem>
          <NavbarItem><Button href="/posts" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--workspace-premium-rounded]"></span>作业</Button></NavbarItem>
          <NavbarItem><Button href="/tucao" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--favorite-rounded]"></span>吐槽</Button></NavbarItem>
        </NavbarContent>
        <SearchComponent />
        <NavbarMenuToggle className=" lg:flex" aria-label="Menu" justify="end" />
        <NavbarMenu>
          <NavbarMenuItem><Button href="/" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--home-rounded]"></span>首页</Button></NavbarMenuItem>
          <NavbarMenuItem><Button href="/games" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--videogame-asset]"></span>游戏</Button></NavbarMenuItem>
          <NavbarMenuItem><Button href="/posts" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--workspace-premium-rounded]"></span>作业</Button></NavbarMenuItem>
          <NavbarMenuItem><Button href="/tucao" as={Link} color="foreground" isBlock className="text-white" ><span className="icon-[material-symbols--favorite-rounded]"></span>吐槽</Button></NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    );
  };
  
  export default MyNavbar;
  