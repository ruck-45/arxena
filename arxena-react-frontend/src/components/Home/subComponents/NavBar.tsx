// Dependencies
import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const navigateAuth = (mode: string) => {
    navigate("../Auth", { state: { mode: mode } });
  };

  return (
    <Navbar position="static" maxWidth="full" className="px-[2rem] py-[1rem]">
      <NavbarContent justify="end" className="gap-[1.5rem]">
        <NavbarItem>
          <Button
            color="primary"
            variant="solid"
            radius="full"
            size="lg"
            className="w-[8rem] font-semibold"
            onClick={() => navigateAuth("signUp")}
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="bordered"
            radius="full"
            size="lg"
            className="w-[8rem] font-semibold"
            onClick={() => navigateAuth("login")}
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
