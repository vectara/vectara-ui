import { useLocation, useNavigate } from "react-router-dom";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { VuiIconButton, VuiFlexContainer, VuiFlexItem, VuiIcon, VuiTitle, VuiAppContent, VuiSpacer } from "../lib";
import { Example as ExampleType, paths } from "./pages";
import { Example } from "./components/Example";
import React from "react";

export const Page = ({ name, examples }: { name: string; examples: ExampleType[] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPageIndex = paths.list.findIndex((page) => page.path === location.pathname);

  const navigateToPreviousPage = () => {
    const prevIndex = currentPageIndex === 0 ? paths.list.length - 1 : currentPageIndex - 1;
    navigate(paths.list[prevIndex].path);
  };

  const navigateToNextPage = () => {
    const nextIndex = currentPageIndex === paths.list.length - 1 ? 0 : currentPageIndex + 1;
    navigate(paths.list[nextIndex].path);
  };
  return (
    <VuiAppContent padding="l">
      <VuiFlexContainer alignItems="center" justifyContent="spaceBetween">
        <VuiFlexItem grow={false}>
          <VuiTitle size="m">
            <h2>{name}</h2>
          </VuiTitle>
        </VuiFlexItem>

        <VuiFlexItem>
          <VuiFlexContainer alignItems="center" spacing="xxs">
            <VuiFlexItem grow={false}>
              <VuiIconButton
                aria-label="Go to previous example"
                icon={
                  <VuiIcon>
                    <BiLeftArrowAlt />
                  </VuiIcon>
                }
                color="neutral"
                onClick={() => navigateToPreviousPage()}
              />
            </VuiFlexItem>

            <VuiFlexItem>
              <VuiIconButton
                aria-label="Go to next example"
                icon={
                  <VuiIcon>
                    <BiRightArrowAlt />
                  </VuiIcon>
                }
                color="neutral"
                onClick={() => navigateToNextPage()}
              />
            </VuiFlexItem>
          </VuiFlexContainer>
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <>
        {examples.map(({ name: exampleName, component, source }) => (
          <React.Fragment key={`example-${name}-${exampleName}`}>
            <Example name={exampleName} component={component} source={source} />
            <VuiSpacer size="l" />
          </React.Fragment>
        ))}
      </>
    </VuiAppContent>
  );
};
