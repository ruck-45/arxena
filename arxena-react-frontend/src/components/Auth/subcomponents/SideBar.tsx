// Depednencies
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

// Local Files
import "./SideBar.css";
import Profile from "../Assets/1549855774730.jpeg";

type SidebarProps = {
  className?: string;
};

const SideBar = (props: SidebarProps) => {
  const className = "SideBar min-w-[30%] flex justify-center items-center px-[1rem] " + props.className;
  return (
    <div className={className}>
      <Card className="max-w-[400px] bg-transparent" shadow="none">
        <CardHeader className="justify-center">
          <Image alt="profile" height={200} radius="full" src={Profile} width={200} className="profile" />
        </CardHeader>
        <CardBody>
          <FaQuoteLeft />
          <p className="text-center font-semibold italic">
            Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.
          </p>
          <FaQuoteRight className="self-end" />
        </CardBody>
        <CardFooter className="flex-col items-end">
          <p className="text-md font-semibold">Mannan Pacha</p>
          <p className="text-small text-default-500">Manager - Ernst & Young</p>
          <a href="https://www.linkedin.com/in/mannanpacha1988/" target="_blank">
            <BsLinkedin className="text-[1rem] cursor-pointer text-[#0A66C2] my-[1rem]" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideBar;
