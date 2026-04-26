import { VuiSteps, VuiStepProps } from "../../../lib";
import { BiUser, BiCog, BiCheck, BiPlanet, BiRocket, BiStar } from "react-icons/bi";
import { Subsection } from "../../components/Subsection";

export const CustomSteps = () => {
  const customIconSteps: VuiStepProps[] = [
    {
      title: "User Registration",
      subTitle: "Create your account",
      status: "complete",
      icon: <BiUser />
    },
    {
      title: "Configuration",
      subTitle: "Set up your preferences",
      status: "complete",
      icon: <BiCog />
    },
    {
      title: "Verification",
      subTitle: "Verify your email address",
      status: "current",
      icon: <BiCheck />
    },
    {
      title: "Explore Features",
      subTitle: "Discover what you can do",
      icon: <BiPlanet />
    },
    {
      title: "Launch Project",
      subTitle: "Start your first project",
      icon: <BiRocket />
    },
    {
      title: "Celebrate Success",
      subTitle: "You're all set!",
      icon: <BiStar />
    }
  ];

  return (
    <>
      <Subsection title="Custom icons">
        <VuiSteps steps={customIconSteps} />
      </Subsection>
    </>
  );
};
