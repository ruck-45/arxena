// Dependencies
import { Image, Input, Button } from "@nextui-org/react";
import { FaUpload } from "react-icons/fa";

// Local Files
import Logo from "../../../globalAssets/logo.svg";
import { SearchIcon } from "./SearchIcon";
import gptLogo from "../assets/powered_by_gpt4.png";

const BodyCard = () => {
  return (
    <div className="flex flex-col items-center h-[33rem] justify-center gap-[2rem]">
      <Image width={230} alt="Logo" src={Logo} />
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[32rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 p-[1.5rem]",
        }}
        placeholder="Search any company's org chart"
        size="sm"
        startContent={<SearchIcon />}
        endContent={
          <Button isIconOnly className="bg-transparent" aria-label="upload">
            <FaUpload className="cursor-pointer text-[#0A66C2]" />
          </Button>
        }
        type="search"
        radius="full"
      />
      <Image width={230} alt="gptLogo" src={gptLogo} className="mt-[1rem]" />
    </div>
  );
};

export default BodyCard;
