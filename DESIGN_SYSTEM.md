# Vectara UI Design System Reference

A reference document for generating pixel-perfect, high-fidelity designs that match VUI's React component library. All values reflect the codebase as of branch `main` (commit 919d72e).

The library exports under `@vectara/vectara-ui` and all components are prefixed `Vui`. CSS class names follow the same convention (e.g. `.vuiButtonPrimary`, `.vuiBadge--accent`).

---

## 1. Design Tokens

### 1.1 Color tokens

All colors are exposed as CSS variables on `:root` once `VuiContextProvider` mounts. JS values are also accessible via `LIGHT_THEME` / `DARK_THEME` exports from `src/lib/components/context/Theme.ts`.

#### Source brand colors (base hex)

| Token | Hex | Notes |
|---|---|---|
| `colorAccent` | `#5f30c3` | Purple — used for callouts, secondary highlights |
| `colorPrimary` | `#045dda` | Vectara blue — primary buttons, links, selection |
| `colorSuccess` | `#249719` | Green — confirmations, complete steps |
| `colorWarning` | `#a86f1b` | Amber — non-blocking caution |
| `colorDanger` | `#d22d2d` | Red — errors, destructive |

#### Semantic color triplet (shade / light / lighter)

Every semantic color exposes 3 variants. `light` = 50% alpha of base. `lighter` = a tinted near-white background.

| Semantic | `*-shade` | `*-light-shade` (rgba) | `*-lighter-shade` |
|---|---|---|---|
| accent | `#5f30c3` | `rgba(95,48,195,0.5)` | `#eee7ff` |
| primary | `#045dda` | `rgba(4,93,218,0.5)` | `#f1f7ff` |
| success | `#249719` | `rgba(36,151,25,0.5)` | `#e2f2e0` |
| warning | `#a86f1b` | `rgba(168,111,27,0.5)` | `#ffeed4` |
| danger | `#d22d2d` | `rgba(210,45,45,0.5)` | `#fff1f1` |

CSS variables follow the pattern `--vui-color-{semantic}-{shade|light-shade|lighter-shade}` plus an RGB triplet form `--vui-color-{name}-rgb` (e.g. `--vui-color-primary-shade-rgb: 4, 93, 218`) for use inside `rgba()`.

#### Special colors

| Token | Hex | Use |
|---|---|---|
| `colorPrimaryHighlight` | `#d9e2ff` | Selection backgrounds, focus rings |
| `colorSubdued` | `#6d7686` | Muted text, secondary labels |

#### Neutral scale (light theme)

| Token | Hex | Typical role |
|---|---|---|
| `colorEmptyShade` | `#ffffff` | Surfaces, card / input background |
| `colorLightShade` | `#f1f4f6` | Panel background, hover background, code block bg |
| `colorMediumShade` | `#cbd1de` | Default form border |
| `colorDarkShade` | `#3f4551` | Dark text alt |
| `colorDarkerShade` | `#1c1d22` | Primary text, label color |
| `colorFullShade` | `#0b0c0e` | Strongest neutral (≈ black) |

#### Text & border

| Token | Light value | Dark value |
|---|---|---|
| `colorText` | `#1c1d22` (darker-shade) | `#f1f4f6` (light-shade) |
| `colorLabel` | `#1c1d22` | `#f1f4f6` |
| `colorBorderLight` | `#e3e4f3` | `#323338` |
| `colorBorderMedium` | `#cbd1de` (medium-shade) | `#3f4551` (dark-shade) |

#### Dark theme

`DARK_THEME` inverts the neutral scale: `empty ↔ full`, `light ↔ darker`, `medium ↔ dark`. Brand colors stay the same. Selection / highlight use the same `colorPrimaryHighlightShade`.

### 1.2 Spacing scale

A single 8-multiple scale that controls padding, margins, gaps, and component heights.

| Token | Value |
|---|---|
| `$sizeXxxs` | `2px` |
| `$sizeXxs` | `4px` |
| `$sizeXs` | `8px` |
| `$sizeS` | `12px` |
| `$sizeM` | `16px` (base `$size`) |
| `$sizeL` | `24px` |
| `$sizeXl` | `32px` |
| `$sizeXxl` | `40px` |

VuiSpacer + VuiFlexContainer `spacing` accept `xxxs|xxs|xs|s|m|l|xl|xxl`. Use the matching size in mockups.

### 1.3 Typography

Font families (CSS vars `--vui-font-family`, `--vui-font-family-monospace`):

- **Sans (body / UI)**: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
- **Monospace (code)**: `"Roboto Mono", monospace`

Font sizes:

| Token | Value |
|---|---|
| `$fontSizeXsmall` | `10px` |
| `$fontSizeSmall` | `12px` |
| `$fontSizeStandard` | `14px` *(body default)* |
| `$fontSizeMedium` | `16px` |
| `$fontSizeLarge` | `18px` |
| `$fontSizeXLarge` | `24px` |
| `$fontSizeXxLarge` | `30px` |
| `$fontSizeXxxLarge` | `40px` |

Font weights:

| Token | Value |
|---|---|
| `$fontWeightLight` | 300 |
| `$fontWeightNormal` | 400 |
| `$fontWeightStrong` | 500 |
| `$fontWeightBold` | 600 *(also `$labelFontWeight`)* |
| `$fontWeightHeavy` | 800 |

Body `<body>` defaults to `font-size: 14px`. `line-height: 1.4` for text sizes; `1.2–1.3` for titles.

### 1.4 Title scale (`VuiTitle`)

| size | font-size | line-height | weight | role |
|---|---|---|---|---|
| `xxs` | 12px | 1.4 | 600 | tiny eyebrow / stat label |
| `xs` | 14px | 1.4 | 600 (label weight) | form label, list group title |
| `s` | 18px | 1.3 | 400 | card title |
| `m` | 24px | 1.2 | 400 | section title |
| `l` | 30px | 1.1 | 500 | page title |
| `xl` | 40px | 1.0 | 500 | hero |
| `xxl` | 40px | 1.0 | 500 | hero (alias) |

### 1.5 Text scale (`VuiText`)

| size | font-size | h1 | h2 | h3 | h4–h6 |
|---|---|---|---|---|---|
| `xs` | 12px | 24 | 18 | 15 | 12 / 10 / 9 |
| `s` *(default)* | 14px | 28 | 21 | 17.5 | 14 / ~12 / 10.5 |
| `m` | 16px | 32 | 24 | 20 | 16 / ~13.6 / 12 |
| `l` | 18px | 36 | 27 | 22.5 | 18 / ~15.3 / 13.5 |

VuiText also supports `align: left|center|right`, `truncate`, `preserveWhiteSpace`.

### 1.6 Border radius (no central scale — observe these patterns)

| Radius | Used by |
|---|---|
| `2px` | Modal, Popover, Code block, Callout, SummaryCitation chip |
| `4px` ($sizeXxs) | Buttons, inputs, textarea, AppSideNavLink, AppSideNavLink, tabs, accordion, day cells |
| `6px` | MenuListButton, SideListButton (px — not from token scale) |
| `8px` ($sizeXs) | Panel, Card, SimpleCard, TopicButton, ComplexConfigurationButton, AccountButton, SuperCheckbox, SearchInput, InfoMenu container |
| `10px` | Toggle (pill) |
| `12px` | Notification, Badge (s/m), ProgressBar |
| `16px` | Prompt bubble |
| `24px` | Badge l, List number circle |
| `50% / 100%` | Step circle, Timeline icon dot |

### 1.7 Shadows

Two stepped shadow pairs designed for animated transitions:

```
$shadowSmallStart: rgba(60,64,67,0.3)  0 0 0 0,  rgba(60,64,67,0.15) 0 0 0 0;
$shadowSmallEnd:   rgba(60,64,67,0.3)  0 1 2 0,  rgba(60,64,67,0.15) 0 2 6 2;

$shadowLargeStart: rgba(50,50,93,0.25) 0 0 0 0,  rgba(0,0,0,0.16)    0 1 4 0;
$shadowLargeEnd:   rgba(50,50,93,0.25) 0 6 12 -2,rgba(0,0,0,0.3)     0 3 7 -3;
```

Usage:
- **Small (start → end)**: buttons, search input, table rows hover.
- **Large (start → end)**: TopicButton, Notification, Popover, Modal.

### 1.8 Z-index layers

| Layer | z-index |
|---|---|
| App header | 8 |
| Chat | 9 |
| Screen block (overlay) | 10 |
| Drawer | 11 |
| Modal | 12 |
| Fullscreen (Code preview) | 13 |
| Popover (raised so it can live in modals) | 14 |
| Notifications | 1000 |
| Tooltip | 2000 |

### 1.9 Motion

| Token | Value |
|---|---|
| `$transitionSpeed` | `0.2s` |
| Hover/state transitions | `all 0.2s` |
| Popover open | `transform 200ms, opacity 200ms`, eased `cubic-bezier(0, 1, 0, 1)` |
| Drawer slide | `right 0.2s cubic-bezier(0, 1, 0, 1)` |
| Modal | `transform 0.2s cubic-bezier(0, 1, 1, 1), opacity 0.2s` |
| Skeleton shimmer | `2s ease-in-out infinite` |
| Spinner | `0.6s linear infinite` (360° rotate) |

### 1.10 Focus ring

Global, applied via `:focus-visible`:

```scss
:focus-visible {
  outline: var(--vui-color-primary-shade) auto 2px;
  outline-offset: 2px;
}
```

Always render a focusable element's keyboard focus state as a 2px primary-blue outline offset by 2px.

### 1.11 App chrome dimensions

| Token | Value |
|---|---|
| `$appHeaderHeight` | `46px` |
| `$appSideNavWidth` | `200px` |
| `$appSideNavWidthCollapsed` | `60px` |
| `$appSideNavLinkSpacing` | `6px` (= `$sizeXxs + 2px`) |

### 1.12 Reset / global rules

`_reset.scss` zeros out margins, paddings, borders; sets `box-sizing: border-box`; strips list bullets; collapses table borders; sets `body { font-size: 14px }`.

---

## 2. Component Catalog

> Every component below is exported from `@vectara/vectara-ui`. Listed groupings are illustrative; in code they all live in `src/lib/components/`.

### 2.1 Buttons & actions

#### VuiButtonPrimary / Secondary / Tertiary

Shared `BaseButton` underpins all three with these size/height knobs:

| size | font-size | padding | height |
|---|---|---|---|
| `xs` | 12px | `4px 8px` | **24px** |
| `s` | 14px | `6px 8px` | **28px** |
| `m` *(default)* | 14px | `8px 16px` | **34px** |
| `l` | 16px | `12px 24px` | **47px** |

- **Border radius**: 4px on all sizes.
- **Box shadow**: `$shadowSmallStart` default → `$shadowSmallEnd` on hover (primary/secondary).
- **Icon spacing**: `8px` between icon and label; `iconSide: 'left' | 'right'`.
- **States**: `isDisabled` → opacity 0.5, pointer-events none; `isSelected` → inset shadow (primary) / inset light shadow (secondary) / tinted background 10% (tertiary); `isLoading` swaps icon slot for VuiSpinner.

Color choices (`BUTTON_COLOR`): `accent | primary | success | danger | warning | neutral | subdued`.

| Variant | Fill | Text |
|---|---|---|
| **Primary** | solid semantic background (or `#fff` for neutral; rgba subdued 0.1 for subdued) | white (or `--vui-color-text` for neutral; subdued for subdued) |
| **Secondary** | transparent background; 1px border `rgba(semantic, 0.5)` (or border-medium/border-light for neutral/subdued) | semantic color (or text/subdued for neutrals) |
| **Tertiary** | transparent; underline on hover; selected = 10% semantic bg | semantic color |

#### VuiIconButton

Square button with only an icon. Same height token table as buttons (xs/s/m → 24/28/34). Padding is symmetric: `4px / 6px / 8px`. Background transparent; hover and `isSelected` use `rgba(semantic, 0.1)`. Always wrap with a `VuiTooltip` populated from `aria-label`.

#### VuiCopyButton

Wraps `VuiButtonSecondary` (single value) or `VuiOptionsButton` (multi-target). Icon swaps from clipboard → check (success color) for **2.4s** after copy, then reverts. Inherits sizes from button.

#### VuiComplexConfigurationButton

Full-width "tile" button used for editing settings.
- Padding `12px 16px`, border-radius 8px, 1px `--vui-color-primary-highlight-shade` border.
- Hover: border shifts to `--vui-color-primary-shade`, shadow goes `$shadowLargeEnd`.
- Content: leading icon (default `BiPencil`, primary color), title (bold) + description + optional footer.

#### VuiOptionsButton

Split button: a `VuiButtonPrimary`/`Secondary` action button + a caret-down trigger sharing the same color. Caret button uses 0 left border-radius and a divider border. Caret toggles a `VuiPopover` containing a `VuiOptionsList`. Sizes inherit from `BUTTON_SIZE`.

#### VuiTopicButton

Card-like CTA used for recommended topics / examples.
- `padding: 16px 24px`, `border-radius: 8px`, `text-align: left`, background `--vui-color-empty-shade`.
- Default shadow `$shadowLargeStart`; hover adds 1px primary outline + `$shadowLargeEnd`.
- Composes `VuiTitle` (primary color) + body.

#### VuiAccountButton

Dropdown pill in the app header showing user identity.
- Padding `4px 16px`, border-radius 8px, max-width 280px.
- 1px transparent border → `--vui-color-medium-shade` border on hover / open.
- Composes a primary label (bold), secondary label (smaller, ellipsis), and a `BiChevronDown` icon. Toggles a `VuiInfoMenu`.

#### VuiLink / VuiLinkInternal

Inline anchor. Always `--vui-color-primary-shade` (`!important`). No underline at rest; underline on hover. `VuiLinkInternal` routes through the context's `linkProvider` (typically react-router); `VuiLink` always renders a native `<a>` (used for downloads/external).

---

### 2.2 Form elements

All "single-line" inputs share a visual baseline:
- 4px border-radius, 1px `--vui-color-medium-shade` border, white background.
- Heights: **`s` ≈ 28px**, **`m` ≈ 34px** (default), **`l` ≈ 42–48px** depending on padding.
- Invalid: border-color shifts to `--vui-color-danger-shade`.
- Focus: 2px primary outline at 2px offset (via global `:focus-visible`).
- Disabled inputs render at full opacity (iOS quirk) but lose interactivity.

#### VuiTextInput / VuiNumberInput / VuiPasswordInput

| size | padding | font-size |
|---|---|---|
| `s` | `6px 12px` | 12px |
| `m` *(default)* | `8px 16px` | 14px |
| `l` | `12px 16px` | 18px |

Props: `value`, `onChange`, `isInvalid`, `fullWidth`, `placeholder`, `maxLength`. NumberInput adds `min`, `max`, `step`, `allowUndefined`. PasswordInput adds `isPasswordVisible` toggle.

#### VuiTextArea

Single size. `min-height: 80px`, `padding: 12px`. Optional `resizable` (`resize: vertical`), and `autoGrow` (`min-height: 0; max-height: 12rem; line-height: 1.6`). Invalid border = danger.

#### VuiSelect

Native `<select>` styled with our chrome plus an absolutely positioned `BiCaretDown` icon at the right.

| size | padding (with right-room for caret) | font-size |
|---|---|---|
| `s` | `4px 12px` with 36px right-padding | 12px |
| `m` | `8px 16px` with 40px right-padding | 14px |
| `l` | `12px 16px` with 48px right-padding | 18px |

Container `max-width: 240px`. Invalid border = danger.

#### VuiCheckbox / VuiRadioButton

Native control. If `label` provided, wrapped in a `VuiFlexContainer` with `8px` spacing. Label text is `fontSizeStandard` (14px). Focus uses native `:focus-visible`.

#### VuiSuperCheckbox / VuiSuperRadioButton (and `*Group` wrappers)

Choice cards used for big decisions (preferred over plain checkboxes when each option needs a description).
- Full-width clickable label, padding `12px 24px`, border-radius 8px.
- Hover: background `--vui-color-primary-lighter-shade`, text → primary shade, underline.
- Composition: native checkbox/radio + `VuiText` label + optional `VuiText size="xs"` description in subdued color.
- The `*Group` wrappers render the list as `display: grid` (single column).

#### VuiItemsInput

Container for chip / tag inputs. `display: inline-block; cursor: text;` Renders items via `renderItem`. Optional clear-all button (`VuiIconButton`, `BiX`). Focus: outline 2px primary at 2px offset. `fullWidth` is supported.

#### VuiLabel

Form label. `s` (14px, weight 600) is default; `xs` (12px, weight 600) for compact forms. Uses `--vui-color-label`.

#### VuiCodeEditor

Monaco editor with VUI chrome.
- 4px border-radius, 1px `--vui-color-border-medium` border.
- Font-size 12px monospace, padding `12px` (right padding 0), `lineNumbers: off`, `wordWrap: on`, `glyphMargin: off`.
- Default `height: 300px`; `resizable` enables vertical resize.
- Custom theme registered as `vectaraEditor`; `colorConfig` lets you map syntax tokens to colors.
- Placeholder rendered absolutely at top-left in `#999999`.
- Supports ANTLR-based syntax error markers and a hint line under the editor for `completionItemProvider`.

#### VuiFormGroup

Composition wrapper: optional `label` (clone of `VuiLabel`) → optional `helpText` (subdued `VuiText size="xs"`) → optional `errors[]` (danger `VuiText size="xs"`) → child input. Vertical rhythm: `s` label uses `xs` spacing (8px); `xs` label uses `xxs` (4px). Automatically clones `isInvalid`, `aria-describedby`, and `required` onto supported children.

#### VuiToggle

Pill-shaped switch. Track 36px × 20px, border-radius 10px, inner dot 10px circle (white). Off background = `--vui-color-medium-shade`. On background = `--vui-color-primary-shade`. Slides via translate transition. Focus outline 2px primary at 75% alpha.

#### VuiSearchInput

| size | padding | search-icon offset |
|---|---|---|
| `s` | `4.8px 12px 4.8px 28px` | top 6.375px |
| `m` *(default)* | `8px 16px 8px 32px` | top 9px |
| `l` | `12px 16px 12px 32px` | top 13px |

- 1px `--vui-color-medium-shade` border, 8px border-radius, `$shadowSmallStart` default → `$shadowSmallEnd` on focus.
- Leading `BiSearch` icon (or `VuiSpinner` while loading). Optional clear `VuiIconButton`.
- Suggestion popover squares off the bottom border-radius when open.
- Ghost-text overlay (extension of the first suggestion) rendered in subdued color.

#### VuiSearchSelect

Searchable list rendered inside a `VuiPopover`. Trigger element is your own button. Body = `VuiTextInput` (search) + `VuiOptionsList` (results) or empty-state `VuiText`. Async search and lazy-load callbacks are supported. Multi-select default; pass `isMultiSelect={false}` for single.

#### VuiDatePicker

Wraps react-datepicker.
- Inline (`isInline`) or popover via a `VuiTextInput` trigger.
- Day cells: 32px × 32px (`$sizeXl`), 1px margin, hover 4px border-radius.
- Selected / in-range day: background `--vui-color-primary-shade`, text `--vui-color-empty-shade`.
- Hover background: `--vui-color-light-shade`.
- `showTimeSelect`, `timeIntervals`, `minDate`, `maxDate`, `filterDate` all supported.

#### VuiDateRangePicker

Same calendar styling as VuiDatePicker, but allows start/end selection. Default trigger `VuiTextInput` has `min-width: 340px`. Selected range fills with primary background between start/end days. Start defaults to 00:00:00, end to 23:59:59.

---

### 2.3 Layout & containers

#### VuiAppLayout

`display: flex; flex-direction: row; height: 100vh; padding-top: 46px;` (unless `full` is set). Hosts `VuiAppHeader`, optional `VuiAppSideNav`, and main content.

#### VuiAppHeader

`position: fixed; top: 0; height: 46px; width: 100vw; padding: 8px 16px; background: --vui-color-empty-shade; border-bottom: 1px --vui-color-border-medium; z-index: 8.` Slots: `left`, `right`, or `content`. `darkTheme` swaps the colors.

#### VuiAppContent

Centered max-width container.

| padding | block | inline |
|---|---|---|
| `none` | 0 | 0 |
| `xs` | 8px | 10px |
| `s` | 12px | 15px |
| `m` | 16px | 20px |
| `l` | 24px | 30px |
| `xl` | 32px | 40px |

`max-width: 1200px` unless `fullWidth`.

#### VuiAppSideNav / Link / Group

- Sidebar: width 200px → 60px when collapsed, transition `all 0.2s`.
- Size `m`: padding `28px 32px 32px 33px`. Size `l`: `4px 8px 0`.
- `VuiAppSideNavLink`: border-radius 4px, hover/active background `--vui-color-light-shade`. Icons before/after; `iconAfterAlignEnd` pushes the trailing icon to the right.
- `VuiAppSideNavGroup`: title + 4px spacer + children.

#### VuiFlexContainer

Flex primitive.
- `direction`: `row | column | rowReverse | columnReverse`
- `alignItems`: `baseline | center | end | start | stretch`
- `justifyContent`: `center | end | start | spaceAround | spaceBetween | spaceEvenly`
- `spacing` (gap, identical to spacing tokens): `none | xxxs | xxs | xs | s | m | l | xl | xxl`
- `wrap`, `inline`, `fullWidth`.

#### VuiFlexItem

`display: flex; flex-direction: column; min-width: 0;`. Props: `grow (0–10|bool)`, `shrink (0–10|bool)`, `basis (auto|content|fill|maxContent|minContent|none)`, `alignItems`, `truncate`.

#### VuiGrid / VuiGridItem / VuiSimpleGrid

- `VuiGrid`: `columns 1–4` plus `templateColumns` / `templateRows`. Spacing identical to flex.
- Responsive breakpoints (mobile-first): `sm 0px+`, `md 500px+`, `lg 800px+`. Cascade inherits to larger sizes if unset.
- `VuiGridItem`: `colSpan/rowSpan 1–12`, optional `colStart/colEnd/rowStart/rowEnd`, `alignSelf`, `justifySelf`, `area`.
- `VuiSimpleGrid`: auto-wrapping via `minChildWidth` (CSS `repeat(auto-fit, minmax(...))`) or a column count.

#### VuiSpacer

Pure vertical gap with `size: xxxs..xxl` mapping to the spacing tokens (2–40px).

#### VuiPanel

`display: flex; flex-direction: column; border-radius: 8px; padding: 24px; gap: 16px; overflow: hidden.` Optional `icon`, `actions`, `background` image (with `backgroundScale: width | height`). `color: default | transparent` (default fills `--vui-color-light-shade`). `fullHeight`, `fullWidth`.

#### VuiCard

Structured card.
- Border-radius 8px, `overflow: hidden`, transition `box-shadow 0.2s`.
- `type: full` (background light-shade) or `outlined` (background empty-shade + 1px border-light).
- `padding: xxs..l` controls header and body padding (xxs ≈ `8px 12px`, l ≈ `32px 40px`).
- Interactive variant: hover shadow, optional `href`.
- Expandable: forces `outlined`; toggle button + chevron.

#### VuiSimpleCard

Lightweight card. `border-radius: 8px; background: --vui-color-empty-shade; border: 1px --vui-color-border-light;`. Renders as link (`href`), button (`onClick`), or div. `padding: xxs..l`. Border color shifts to danger/warning on `error`/`warning` props.

#### VuiDrawer

Right-side slide-in.
- `position: fixed; top/right/bottom 0; width: min(100%, 680px); right: -680px → 0 transition.`
- 1px `--vui-color-border-medium` left border.
- z-index 11.
- Title heading element configured by `VuiContextProvider` `drawerTitle` (default `h2`).
- `color: primary | danger` controls accent/icon color.
- Layout: header (icon, title, close) → scrollable body (`overflow-y: auto`) → optional footer.

#### VuiModal

Centered dialog.
- `size: s` (500px), `m` (900px), `l` (1300px). Below `modal-width + 64px` viewport, falls back to `width: calc(100% - 48px)`.
- `border-radius: 4px`, deep shadow (`rgba(57,57,75,0.25) 0 13px 27px -5px, rgba(0,0,0,0.3) 0 8px 16px -8px`), z-index 12.
- Transition `transform 0.2s cubic-bezier(0,1,1,1)`, `opacity 0.2s`.
- `color: primary | danger` shapes the header.
- `canClickOutsideToClose` toggles backdrop dismissal.

#### VuiScreenBlock

Full-screen mask used behind drawers/modals/code fullscreen.
- `position: fixed; inset: 0; display: flex; align-items: center; justify-content: center.`
- Color: `neutral` = `rgba(0,0,0,0.4)`, `primary | danger | success` = same color at `0.6`.
- z-index 10 (default) or 12 (modal).
- Hidden via opacity / pointer-events transition.

#### VuiHorizontalRule

A 1px bottom border line spanning the full width. Color variants map to `--vui-color-{accent|primary|success|danger|warning|neutral|subdued}-shade` plus border tokens.

#### VuiPortal

React portal to the configured `portalContainer` (defaults to `document.body`).

---

### 2.4 Navigation

#### VuiTabs / VuiTab

- `tabStyle: open` (default — underline tabs, `padding: 8px 16px`, bottom border 1px) or `enclosed` (chip tabs, `padding: 2px 8px`, container background light-shade, border-radius 4px).
- `size: s` (14px) or `m` (16px).
- Hover: text becomes primary, background primary-lighter.
- Active: background `--vui-color-light-shade` + bottom border 1px `--vui-color-medium-shade`.
- `vertical`, `fullWidth`, and `append` (right-aligned slot) supported.

#### VuiTabbedRoutes

Tabs + active-route resolution + content area + optional `sideContent`. Internally renders `<VuiTabs>` + 16px spacer + body.

#### VuiTabsNavigator

Popover-based tab navigator for narrow widths.
- Trigger button: `font-size: 14px; padding: 6px 8px; background: --vui-color-light-shade;`. Hover shadow.
- Body uses vertical enclosed tabs.

#### VuiSteps / VuiStep

Horizontal progress.
- `size: xs` (14px circle), `s` (28px — default), `m` (36px circle).
- Connector: 2px line between steps; dotted while incomplete, solid once complete (color `--vui-color-medium-shade`).
- Per-status circle treatment:

| status | bg | border | text |
|---|---|---|---|
| `incomplete` | empty-shade | 1px light border | subdued |
| `current` | empty | 2px primary border + 2px ring | primary (bold) |
| `complete` | success-lighter | success border | success |
| `warning` | warning-lighter | warning border | warning |
| `danger` | danger-lighter | danger border | danger |

#### VuiStepsVertical

Vertical version built on `VuiMenuList`.
- 2px gap between buttons.
- Active step uses primary-tinted background; hover uses lighter gray (#f3f4f6).
- Errors render an appended `BiError` icon in danger color.

#### VuiMenu / VuiMenuItem

Bordered container for menu items.
- `VuiMenu`: 1px `--vui-color-medium-shade` border, 8px border-radius, `overflow: hidden`. `noBorder` removes the border (used inside popovers).
- `VuiMenuItem`: width 100%, text-align left; padding `12px 24px` (bordered) or `12px 16px` (borderless). Title = 16px medium; text = 12px subdued.
- Color: `neutral | primary | danger`. Hover sets background `--vui-color-{color}-lighter-shade` and text color to the matching shade.

#### VuiMenuList / VuiMenuListButton (and VuiSideList / VuiSideListButton)

Vertical list of compact buttons (used inside drawers, accordions, and side navs).
- List: `<ul>` with 2px gap, padding/margin 0, no bullets.
- Button: `padding: 6px 8px; border-radius: 6px; font-size: 13px; line-height: 1.3; display: inline-flex; gap: 8px; width: 100%.`
- Hover: background `#f3f4f6`, text `#111827`.
- Active: background `rgba(37, 99, 235, 0.08)`, text `#1d4ed8`.
- Disabled (MenuListButton only): text `#9ca3af`, `cursor: not-allowed`.
- Each accepts an optional leading `icon` and trailing `append` slot.
- `VuiSideList*` is the visual twin used as a left-rail nav inside content panes; functionally identical.

#### VuiInfoMenu

`VuiPopover` whose header renders a `VuiInfoList`. Min-width 260px; header `padding: 16px` with 1px bottom border. Body slot for arbitrary children (e.g. `VuiOptionsList`).

#### VuiPagination

`VuiButtonTertiary` (size `s`) for Previous/Next plus per-page buttons. Current page is `color="primary"` and inert; others are neutral. `"..."` tokens have `padding: 0 8px`.

#### VuiAccordion

- Header: `padding: 8px 12px`, font 12px bold, leading chevron icon. Hover: text primary, background `--vui-color-primary-lighter-shade`.
- Open header: bold weight, no bottom border-radius.
- Body: `padding: 16px 24px` (or `none`), border-radius 4px around the frame.
- Optional `append` slot for header trailing content.

#### VuiTimeline / VuiTimelineItem

- Container: each item left-margins 36px so connectors line up. Spacing: `none/s/m/l` (0/12/16/24px).
- Item: flex row with 16px gap. Icon block: 8px padding, 100% border-radius. Content: padding `2px 16px 12px`.
- Connector: 2px left border `--vui-color-border-light` between items (not after last).

---

### 2.5 Data display

#### VuiBadge

Pill label.

| size | font-size | padding | radius |
|---|---|---|---|
| `s` | 10px | `2px 8px` | 12px |
| `m` *(default)* | 12px | `4px 8px` | 12px |
| `l` | 16px | `8px 12px` | 24px |

Colors: `accent | primary | success | warning | danger | neutral`. Fill = `rgba(color, 0.1)`; text = solid `--vui-color-{color}-shade`; border = transparent at rest, opaque on hover (clickable badges). Optional leading `BiCheck` (when `isSelected`) and trailing close `VuiIconButton` (`BiX`).

#### VuiCallout

Prominent inline notice.
- Colors: `neutral | primary | accent | success | warning | danger`.
- Sizes: `s` (padding 12px, smaller title/body) and `m` (padding 16px).
- 1px `--vui-color-border-light-shade` border, background `--vui-color-{color}-lighter-shade`, border-radius 2px.
- Optional dismiss `VuiIconButton` (offset by `-50%`).
- `headingElement` chooses h1..h6/p.
- Use sparingly — see VUI guidance in CLAUDE.md.

#### VuiCode

Syntax-highlighted block.
- Languages: `json | js | ts | jsx | tsx | bash | py | none`.
- Background `--vui-color-light-shade`, border-radius 2px, `code` padding `16px 24px`, font 12px monospace.
- Default `max-height: 480px` (or full when `fullHeight`).
- Top-right actions: copy + fullscreen, both 12px from the top edge.
- Fullscreen view portals into a `VuiScreenBlock` at z-index 13, content inset 16px.

#### VuiList

Ordered list with numbered circles.
- Sizes: `s` (12×12 circle, 12px font, 12px spacing) or `m` *(default — 16×16 circle, 16px font, 16px spacing)*.
- Circle: `--vui-color-light-shade` background, `--vui-color-subdued-shade` text, bold weight.
- `isComplete` items recolor to `--vui-color-accent-lighter-shade` background + accent text.
- `alignItems: start | center | end` aligns the circle to the row.

#### VuiTable

Full-featured data table.
- `table-layout: fixed; width: 100%.`
- Headers: 12px font, 2px padding; cells: 14px, 2px.
- Hover row: background 25% light-shade + small shadow.
- Selected row: light background.
- Sticky header: `position: sticky; top: 0`, gradient fade on scroll.
- Bulk actions, row actions, pagination, sorting (icons in header), inline expandable rows.
- Responsive: at 800px viewport it grid-layouts cells as 2 columns, at 500px collapses to 1 column per row.
- `bodyStyle.verticalAlign: top | middle | bottom`.

#### VuiKvTable

Definition list (`dl/dt/dd`) styled as a 2-column table.
- Border 1px `--vui-color-border-light`. Header row uses `--vui-color-light-shade` background, 12px bold text.
- Padding presets:
  - `xxs`: `2px 12px`
  - `xs` *(default)*: `8px 12px`
  - `s`: `12px 12px`
- `align: top | middle | bottom` controls vertical alignment.
- `dt` is nowrap subdued color; `dd` is 14px standard text.

#### VuiInfoList / VuiInfoListItem

Vertical title/value pairs. Each item: 16px margin-top, title 12px bold (darker shade), value 14px (darker shade) with 2px gap.

#### VuiInfoTable

Flexible table.
- `width: 100%; table-layout: fixed;` 1px border-light frame.
- `th` 12px bold, padding `8px 12px`.
- `td` 14px, padding follows the `padding` prop (xxs/xs/s — same as KvTable), vertical align per `align` prop.
- Row types: `default`, `sectionHeader` (light background, no bottom border), `footer` (light background).
- Cells support `render` + `colSpan`.

#### VuiSummary / VuiSummaryCitation

Markdown summary with inline numbered citations.
- Body: 16px text, RTL-aware (`dir="auto"`), `fs-mask` privacy class for FullStory.
- Citation chip: inline-block, `vertical-align: middle`, `top: -2px`, 12px bold text, padding `2px 8px`, background `--vui-color-light-shade`, border-radius 2px.
- Hover: `--vui-color-primary-lighter-shade` background + primary text + underline.
- Selected: primary-shade background + empty-shade text.

#### VuiSearchResult

Result card with side-positioned position chip.
- Position chip: 30px wide, 12px font, sits at `left: -42px; top: 0`. Selected position → primary background + empty text.
- Title: `VuiTitle size="s"`. Date in subdued color. Snippet uses `<strong>` for matches.
- Position chip transitions in 150ms.

#### VuiStat

Standalone numeric stat.
- Number uses `VuiTitle size="xl"` (40px).
- Label uses `VuiTitle size="xxs"` below with 2px spacer.

#### VuiStatList

Name/value list.
- Sizes: `s` (14px, 16px row spacing) — default — and `xs` (12px, 2px row spacing).
- `StatName`: 120px wide, `word-break: break-word`. Values auto-link URLs.

#### VuiStatus

Icon + label status indicator.

| status | icon | color |
|---|---|---|
| `error` | `BiError` | danger |
| `warning` | `BiSolidHand` | warning |
| `success` | `BiCheck` | success |
| `info` | `BiInfoCircle` | primary |

Layout: flex row, 8px spacing, icon size matches text. 14px font.

#### VuiDurationBar

A relative bar inside a numeric window (e.g. spans over a time range).
- Container `height: 8px`, full width.
- Inner bar: positioned absolutely with `left%` and `width%`, min-width 4px.
- Colors: `accent | primary | danger | warning | success | neutral | subdued | medium`.

#### VuiProgressBar

- `height: 12px; border-radius: 12px.`
- 3-layer stack: light empty track (inset shadow) + gradient bar in chosen color + 1px outline overlay.
- Transition `width 150ms`.
- Colors mirror semantic palette.

#### VuiSkeleton

Loading placeholder.
- `border-radius: 4px; height: 1rem` (configurable). Multiple rows controlled by the `rows` prop (default 2.75).
- `active` adds a shimmer pseudo-element: 90° gradient transparent → white → transparent, animating left to right `2s ease-in-out infinite`.
- Colors: `accent | primary | success | warning | danger | neutral | subdued` (default subdued).

#### VuiSpinner

Inline rotating SVG.

| size | px |
|---|---|
| `xs` | 14 |
| `s` | 16 |
| `m` *(default)* | 20 |
| `l` | 48 |
| `xl` | 64 |
| `xxl` | 80 |
| `xxxl` | 100 |

Colors: `accent | primary | success | danger | warning | empty | dark | subdued` (default subdued).

#### VuiSpans

Hierarchical / tree table for traces.
- `table-layout: fixed`; sticky header at top with `--vui-color-empty-shade` background.
- 24px chevron column. Depth indent set via `indentSize` (default 16px).
- Lazy expansion via `onExpand` + `isLoadingChildren`. Hover row: 25% light-shade.

#### VuiChat

Floating chat panel docked bottom-right.
- `position: fixed; right: 2px; bottom: 2px`, max-width 420px.
- Container border 1px `--vui-color-border-medium`, border-radius 8px, background `--vui-color-light-shade`.
- Header: 8px 12px padding, `--vui-color-primary-lighter-shade` background.
- Styles: `closed` (visibility hidden), `condensed` (max-height 400px), `tall` / `fullScreen` (calc(100vh - 32px)).
- Composes a conversation list of `ChatTurn`s, optional inspector panel, an input row.

#### VuiPrompt

Bubble for quoted text / suggested questions.
- Padding presets `xs..xxl` (8–80px). Border-radius 16px.
- Colors: `neutral` (light-shade bg + dark text) or `danger` (danger-lighter bg + danger text).
- `isSpeechBubble`: adds a 20px triangle tail on the left at 48px offset.
- If `onClick` is supplied it becomes a button; hover bg = accent-lighter, text = accent.

#### VuiImage / VuiImagePreview

- `VuiImage`: figure layout, `img` full width. Wrapper has 1px border `--vui-color-border-light`, border-radius 2px, padding 8px, shadow on clickable. Caption: 12px subdued with 8px top spacing. Placeholder uses a 16:9 box. Failure state: danger background with error icon and "Missing image".
- `VuiImagePreview`: full-viewport carousel modal.
  - Background `rgba(--vui-color-full-shade, 0.6)` overlay.
  - Header: 48px tall, padding `12px 16px`, dark background, title + copy + close.
  - Body image is centered, `max-width: calc(100vw - 64px)`, `max-height: calc(100vh - 64px)`, `object-fit: contain`.
  - Keyboard: ←/→ navigate, Escape closes.

#### VuiInProgress

`VuiSpinner xs` + `VuiText` label inline, 8px gap. Text ends with ellipsis.

#### VuiErrorBoundary

React error boundary; renders `fallback` when a child throws. No visual chrome of its own.

---

### 2.6 Overlays & feedback

#### VuiTooltip / VuiInfoTooltip

- Background `--vui-color-darker-shade`, text `--vui-color-empty-shade`.
- z-index 2000; 10px offset from the anchor.
- `position: top | right | bottom | left` etc.
- `darkTheme` boolean.
- `VuiInfoTooltip` is the helper variant: a subdued `BiHelpCircle` icon (`size="s"`) wrapped in a tooltip.

#### VuiPopover

Anchored floating panel.
- Background `--vui-color-empty-shade`, 1px `--vui-color-border-medium` border, 2px border-radius, `$shadowLargeEnd`, z-index 14.
- Open animation: `translateY(-8px) → 0` over 200ms with opacity fade.
- `anchorSide: left | right | rightUp | rightDown | leftUp | leftDown | upLeft | upRight` plus `anchorOffsetX/Y`.
- `padding: true (default 12px 0) | 'padding' (16px) | 'none' (0)`.
- `header` slot rendered above content.

#### VuiNotifications / addNotification

Toast system (Sonner Toaster) portaled by `VuiNotifications` at z-index 1000.
- Default position `top-right`. Default duration `10s` (via `addNotification`).
- Each toast: width 420px, padding 16px, border-radius 12px, background empty-shade, shadow `$shadowLargeStart`.
- Color variants map to icons: `primary` = info, `success` = check, `warning` = error icon, `danger` = solid hand.
- Slots: message, optional `code` block, copy button, link, dismiss.

#### VuiOptionsList / VuiOptionsListItem

Used inside popovers and search-selects.
- Sizes: `s` (`padding: 5px 8px`), `m` (`padding: 5px 12px`), `l` (`padding: 8px 12px`); 14px font.
- Scrollable: `max-height: 220px; overflow-y: auto.`
- Item colors: `neutral | accent | primary | success | danger | warning`. Hover background `--vui-color-{color}-lighter-shade`, underline.
- `isSelectable` shows a leading check when `isSelected`.

#### VuiIcon

Wraps react-icons.
- Sizes: `xs 14px | s 16px | m 20px | l 24px | xl 28px | xxl 46px | xxxl 68px`.
- Colors: `inherit | accent | primary | success | warning | danger | subdued | neutral | empty`.
- Types: `default` (just color), `enclosed` (circular bg, 16px padding, white icon), `token` (small circular bg, 2px padding).
- Setting `inline` makes it `display: inline-block` so it sits in flowing text.

#### VuiSetting

Composable "settings row".
- Title (16px) + optional badge + optional help link.
- Optional subdued description.
- `VuiToggle` on the right; conditional children below when `isEnabled`.

#### Utility exports

- `copyToClipboard(value)` — async clipboard write.
- `toRgb(hex)` / `toRgba(hex, alpha)` — color helpers (also re-exported).
- `generateTokensProvider(Lexer, syntaxChecker?)` — Monaco TokensProvider builder for `VuiCodeEditor`.
- `addNotification({...})` — fires a notification toast.

---

## 3. Cross-cutting Design Rules

These flow from `README.md`, `CLAUDE.md`, and component patterns. Apply them when generating mockups so the result feels native to VUI.

1. **Compose primitives over invention.** Almost every UI is built from VuiFlexContainer + VuiFlexItem + VuiSpacer + an existing component. Don't draw a custom card if `VuiCard` / `VuiSimpleCard` / `VuiPanel` already does it.
2. **Use the spacing scale (8-based).** Never pick arbitrary paddings — `4 / 8 / 12 / 16 / 24 / 32 / 40` are the only "approved" values.
3. **Use semantic color, not raw hex.** `primary` for actionable, `success/warning/danger` for status, `accent` (purple) for marketing/special-feature flair, `subdued` for muted text.
4. **Respect the focus ring.** Anything keyboard-focusable shows a 2px primary outline offset by 2px.
5. **Prefer the least intrusive notice.** Use inline `helpText` on `VuiFormGroup` or a `VuiInfoTooltip` over a `VuiCallout`; reserve callouts for state the user must act on (errors, destructive confirmations). Banners crammed above forms cost more attention than they're worth.
6. **Body text defaults to 14px.** Page titles use `VuiTitle l` (30px) or `xl` (40px). Section headers `m` (24px). Card / panel titles `s` (18px). Eyebrow labels `xs` / `xxs`.
7. **Buttons share the same chrome.** Default to `VuiButtonPrimary color="primary"` for the main action, `VuiButtonSecondary color="primary"` (or neutral) for secondary, `VuiButtonTertiary` for low-emphasis text actions. Icon-only = `VuiIconButton` + `aria-label` (it becomes a tooltip).
8. **Forms use `VuiFormGroup`.** Always wrap inputs so label, helpText, and errors render with consistent spacing and the input gets `isInvalid` + ARIA wiring.
9. **Modals vs drawers.** Use `VuiModal` for short, focused tasks (size `s` 500px). Use `VuiDrawer` (680px) for longer editing flows where context underneath should remain partly visible.
10. **Tables are powerful but heavy.** For ≤ ~6 fields of metadata, prefer `VuiKvTable` or `VuiInfoTable`. Reserve `VuiTable` for sortable / paginated / selectable datasets.
11. **Tabs vs side nav.** Use `VuiTabs` (open style) for small numbers of peer views inside a page; `enclosed` style for chip-style mode toggles. Use `VuiAppSideNav` for top-level app navigation, `VuiSideList` for in-page rails.
12. **Stay light on borders.** Most surfaces use `--vui-color-border-light` (`#e3e4f3`). `--vui-color-border-medium` (`#cbd1de`) is for stronger separations (header bottom, sidenav edge).
13. **Animation budget is 200ms.** All hover / open / close uses `0.2s` unless explicitly listed otherwise (skeleton shimmer 2s, spinner 0.6s).
14. **Dark theme parity.** When designing for dark mode, swap neutrals only — brand colors remain identical. Borders shift: light → `#323338`.

---

## 4. Quick visual reference for designers

| You want… | Use |
|---|---|
| Page title | `VuiTitle size="l"` (30px, weight 500) |
| Section title | `VuiTitle size="m"` (24px, 400) |
| Card title | `VuiTitle size="s"` (18px, 400) |
| Form label | `VuiLabel size="s"` (14px, 600) |
| Help text under label | `VuiText size="xs"` with `VuiTextColor color="subdued"` |
| Inline error | `VuiText size="xs"` with `VuiTextColor color="danger"` |
| Primary CTA | `VuiButtonPrimary color="primary" size="m"` (34px tall) |
| Destructive CTA | `VuiButtonPrimary color="danger"` |
| Linked secondary action | `VuiButtonTertiary color="primary"` (no border, underline on hover) |
| Status tag | `VuiBadge size="m"` with semantic color |
| Banner alert | `VuiCallout color="danger|warning|primary"` |
| Toast notification | `addNotification(...)` → renders top-right |
| Inline help icon | `VuiInfoTooltip` |
| Loading state | `VuiSpinner size="m"` or `VuiInProgress label="..."` |
| Empty list | `VuiText` + light icon, centered in a `VuiPanel color="transparent"` |
| Choice between 2–5 options | `VuiSuperRadioGroup` (cards) or `VuiSuperCheckboxGroup` |
| Quick filter chips | `VuiBadge size="m" onClick={...}` |
| Top app header | `VuiAppHeader` (fixed, 46px) |
| Left sidebar | `VuiAppSideNav` (200px / 60px collapsed) |
| In-page nav rail | `VuiSideList` |
| Modal dialog | `VuiModal size="s|m|l"` |
| Side editor | `VuiDrawer` (680px max) |
| Floating popup | `VuiPopover` (z-index 14, large shadow) |

---

## 5. File map for deeper reference

- Tokens: `src/lib/sassUtils/_sizes.scss`, `_typography.scss`, `_depth.scss`, `_shadows.scss`, `_animation.scss`, `_app.scss`.
- Themes: `src/lib/components/context/Theme.ts` (LIGHT_THEME, DARK_THEME, `toStyle`).
- Global styles: `src/lib/styles/styles.scss`, `_reset.scss`, `_focus.scss`.
- Component source: `src/lib/components/<name>/<Name>.tsx` + `_index.scss`.
- Public API: `src/lib/components/index.ts`.
- Live playground (docs site): `src/docs/pages/<name>/` — open via `npm run start`.
