import { VuiSummary, VuiSummaryCitation } from "../../../lib";

const summary =
  "تم تقديم سماعة الواقع المختلط Vision Pro في حدث WWDC الأخير لشركة Apple [1]. تعتبر هذه السماعة أحدث ابتكار في مجال الأجهزة للشركة [1]. تم تصميمها لتجمع بين تقنيتي الواقع الافتراضي والواقع المعزز [6]. تهدف Apple من خلال الكشف عنها في حدث WWDC إلى تشجيع المطورين على بناء تطبيقات وتجارب لهذا المنتج [4]. تعتبر Vision Pro منتجًا ثوريًا يمكن أن يغير كيفية تفاعل المستخدمين مع التكنولوجيا والعالم من حولهم [1][6]. ومع ذلك، لا تزال التطبيقات والتجارب المتاحة محدودة [6]. من المقرر أن تكون السماعة متاحة للشراء في وقت مبكر من العام المقبل بسعر يبلغ 3[4]99 دولارًا [6].";

const SummaryCitation = ({ reference }: { reference: string }) => (
  <>
    {" "}
    <VuiSummaryCitation reference={reference} />
  </>
);

export const Rtl = () => {
  return <VuiSummary summary={summary} SummaryCitation={SummaryCitation} />;
};
