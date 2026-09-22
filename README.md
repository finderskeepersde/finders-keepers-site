# Finders Keepers Boutique — finderskeepersde.com

The one-page site for Finders Keepers Boutique (93 E. Main Street, Newark, DE), built from the approved mockup.
It's plain HTML, CSS and JavaScript: no framework, no build step, no monthly hosting bill.

```
index.html          the page
privacy.html        Privacy Policy page
terms.html          Terms & Conditions page
styles.css          all styling (colors and fonts live at the top)
script.js           mobile menu, FAQ accordion, contact form
assets/img/         photos, merch, pushpin, lips, phone, paper texture, favicon
assets/fonts/       Bodoni Moda + Kristi (self-hosted, open-license)
vercel.json         hosting settings for Vercel
```

## Put it on GitHub

1. On github.com, click **New repository** and name it `finders-keepers-site`. Leave the "Add a README" box unchecked.
2. On the new repo's page, click **uploading an existing file**.
3. Unzip this folder on your computer, open it, select **everything inside** (including the `assets` folder, `.gitignore`
   and `vercel.json`), and drag it onto the GitHub page. `index.html` must be at the top level, not inside another folder.
4. Click **Commit changes**.

Or from a terminal inside this folder:

```bash
git init
git add .
git commit -m "Finders Keepers landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/finders-keepers-site.git
git push -u origin main
```

## Make it live (Vercel, free)

1. Go to vercel.com and sign in with GitHub.
2. Click **Add New → Project** and import `finders-keepers-site`.
3. Framework preset: **Other**. Leave the build and output settings blank, then click **Deploy**.
4. You'll get a free `something.vercel.app` link to preview it right away.

From now on, any change you commit to GitHub goes live on its own within about a minute.

## Point finderskeepersde.com at it (keep GoDaddy, no transfer)

You keep paying GoDaddy only the yearly domain renewal. You're just changing where the domain points.

1. In Vercel: open the project, go to **Settings → Domains**, and add `finderskeepersde.com` and `www.finderskeepersde.com`.
2. Vercel will show you the DNS records it wants, usually an **A** record for `@` and a **CNAME** for `www`.
3. In GoDaddy: go to **My Products → finderskeepersde.com → DNS**. Edit or replace the existing `@` A record and the
   `www` CNAME so they match what Vercel shows. Delete any old A or CNAME records on `@`/`www` that point to WordPress.
   Leave MX (email) records alone.
4. DNS usually updates within an hour (it can take up to 48). Vercel adds the HTTPS certificate automatically.
5. Once the new site loads on your domain, you can cancel the WordPress hosting plan.

Tip: `app.finderskeepersde.com` (your seller app) is a separate subdomain. Don't touch its DNS record.

## Before launch: things to fill in

Search `index.html` for `TODO(Bianca)`. One spot is left:

1. **Contact form.** Make a free form at formspree.io and replace `YOUR_FORM_ID` in the form's `action`.
   Messages will go to your email.

## Policy pages

`privacy.html` and `terms.html` hold the text from your old site's Privacy Policy and Terms & Conditions pages,
copied word for word. Note: on the old site, the Terms & Conditions page contained the same text as the Privacy
Policy (only the title differed), so both pages here currently say the same thing. To change either one, edit the
text inside `<article class="legal-body">` in that file.

## Where the artwork came from

- **Merch, pushpin, lips, model:** the transparent files you sent.
- **Storefront photos:** both made from your full-resolution storefront photo, color-matched to the mockup.
- **Halftone rotary phone:** rebuilt from the mockup. Exporting it from Canva as a transparent PNG and saving it over
  `assets/img/rotary-phone-halftone.png` gives you the exact original.
- **Exclamation marks:** redrawn as code (in `index.html`, the `<svg class="exclaim">`).

## Fonts

The mockup's fonts (Bodoni FLF and BRY Douglas) aren't licensed for free use on the web, so the site uses the closest
open-license matches: **Bodoni Moda** for all the serif text and **Kristi** for "xoxo Finders keepers" and
"Good Style Lives Here." Both are stored in `assets/fonts/`, so they load even if Google is blocked, and their licenses
are included there too.

If you own web licenses for Bodoni FLF or BRY Douglas, drop the `.woff2` files into `assets/fonts/` and change the
`@font-face` lines at the top of `styles.css`.

## Changing colors

All the colors are at the top of `styles.css`:

| Variable | Used for |
|---|---|
| `--pink` `#dc5a82` | buttons, nav links, step numbers |
| `--pink-script` `#e0457a` | script lettering |
| `--pink-band` `#fad9de` | the polka-dot bands |
| `--paper` `#f5f2eb` | page background (under the paper texture) |
