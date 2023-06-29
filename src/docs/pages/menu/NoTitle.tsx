import { VuiMenu, VuiMenuItem } from "../../../lib";

const items = [
  {
    text: `Tikka Masala is a traditional Indian dish made up of chicken that's been marinated in yogurt, charred and simmered in a rich, creamy tomato-based spiced sauce.`,
    onClick: () => alert("You clicked the Tikka Masala!")
  },
  {
    text: "This is a clickable Tikka Masala that will open an alert when clicked.",
    onClick: () => alert("You clicked the Clickable Tikka Masala!")
  },
  {
    text: "This is an inedible website. Visit it with a click.",
    href: "https://vectara.com"
  },
  {
    text: "An item without a title or any interactivity whatsoever.",
    onClick: () => alert("Excellent clicking!")
  }
];

export const NoTitle = () => {
  return (
    <VuiMenu>
      {items.map(({ text, onClick, href }) => (
        <VuiMenuItem key={text} text={text} onClick={onClick} href={href} />
      ))}
    </VuiMenu>
  );
};
