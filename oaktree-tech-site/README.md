# Oaktree Tech LLC Website

Deployable Next.js website for Oaktree Tech LLC.

## How editable is it?
This version is **code-based**, not drag-and-drop.

The good news: most business content is centralized in `content/site.ts`, so you can edit:
- headlines
- services
- sectors
- case studies
- contact details
- navigation

without touching most of the layout code.

If you want true drag-and-drop later, the next upgrade would be adding a CMS or visual builder such as Sanity, Builder.io, or Webflow.

## Local setup
1. Install Node.js 18.18+ or 20+
2. Run:
   npm install
   npm run dev
3. Open http://localhost:3000

## Vercel deployment
1. Upload this folder to a GitHub repo
2. Import the repo into Vercel
3. Framework preset should auto-detect as Next.js
4. Build command: `npm run build`
5. Output: leave default
6. Add your domain: `oaktee79tech.com`

## Contact form
The contact form posts to `/api/contact`.

By default, the API route returns a success response but **does not send email yet**.
That keeps deployment simple and working immediately.

To make it live, connect one of these:
- Resend
- Formspree
- HubSpot Forms

## Best place to edit business content
Edit `content/site.ts`

## Main routes
- /
- /about
- /services
- /work
- /contact
- /industries/public-sector
- /industries/private-sector
- /industries/military-defense
