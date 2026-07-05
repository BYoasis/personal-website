# Personal Website

BY / 李邦一的个人网站 MVP。

Tech stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion

Local development:

```bash
npm install
npm run dev
```

Static build:

```bash
npm run build
```

Deploy to the cloud server:

```bash
npm run deploy
```

Publish source changes to GitHub:

```bash
git add .
git commit -m "Update website"
git push
```

After editing the website, run `npm run deploy` again to rebuild `out/` and replace the server copy at `/var/www/personal-website`.
