// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const navigate = useNavigate();

  const navigateAuth = () => {
    navigate("../Auth", { state: { mode: "login" } });
  };
  return (
    <Card className="p-[3rem] mx-[1rem] w-[30rem]">
      <CardHeader className="justify-center">
        <p className="text-xl font-thin text-center">
          Get started with 10 free org-chart credits. No credit card is needed.
        </p>
      </CardHeader>
      <CardBody className="gap-[1rem]">
        <Input type="text" label="Full Name" size="sm" variant="bordered" />
        <PhoneInput
          country="in"
          disableCountryCode
          containerClass="h-[3rem]"
          inputClass="min-w-[360px] min-h-[3rem]"
          placeholder="Mobile Number"
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
        />
        <Input type="email" label="Business Email" size="sm" variant="bordered" />
        <Input type="password" label="Password" size="sm" variant="bordered" />
      </CardBody>
      <CardFooter className="flex-col items-center gap-[1rem]">
        <Button color="primary" radius="full" size="lg" className="w-[10rem] font-bold my-[1rem]">
          Create account
        </Button>
        <div className="flex flex-col items-center gap-[0.3rem]">
          <p className="text-small text-default-500">
            Already registered? &nbsp;
            <span className="text-[blue] cursor-pointer" onClick={navigateAuth}>
              Log in instead
            </span>
          </p>
          <p className="text-xs text-default-500 text-center">
            Account lock: We discourage licence sharing. Your account will be accessible from this device only
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
