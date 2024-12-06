import { useState } from "react";
import { BiAnalyse, BiListCheck, BiSolidFlask } from "react-icons/bi";
import {
  VuiAccordion,
  VuiButtonSecondary,
  VuiCallout,
  VuiIcon,
  VuiInfoTable,
  VuiSpacer,
  VuiText,
  VuiTimeline,
  VuiTimelineItem,
  VuiTitle
} from "../../../lib";

export const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    {
      name: "ingredient",
      render: "Ingredient"
    },
    {
      name: "amount",
      render: "Amount",
      width: "200px"
    }
  ];

  const rows = [
    {
      values: {
        ingredient: {
          render: (
            <VuiText>
              <p>Plutonium</p>
            </VuiText>
          )
        },
        amount: {
          render: (
            <VuiText>
              <p>4 grams</p>
            </VuiText>
          )
        }
      }
    },
    {
      values: {
        ingredient: {
          render: (
            <VuiText>
              <p>TGRI secret sauce</p>
            </VuiText>
          )
        },
        amount: {
          render: (
            <VuiText>
              <p>8.25 microliters</p>
            </VuiText>
          )
        }
      }
    },
    {
      values: {
        ingredient: {
          render: (
            <VuiText>
              <p>Corn starch</p>
            </VuiText>
          )
        },
        amount: {
          render: (
            <VuiText>
              <p>1 tbsp</p>
            </VuiText>
          )
        }
      }
    }
  ];

  return (
    <VuiTimeline>
      <VuiTimelineItem
        icon={
          <VuiIcon color="subdued">
            <BiListCheck />
          </VuiIcon>
        }
      >
        <VuiTitle size="l">
          <h2>Ingredients for making ooze</h2>
        </VuiTitle>
        <VuiSpacer size="s" />

        <VuiInfoTable columns={columns} rows={rows} padding="s" isHeaderVisible={true} />
      </VuiTimelineItem>

      <VuiTimelineItem
        icon={
          <VuiIcon color="subdued">
            <BiAnalyse />
          </VuiIcon>
        }
      >
        <VuiTitle size="m">
          <h2>How to prepare</h2>
        </VuiTitle>

        <VuiSpacer size="s" />

        <VuiAccordion header="Instructions" isOpen={isOpen} setIsOpen={setIsOpen}>
          <VuiSpacer size="s" />
          <VuiText>
            <ol>
              <li>Secure mutagens</li>
              <li>Put in beaker</li>
              <li>Shake thoroughly</li>
              <li>Do not drink!!</li>
              <li>Baste teenage ninja turtles lightly and let sit 20 minutes</li>
            </ol>
          </VuiText>
        </VuiAccordion>
      </VuiTimelineItem>

      <VuiTimelineItem
        icon={
          <VuiIcon color="subdued">
            <BiSolidFlask />
          </VuiIcon>
        }
      >
        <VuiCallout color="neutral" title="Outcome" headingElement="h2">
          <VuiText>
            <p>Mutated teenage ninja turtles.</p>
          </VuiText>

          <VuiSpacer size="m" />
          <VuiButtonSecondary color="primary">Deploy to sewers</VuiButtonSecondary>
        </VuiCallout>
      </VuiTimelineItem>
    </VuiTimeline>
  );
};
