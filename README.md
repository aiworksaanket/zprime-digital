# Zprime Digital

Single-page studio site for Zprime Digital, a performance-marketing practice in Pune.

## Run locally

```sh
npm install
npm run dev
```

Open the address printed in the terminal, usually http://127.0.0.1:4321/

## Host the site

```sh
npm install
npm run build
```

The finished site is the `dist` folder. Upload that folder to a static host (Netlify, Vercel, Cloudflare Pages, or any web server).

## Make changes

- Words, phone, email, and section copy: `src/content/site.ts`
- Page sections: `src/components/`
- Page order: `src/pages/index.astro`
- Colors and type: `src/styles/tokens.css`
- Shared layout styles: `src/styles/global.css`

```sh
npm test
```
