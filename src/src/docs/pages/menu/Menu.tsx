import { BiError } from "react-icons/bi";
import { MenuItem, VuiFlexContainer, VuiFlexItem, VuiIcon, VuiMenu, VuiMenuItem } from "../../../lib";

const items: MenuItem[] = [
  {
    title: "Tikka Masala",
    text: `Tikka Masala is a traditional Indian dish made up of chicken that's been marinated in yogurt, charred and simmered in a rich, creamy tomato-based spiced sauce.`,
    onClick: () => alert("You clicked the Tikka Masala!")
  },
  {
    title: "Clickable Tikka Masala",
    text: "This is a clickable Tikka Masala that will open an alert when clicked.",
    onClick: () => alert("You clicked the Clickable Tikka Masala!")
  },
  {
    title: "Vectara.com in primary color",
    text: "This is an inedible website. Visit it with a click.",
    href: "https://vectara.com",
    color: "primary"
  },
  {
    title: "An item without a description",
    onClick: () => alert("Excellent clicking!")
  },
  {
    title: "This is a potentially dangerous action",
    text: (
      <VuiFlexContainer alignItems="center" spacing="xs">
        <VuiFlexItem grow={false}>
          <VuiIcon size="s" color="danger">
            <BiError />
          </VuiIcon>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>Read this warning text carefully before proceeding.</VuiFlexItem>
      </VuiFlexContainer>
    ),
    onClick: () => alert("Danger! Danger!"),
    color: "danger"
  }
];

export const Menu = () => {
  return (
    <VuiMenu>
      {items.map(({ title, text, onClick, href, color }) => (
        <VuiMenuItem key={title as string} title={title} text={text} onClick={onClick} href={href} color={color} />
      ))}
    </VuiMenu>
  );
};
