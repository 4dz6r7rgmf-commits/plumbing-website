# ClearFlow Plumbing website

A lightweight, mobile-first brochure site for a local plumbing company. It uses plain HTML, CSS, and vanilla JavaScript, with no build step or external runtime dependencies. The hero uses an optimized local stock photo from [Kindel Media on Pexels](https://www.pexels.com/photo/handywoman-holding-a-plumbers-wrench-8486978/), available under the [Pexels license](https://www.pexels.com/license/). Replace it with a photo of your own Australian plumbing team when available.

## Customize the business

Edit the `CLEARFLOW_BUSINESS` object at the top of [`business.js`](business.js) to change the company name, tagline, phone, email, service area, and hours. Use an international-format number in `phoneHref` (digits and a leading `+`) so click-to-call links work reliably. The visible details and contact links update throughout the site.

Before publishing, replace the clearly marked sample reviews in `index.html` with genuine customer feedback you have permission to use. Update the service-area placeholder and review the service descriptions for your business and local licensing requirements.

## Contact form

The form is front-end only and does not send or store submissions. To receive messages, create a free form endpoint with a service such as [Formspree](https://formspree.io/), then set the form's `action` to the endpoint and its `method` to `POST` in `index.html`. Update the submit handler in `script.js` to allow a real submission or follow the service's recommended JavaScript integration. Never ask customers for sensitive information through a basic contact form.

## Run locally

Open `index.html` directly in a browser, or start a static server from this folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

This site has no build step. Push the files to the repository's `main` branch, then in GitHub open **Settings → Pages**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, and save. GitHub Pages will publish the site at the URL shown in that settings page. Subsequent commits to `main` will update the site.

## Files

- `index.html` — page structure, content, and SEO metadata
- `styles.css` — responsive layout, colors, illustration, and focus states
- `business.js` — editable business details
- `script.js` — navigation menu, contact-form demo message, and current year
- `assets/plumber.jpg` — Pexels stock photo used in the hero
