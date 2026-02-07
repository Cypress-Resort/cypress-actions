# Cypress Resort – Website Changelog

> This changelog tracks **major updates, decisions, and coordination items**
> for the Cypress Resort website.
>
> It is intended for **engineering, marketing, operations, and leadership**.
> Not every commit belongs here — only changes with **user, business, or
> operational impact**.

---

## Status Legend
- <span style="color:#2da44e;">✅ Completed</span>
- <span style="color:#cf222e;">❌ Not completed</span>

---

## 🔔 Team Coordination Log (Rolling)


| # | Update Header | Description | Status | Date (YYYY-MM-DD) | Owner | References |
|---:|---|---|:---:|---|---|---|
| 1 | Refactored middleware - change to proxy |  middleware.ts was deprecated on next | <span style="color:#2da44e;">✅</span> | 2026-01-17 | @dev | none |
| 2 | Resolve domain connect trap from wix | Transferred domain name ownership to Vercel from godaddy. Godaddy remains the dns registrar bit wix was magically overriding the domain name and preventing the rendering of the cypressresort.com domain  | <span style="color:#2da44e;">✅</span> | 2026-01-19 | @marketing | Ref public/assets/domaintrap & wixref |
| 3 | Journey Menu Link | Update the navbar to link from the Journey Tab to the posts with a chronology of the Resort build. Need access to content  | <span style="color:#cf222e;">❌ Not completed</span> | 2026-01-24 | @pat| none |
| 4 | Pardon our Progress Page | Resolved with a label that is dsiplayed on mouseover of menu item | <span style="color:#2da44e;">✅</span> | 2026-01-20 | @pat | none |
| 5 | Admin login | test the strength of admin login - Refactor where needed | <span style="color:#cf222e;">❌ Not completed</span> | 2026-01-21 | @pat | none |
| 6 | Menu Testing | test the  process for shopping for menu items - and payments through stripe | <span style="color:#cf222e;">❌ Not completed</span> | 2026-01-22 | @tanner | none |
| 7 | Menu Page Image Viewer | Refactor the page to permit multiple images (up to 5) to be viewed in the carousel for any single item - also evaluate the image management functions to ensure simple integrations (Vercel blob storage)  | <span style="color:#2da44e;">✅</span> | 2026-01-23 | @pat | none |
| 8 | CI/CD Workflow | Evaluate current process for managing and testing PRs (and merges). Refactor where needed  | <span style="color:#cf222e;">❌ Not completed</span> | 2026-01-24 | @pat | none |
| 9 | Activate or Disable NavBar Items | Build admin page to enable or disable navbar items - provide administrator with control over page visibility  | <span style="color:#2da44e;">✅</span> | 2026-01-21 | @pat | none |
| 10 | Refactor Proxy.js to control page access based on site-nav state  | Even though the Navbar item is disabled, somone can still navigate to a page via the url address. This action tests state of navbar before page rendering | <span style="color:#2da44e;">✅</span> | 2026-01-22 | @pat | none |
| 11 | Added fav icon | Cypress Resort Fav Icon now displays | <span style="color:#2da44e;">✅</span> | 2026-01-21 | @pat | none |
| 12 | Persist page visibility site-nav state set by admin to supabase | Admin page sets page visibility but needs db to persist globally and across sessions  | <span style="color:#2da44e;">✅</span>| 2026-01-22 | @pat | none |
| 13 | Refactor Image code blocks for sizes | Nextjs image component requires sizes attributes so that it can choose optimal image resolution on small form factors like mobile and tablets | <span style="color:#2da44e;">✅</span>| 2026-01-22 | @pat | none |
| 14 | Enable RLS on Supabase for site-nav | With row level security and the use of the services key, we avoid security breaches from exposing anon key in browser with write privileges | <span style="color:#2da44e;">✅</span>| 2026-01-22 | @pat | none |
| 15 | Enable RLS on Supabase for product and order tables | Avoid security breaches from exposing anon key in browser with write privileges | <span style="color:#2da44e;">✅</span>| 2026-01-24 | @pat | none |
| 16 | CMS Prototype | Build and deploy Phase I prototype of the CMS - focused on administrator functions (https://cypress-cms.vercel.app/) | <span style="color:#2da44e;">✅</span>| 2026-01-25 | @pat | none |
| 17 | Consolidated Actions Site | Build and deploy a single site with consolidated actions and plans from across Cypress sites (https://cypress-resort-actions.vercel.app/) | <span style="color:#2da44e;">✅</span>| 2026-01-25 | @pat | none |
| 18 | Discrete Product Category Labels | Update product categories with labels that are more discrete to assist guests in searching and making selections (filters) | <span style="color:#2da44e;">✅</span>| 2026-01-29 | @pat | none |
| 19 | implement uniform structure for variants array | variants array had a mix of strings and objects - moved to uniform object structure with price:null where applicable | <span style="color:#2da44e;">✅</span>| 2026-01-29 | @pat | none |
| 20 | Product handling & Shopping for Admins and Guests with Variants | Design, page, DB updates for rendering variants on guest selection and admin pages. (handle objects in arrays by react) | <span style="color:#2da44e;">✅</span>| 2026-01-29 | @pat | none |
| 21 | Shop Page | Design and implement a parallax on the shop page for improved guest navigation and control when scrolling through product options (and implemented for mobile)| <span style="color:#2da44e;">✅</span>| 2026-01-30 | @pat | none |
| 22 | Footer | Redesign footer so that it is more discrete, compact and not overpowering (and implemented for mobile). Eliminated some links redundant to the main menu| <span style="color:#2da44e;">✅</span>| 2026-01-30 | @pat | none |
| 23 | Shopping Cart Button | Added visual cues so that shoppers able to see which products added to cart without needing to visit the Cart Page| <span style="color:#2da44e;">✅</span>| 2026-01-30 | @pat | none |
| 24 | Test Menu Issue | Ordered items from the menu, paid Stripe with test card, BUT never received an email confirm | <span style="color:#cf222e;">❌ Not completed</span> | 2026-02-05 | @pat | none |
| 25 | Data Issue | Gaza Olive Oil - Drizzle is priced at $540 | <span style="color:#cf222e;">❌ Not completed</span> | 2026-02-07 | @tanner | none |



