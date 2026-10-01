# Portfolio QA and maintenance pass

## FIXED

- **Lumen chapter-card alignment (reference follow-up):** the supplied screenshot identifies the three Experience Architecture cards. Removed the center card's 8px desktop lift and standardized all three image frames to 16:11, aligning card edges, image boundaries, and description starts in the desktop row. Preserved the distinct colors and caption placements. File: `src/components/Portfolio/LumenCaseStudy.tsx`.

- **Headline collision:** changed the hero's unitless line height from 0.91 to 1.05. Font family, size rules, tracking, wording, and composition remain intact. File: `src/components/Home/Hero/index.tsx`.
- **Headshot sizing:** matched the responsive `sizes` hint to the existing 64–128px CSS clamp. The original 1448×1086 PNG, `next/image`, cover fit, and 50%/34% crop remain intact. This avoids oversized image requests; it does not manufacture additional photographic detail. File: `src/components/Home/Hero/index.tsx`.
- **Circular close controls:** replaced font-dependent multiplication characters with a symmetric SVG X. Shared React implementation: `src/components/Portfolio/CloseIcon.tsx`. Updated consumers: `ProjectCloseControl.tsx`, `Modal.tsx`, `ResumeSections.tsx`, `src/components/Home/Hero/ResumePreviewModal.tsx`, `src/components/DisclosureDialog.tsx`, `src/components/PortfolioChat.tsx`, and both `src/app/(projects)/concepts/{lumen-festival,professional-cleaning}/page.tsx` files. Updated controls use 44px targets and preserve existing hover/focus styles and close/return behavior.
- **Static project return controls:** applied the same SVG geometry to `public/beans-place/index.html`, `public/vintage-barbershop/index.html`, and `public/furniture-website/Index.html`, plus the corresponding three `standalone-projects` entry HTML files. Existing destinations and placement remain intact. Standalone projects are separate, ignored repositories; their edits are local and have not been deployed.
- **Case-study gutter scrolling:** moved native desktop scrolling from the inner article to the surrounding main element. All six studies now scroll when the pointer is over either side gutter, with no competing inner scrollbar. Tablet/mobile retain normal document scrolling. Files: `src/components/Portfolio/{BarbershopCaseStudy,ClearlineCaseStudy,LumenCaseStudy,BackendDataSystemsCaseStudy,ReturnToWork}.tsx`, `src/app/(site)/work/[slug]/page.tsx`, and `src/styles/tailwind.css`. The floating return link observes the outer scroll surface; existing article styling exclusions remain in place.

## VERIFIED / NO CHANGE NEEDED

- Headshot source resolution is ample for its current 44px header and up-to-128px hero display, including high-density screens. No higher-resolution headshot source was found in the repository. No vector conversion, recropping, or replacement was needed.
- All six case studies were checked at 1440×900, 768×1024, and 390×844. None produced document horizontal overflow or uncaught JavaScript errors during the route checks. At desktop, wheel input in the left gutter moved the outer scroll position to 350px, and right-gutter input advanced it to 700px on every study.
- All five showcased website return controls measured 44×44px, with zero horizontal or vertical SVG-center offset at 1440, 768, and 390px widths. Clearline's confirmation close control also measured 44×44px with zero offset. Resume PDF and disclosure close controls were checked in the production browser at mobile width.
- Existing Bean's Place cart close control already uses an SVG centered by grid: measured 40×40px, with zero center offset. It was left intact. The barbershop service-details close button is a rounded rectangular control, not a circular preview control; its existing implementation was left intact.
- Portfolio light/dark selection works and persists across navigation. Lumen and Clearline case studies were inspected in both modes. Existing contrast concerns are noted below rather than changed.
- The subsequently supplied screenshot clarified that Lumen's chapter-card offset and differing image heights were the reported alignment issue; these are now corrected. Other case-study collage arrangements and content-specific heights remain untouched.
- Lumen ticket information displays its existing no-ticket-sales explanation. Clearline displays a prototype notice and a confirmation explaining that information was not submitted; browser verification confirmed the form resets. Bean's Place checkout displays its existing payment-provider explanation, confirmed in the desktop browser. No new popups or rewritten copy were added.
- Backend & Data Systems is a case study rather than a transactional live demo. No purchase/booking submission was added or required.
- Targeted ESLint checks and TypeScript validation passed. Production build passed after allowing its existing Google Fonts downloads. The build reports an existing stale `baseline-browser-mapping` data warning; dependencies were left unchanged.
- Browser verification used installed Chromium through cached Playwright after the installed agent-browser CLI failed its CDP connection. No dependency was added to the project.
- Project order, portfolio navigation, established design language, and unrelated resume changes were preserved. Nothing was committed or deployed.

## MANUAL MODERNIZATION ITEMS

- **Barbershop:** image centering, Services subtitle centering, header rounding on scroll, and header styling were left alone. The showcased implementation is `public/vintage-barbershop/index.html`, `css/styles.css`, and `js/main.js`, with a corresponding standalone copy. The header uses `.site-header` with `position: sticky; top: 0`; `.header-inner` is flex-based. Service content/details are populated by `main.js`; booking behavior is in `js/calendar.js`. There is no current scroll-driven rounded-header treatment.
- **Lumen:** navigation usefulness, page expansion, and section-jump experience were left alone. In `src/app/(projects)/concepts/lumen-festival/page.tsx`, `navItems` maps Overview, Lineup, Stages, Experience, and Tickets to anchors on one page; `festivalSections` supplies the three editorial modules. The mobile menu uses the same destinations. Change this structure during your own design pass if you want navigation to cover more substantial content.
- **Demo clarity:** consider adopting equally clear, appropriately placed explanations for the simulated barbershop booking and Bean's Place contact form. Existing explanations in Lumen, Clearline, and Bean's Place checkout need no duplicate popups.

## POTENTIAL ISSUES DISCOVERED

These additional issues were left untouched.

- **Barbershop booking:** `public/vintage-barbershop/js/calendar.js` stores appointments in page-local state and reports that an appointment is booked. There is no real booking submission and no equivalent prototype explanation in that interaction. Refreshing loses the simulated bookings. Demo contact details can also imply a real business.
- **Bean's Place contact:** the shipped bundle simulates a send delay and success state without transmitting a message, while the form promises a response within 24 hours. This may mislead visitors.
- **Bean's Place mobile cart access:** the existing cart-trigger button was present but hidden at 390px during testing. Desktop add-to-cart and checkout explanation worked. Review mobile navigation/cart access separately.
- **Furniture & Landscapes:** the showcased login link targets an absent `auth/login.html`; `auth/register.html` posts to `/register`, with no matching route in this portfolio. Read More links use `href="#"`, which the smooth-scroll handler passes to `document.querySelector`, an invalid selector. Several footer anchors have no matching sections. These placeholder interactions need a separate decision about intended demo behavior; they were not silently wired to production services or given new messaging.
- **Lumen case-study contrast:** some headings render dark on dark panels in light mode. The same source styling predates this pass. A separate scoped contrast correction is recommended.

Local browser screenshots are in the ignored `tmp/qa-maintenance/` directory.
