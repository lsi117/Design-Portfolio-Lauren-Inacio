# Deploying to GitHub Pages

Repo: https://github.com/lsi117/Design-Portfolio-Lauren-Inacio

## Updating the site (drag and drop)
1. Open the repo on github.com.
2. Delete the old files: on the repo page, open each stale .html file > trash icon > commit. (Or select all and re-upload; uploads overwrite files with the same name.)
3. Click "Add file" > "Upload files".
4. Drag EVERYTHING inside this export folder (including the assets/, translations/ and _ds/ folders) into the upload area.
5. Commit changes. The site rebuilds in ~1 minute.

## Notes
- index.html is the homepage: https://lsi117.github.io/Design-Portfolio-Lauren-Inacio/
- watsonx.html and cloud-broker.html are AES-encrypted; the password unlocks them in the browser and is remembered per visitor.
- No CNAME file is included (the site runs on github.io). When you point laureninacio.design at it later, add a CNAME file containing exactly: laureninacio.design
- Keep .nojekyll (it stops GitHub from mangling folders that start with underscore, like _ds/).
