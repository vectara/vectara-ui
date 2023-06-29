import { VuiMenu, VuiMenuItem } from "../../../lib";

const items = [
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
    title: "Vectara.com",
    text: "This is an inedible website. Visit it with a click.",
    href: "https://vectara.com"
  },
  {
    title: "An item without a description",
    onClick: () => alert("Excellent clicking!")
  }
];

export const Menu = () => {
  return (
    <VuiMenu>
      {items.map(({ title, text, onClick, href }) => (
        <VuiMenuItem key={title} title={title} text={text} onClick={onClick} href={href} />
      ))}
    </VuiMenu>
  );
};
