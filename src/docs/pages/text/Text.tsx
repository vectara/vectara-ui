import { VuiText, TEXT_SIZE, VuiSpacer } from "../../../lib";

export const Text = () => (
  <>
    {TEXT_SIZE.concat()
      .reverse()
      .map((size) => (
        <>
          <VuiText size={size} key={size}>
            <p>
              <strong>Demonstrating "{size}"-sized text.</strong>
            </p>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>
              Paragraph with some <strong>bold</strong> and <em>emphasized</em> words in it. Let's make this really,
              really, really, super-duper, ridiculously long just so we can be sure the text wraps and you can get idea
              of the line-height.
            </p>
            <p>
              Here's another paragraph with a <a href="#">link</a> in it.
            </p>
          </VuiText>

          <VuiSpacer size="m" />
        </>
      ))}
  </>
);
