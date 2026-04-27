# Cloudways Deployment Notes

This project should be deployed to Cloudways as a static Vite build.

## Recommended flow

1. Push source code to the `main` branch on GitHub.
2. Let GitHub Actions run `npm ci` and `npm run build`.
3. Sync the contents of `dist/` into `public_html/` on Cloudways.
4. Keep the `.htaccess` file in `public_html/` for SPA routing.

## GitHub Actions secrets

Add these repository secrets in GitHub before using the workflow:

- `CLOUDWAYS_HOST`: `165.227.185.75`
- `CLOUDWAYS_USER`: `lovelaw`
- `CLOUDWAYS_TARGET_DIR`: `/home/1565321.cloudwaysapps.com/ghkxupcgmk/public_html`
- `CLOUDWAYS_PASSWORD`: your Cloudways SSH password for the `lovelaw` user

## One-time setup

1. Add the four GitHub repository secrets above.
2. Push to `main`.
3. Let the GitHub Actions workflow build and deploy automatically.

## Fallback server commands

```bash
cd /home/1565321.cloudwaysapps.com/ghkxupcgmk/git_repo
npm ci
npm run build
rsync -av --delete dist/ /home/1565321.cloudwaysapps.com/ghkxupcgmk/public_html/
```
