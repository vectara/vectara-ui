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
              really, really, super-duper, <code>ridiculously long</code> just so we can be sure the text wraps and you
              can get idea of the line-height.<sup>5</sup>
            </p>

            <blockquote>
              <p>
                A long paragraph of text that's inside a blockquote. This is to demonstrate how blockquotes look when
                used in conjunction with the VuiText component. The quick brown fox jumps over the lazy dog. The quick
                brown fox jumps over the lazy dog.
              </p>
            </blockquote>

            <hr />

            <p>
              Here's another paragraph with a <a href="#">link</a> in it.
            </p>

            <ul>
              <li>One potato</li>
              <li>Two potato</li>
              <li>Three potato</li>
              <li>Four</li>
            </ul>

            <ol>
              <li>Five potato</li>
              <li>Six potato</li>
              <li>Seven potato</li>
              <li>More</li>
            </ol>

            <p>
              <code>(code) doc.title='Vectara'</code>
            </p>

            <p>
              <pre>(pre) doc.title='Vectara'</pre>
            </p>

            <table>
              <thead>
                <tr>
                  <th> Line </th>
                  <th> Entry </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1 </td>
                  <td> A gull of memory crosses low, backlit and slow. </td>
                </tr>
                <tr>
                  <td> 2 </td>
                  <td> Quiet interest gathers on a breath I did not spend. </td>
                </tr>
                <tr>
                  <td> 3 </td>
                  <td> Moon counts the hours like coins within a tray. </td>
                </tr>
                <tr>
                  <td> 4 </td>
                  <td> I sign in trembling script: return by day. </td>
                </tr>
              </tbody>
            </table>
          </VuiText>

          <VuiSpacer size="m" />
        </>
      ))}
  </>
);
