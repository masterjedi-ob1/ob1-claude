# Offline review copies

Self-contained versions of the five vertical landing pages. All CSS and JavaScript are inlined, so
each file renders fully by double-clicking it, with no server and no build step. Google Fonts load
when online; offline they fall back to system serif/sans.

Links between the pages work if you save all five into the same folder.

These are generated from `/site` and are for review convenience only. **`/site` is the source of
truth** — make edits there, not here.

Regenerate after changing anything in `/site`:

    python3 - <<'PY'
    import re, pathlib
    site = pathlib.Path('site'); css=(site/'css/ob1.css').read_text(); js=(site/'js/ob1.js').read_text()
    banner = ('<div style="position:fixed;bottom:0;left:0;right:0;z-index:999;background:#3D3832;color:#fff;'
              'font:600 11px/1.5 \'JetBrains Mono\',monospace;letter-spacing:.14em;text-transform:uppercase;'
              'padding:7px 16px;text-align:center">'
              'OFFLINE REVIEW COPY &middot; OB.1 VERTICAL LANDING PAGES &middot; '
              '<span style="color:#D97757">RULES BEFORE TOOLS</span></div><div style="height:32px"></div>')
    for p in ['index.html','law.html','professional-services.html','manufacturing.html','healthcare.html']:
        h=(site/p).read_text()
        h=h.replace('<link rel="stylesheet" href="css/ob1.css">','<style>\n'+css+'\n</style>')
        h=h.replace('<script src="js/ob1.js" defer></script>','<script>\n'+js+'\n</script>')
        h=re.sub(r'href="/"','href="index.html"',h)
        for s in ['law','professional-services','manufacturing','healthcare']:
            h=h.replace('href="/%s"'%s,'href="%s.html"'%s)
        (pathlib.Path('share')/p).write_text(h.replace('</body>',banner+'\n</body>'))
    PY
