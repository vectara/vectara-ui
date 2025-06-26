import { useState } from "react";
import { VuiBadge, VuiFlexContainer, VuiFlexItem } from "../../../lib";

export const DismissibleBadges = () => {
  const [badges, setBadges] = useState([
    { id: 1, text: "Caffeine-free", color: "primary" as const },
    { id: 2, text: "Freeze dried", color: "success" as const },
    { id: 3, text: "Gluten-free", color: "warning" as const },
    { id: 4, text: "High fiber", color: "accent" as const }
  ]);

  const removeBadge = (id: number) => {
    setBadges((prev) => prev.filter((badge) => badge.id !== id));
  };

  return (
    <VuiFlexContainer wrap>
      {badges.map((badge) => (
        <VuiFlexItem key={badge.id} grow={false}>
          <VuiBadge color={badge.color} onClose={() => removeBadge(badge.id)}>
            {badge.text}
          </VuiBadge>
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
