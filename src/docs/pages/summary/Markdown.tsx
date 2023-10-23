import { VuiSummary, VuiSummaryCitation } from "../../../lib";

const summary = `
# [1] Here's a heading 1

## [1] Here's a heading 2

### [1] Here's a heading 3

#### [1] Here's a heading 4

With some **bold** [2][3] and _emphasized_ [2][3] test. Here is a [link](https://www.vectara.com) [2][3].

* An [2][3]
* Unordered [2][3]
* List [2][3]

1. An [2][3]
1. Ordered [2][3]
1. List [2][3]

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title [2][3]       |
| Paragraph   | Text        |
`;

const SummaryCitation = ({ reference }: { reference: string }) => (
  <>
    {" "}
    <VuiSummaryCitation reference={reference} />
  </>
);

export const Markdown = () => {
  return <VuiSummary summary={summary} SummaryCitation={SummaryCitation} />;
};
