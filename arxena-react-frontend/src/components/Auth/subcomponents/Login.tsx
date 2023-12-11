// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateAuth = () => {
    navigate("../Auth", { state: { mode: "signUp" } });
  };

  return (
    <Card className="p-[3rem] mx-[1rem] w-[30rem]">
      <CardHeader className="justify-center">
        <p className="text-xl font-thin">Welcome back!</p>
      </CardHeader>
      <CardBody className="gap-[1rem]">
        <Input type="email" label="Email" size="sm" variant="bordered"/>
        <Input type="password" label="Password" size="sm" variant="bordered" />
      </CardBody>
      <CardFooter className="flex-col items-center gap-[1rem]">
        <Button color="primary" radius="full" size="lg" className="w-[8rem] font-bold my-[1rem]">
          Log in
        </Button>
        <div className="flex flex-col items-center gap-[0.1rem]">
          <p className="text-small text-default-500">
            Forgot your password? &nbsp;
            <a href="" className="text-[blue]">
              Reset it here
            </a>
          </p>
          <p className="text-small text-default-500">
            Need an account? &nbsp;
            <span className="text-[blue] cursor-pointer" onClick={navigateAuth}>
              Sign up for free
            </span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Login;
