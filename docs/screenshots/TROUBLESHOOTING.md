# Screenshot Troubleshooting (Black/Blank Screens)

If your generated screenshot is fully black or blank, use this checklist.

## 1) Serve pages over HTTP (not `file://`)
Some browser runners in CI/container environments cannot resolve local `file://` paths correctly.

```bash
python3 -m http.server 8000
```

Then open:
- `http://127.0.0.1:8000/docs/screenshots/web-preview.html`
- `http://127.0.0.1:8000/docs/screenshots/mobile-preview.html`

## 2) Wait for render before capture
Capture only after the page has finished loading and a key selector exists.

Playwright best-practice options:
- `wait_until="networkidle"`
- `page.wait_for_selector("main, .phone")`
- `page.wait_for_timeout(300-800)`

## 3) Disable animations/GPU for deterministic frames
In headless CI, GPU timing issues can yield dark frames.

- Launch with `--disable-gpu`
- Use `animations="disabled"` in `page.screenshot(...)`

## 4) Validate URL and server status
A black/blank capture often means the browser received an empty page or an error page.

- Verify server is running on the expected port.
- Verify URL returns 200 in a normal browser.
- Check server logs for 404/500.

## 5) Example Playwright snippet
```python
await page.goto("http://127.0.0.1:8000/docs/screenshots/web-preview.html", wait_until="networkidle")
await page.wait_for_selector("main")
await page.wait_for_timeout(500)
await page.screenshot(path="web.png", full_page=True, animations="disabled")
```

## 6) Common failure signatures
- `ERR_EMPTY_RESPONSE`: server process not running.
- `ERR_FILE_NOT_FOUND`: path resolved outside the mounted workspace.
- All-black PNG with non-zero dimensions: frame captured before paint or renderer/GPU issue.

