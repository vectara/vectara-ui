import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiSpacer } from "../spacer/Spacer";

type Props = {
  columnCount: number;
  children: React.ReactNode;
};

export const VuiTableContent = ({ columnCount, children }: Props) => {
  return (
    <tr className="vuiTableRow--inert">
      <td className="vuiTableContent" colSpan={columnCount}>
        <VuiSpacer size="m" />

        <VuiFlexContainer justifyContent="center" alignItems="center" spacing="xs">
          {children}
        </VuiFlexContainer>

        <VuiSpacer size="m" />
      </td>
    </tr>
  );
};
