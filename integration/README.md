# Integration with the main ob1ai.co site

Files here reconcile this vertical landing-page set with Kathy's July 5 SEO deploy package
(`seo-fixes-for-chris.zip`, sent Aug 19). They target the **`ob1-blueprint-website-v2`** repo,
not this one.

## Why this exists

Both packages ship a `sitemap.xml`. Kathy's lists the six existing site pages; ours lists the five
vertical pages. Deploying both would have one overwrite the other, and whichever lost would drop its
URLs out of the index. Her `llms.txt` likewise predates these pages and does not mention them.

`sitemap.xml` and `llms.txt` here are the merged versions. **Ship these, not either original.**

| File | Destination in ob1-blueprint-website-v2 |
| --- | --- |
| `sitemap.xml` | `public/sitemap.xml` (replaces both originals) |
| `llms.txt` | `public/llms.txt` (replaces Kathy's) |

Kathy's `robots.txt` needs no change: it already points at `/sitemap.xml` and matches ours.

## Still open

- The four vertical URLs assume these pages ship at `ob1ai.co/law` etc. If they land on a separate
  host instead, update the `<loc>` values and the llms.txt links to match.
- Kathy's llms.txt names `/workshop` as "The Workshop." The mockup and current nav elsewhere call it
  "The Drafting Table." Worth settling on one name before this ships.
- Per Kathy's maintenance note: every new page from here adds one line to `sitemap.xml`, one to
  `llms.txt`, and its own schema block.
