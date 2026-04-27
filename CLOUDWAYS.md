# Cloudways Deployment Notes

This project is deployed to Cloudways as a static Vite build.

## Recommended flow

1. Push source code to the `main` branch on GitHub.
2. Let GitHub Actions run `npm ci` and `npm run build`.
3. Sync the contents of `dist/` into `public_html/` on Cloudways.
4. Keep the `.htaccess` file in `public_html/` for SPA routing.

## Current status

Cloudways deployment is active and connected to the `main` branch of the GitHub repository.

Current production target:

- App URL: `https://phpstack-1565321-6328937.cloudwaysapps.com`
- Server IP: `165.227.185.75`
- Deploy source: `main`
- Live directory: `/home/1565321.cloudwaysapps.com/ghkxupcgmk/public_html`
- Source checkout: `/home/1565321.cloudwaysapps.com/ghkxupcgmk/git_repo`

## GitHub Actions secrets

These repository secrets are used by the deploy workflow:

- `CLOUDWAYS_HOST`: `165.227.185.75`
- `CLOUDWAYS_USER`: `lovelaw`
- `CLOUDWAYS_TARGET_DIR`: `/home/1565321.cloudwaysapps.com/ghkxupcgmk/public_html`
- `CLOUDWAYS_PASSWORD`: your Cloudways SSH password for the `lovelaw` user

## Ongoing workflow

1. Make changes locally.
2. Commit and push to `main`.
3. GitHub Actions builds the app and syncs `dist/` to Cloudways automatically.

## Fallback server commands

```bash
cd /home/1565321.cloudwaysapps.com/ghkxupcgmk/git_repo
npm ci
npm run build
rsync -av --delete dist/ /home/1565321.cloudwaysapps.com/ghkxupcgmk/public_html/
```
