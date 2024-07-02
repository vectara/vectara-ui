import { VuiButtonSecondary, VuiSpacer, VuiText, VuiInfoList } from "../../../lib";

export const InfoList = () => {
  return (
    <VuiInfoList
      info={[
        { title: "Email", value: "email@email.com" },
        { title: "Account number", value: "1234567890" },
        {
          title: "Account size",
          value: (
            <>
              <VuiText>
                <p>22 MB</p>
              </VuiText>

              <VuiSpacer size="xs" />

              <VuiButtonSecondary size="xs" color="neutral">
                Refresh
              </VuiButtonSecondary>
            </>
          )
        }
      ]}
    />
  );
};
