import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { VuiLink } from "./Link";
describe("VuiLink", () => {
    describe("track", () => {
        it("allows referrer information when true", () => {
            const { asFragment } = render(_jsx(VuiLink, Object.assign({ href: "https://www.vectara.com", track: true }, { children: "Link" })), { wrapper: MemoryRouter });
            expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <a
            class="vuiLink"
            href="https://www.vectara.com"
            referrerpolicy="no-referrer-when-downgrade"
            rel="noopener"
          >
            Link
          </a>
        </DocumentFragment>
      `);
        });
        it("disallows referrer information when false (default)", () => {
            const { asFragment } = render(_jsx(VuiLink, Object.assign({ href: "https://www.vectara.com" }, { children: "Link" })), { wrapper: MemoryRouter });
            expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <a
            class="vuiLink"
            href="https://www.vectara.com"
            rel="noopener"
          >
            Link
          </a>
        </DocumentFragment>
      `);
        });
    });
});
