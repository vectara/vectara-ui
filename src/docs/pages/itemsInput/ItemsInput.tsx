import { VuiBadge, VuiItemsInput } from "../../../lib";

const items = [
  { value: "a", label: "Caffeine-free" },
  { value: "b", label: "Freeze dried" },
  { value: "c", label: "Gluten-free" },
  { value: "d", label: "Halal" },
  { value: "e", label: "High fiber" },
  { value: "f", label: "Kosher" },
  { value: "g", label: "Lactose-free" },
  { value: "h", label: "Low-carb" },
  { value: "i", label: "No nuts" },
  { value: "j", label: "Non-GMO" },
  { value: "k", label: "Sugar-free" },
  { value: "l", label: "Vegan" }
];

export const ItemsInput = () => {
  const renderItem = ({ label, value }: { label: string; value: string }) => {
    return (
      <VuiBadge key={value} color="primary">
        {label || value}
      </VuiBadge>
    );
  };

  return <VuiItemsInput renderItem={renderItem} items={items} fullWidth />;
};
