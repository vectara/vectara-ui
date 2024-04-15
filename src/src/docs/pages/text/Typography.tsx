import { VuiHorizontalRule, VuiLabel, VuiSpacer, VuiText, VuiTitle } from "../../../lib";

export const Typography = () => {
  return (
    <>
      <VuiTitle size="l">
        <h5>This is a typical page title, which might run long</h5>
      </VuiTitle>

      <VuiSpacer size="l" />

      <VuiHorizontalRule />

      <VuiSpacer size="l" />

      <VuiTitle size="m">
        <h5>Terse tab title</h5>
      </VuiTitle>

      <VuiSpacer size="m" />

      <VuiTitle size="s">
        <h5>Section subtitle</h5>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiText>
        <p>
          An astrolabe (Ancient Greek: ἀστρολάβος astrolábos; Arabic: ٱلأَسْطُرلاب al-Asṭurlāb; Persian: ستاره‌یاب
          Setāreyāb) is an ancient astronomical instrument that was a handheld model of the universe. Its various
          functions also make it an elaborate inclinometer and an analog calculation device capable of working out
          several kinds of problems in astronomy.
        </p>

        <p>
          In its simplest form it is a metal disc with a pattern of wires, cutouts, and perforations that allows a user
          to calculate astronomical positions precisely. Historically used by astronomers, it is able to measure the
          altitude above the horizon of a celestial body, day or night; it can be used to identify stars or planets, to
          determine local latitude given local time (and vice versa), to survey, or to triangulate. It was used in
          classical antiquity, the Islamic Golden Age, the European Middle Ages and the Age of Discovery for all these
          purposes.
        </p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiTitle size="s">
        <h5>Another section's subtitle</h5>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiLabel>Label for an important number</VuiLabel>

      <VuiText>
        <p>5</p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiLabel>Another important number's label</VuiLabel>

      <VuiText>
        <p>6,002</p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiTitle size="s">
        <h5>Last section</h5>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiTitle size="xs">
        <h6>At this level, the title looks like a label</h6>
      </VuiTitle>

      <VuiSpacer size="xxs" />

      <VuiText>
        <p>
          The astrolabe's importance comes not only from the early developments into the study of astronomy, but is also
          effective for determining latitude on land or calm seas. Although it is less reliable on the heaving deck of a
          ship in rough seas, the mariner's astrolabe was developed to solve that problem.
        </p>

        <p>
          In the medieval Islamic world the Arabic word al-Asturlāb (i.e., astrolabe) was given various etymologies. In
          Arabic texts, the word is translated as ākhidhu al-Nujūm (Arabic: آخِذُ ٱلنُّجُومْ, lit. "star-taker"), a
          direct translation of the Greek word.
        </p>
      </VuiText>
    </>
  );
};
