# Masroor Jehangiri — Personal Website

My personal portfolio website, built from scratch with HTML, CSS, and JavaScript. It brings together my background, projects, education, work experience, photography, and personal interests.

**Website:** [masroorjehangiri.com](https://masroorjehangiri.com/)

## Features

- Responsive layouts for desktop and mobile screens.
- Light and dark themes, with the selected theme saved in the browser using `localStorage`.
- Project highlights, education, work experience, and links to my resume and profiles.
- A photography gallery with lazy-loaded images and an enlarged photo viewer.
- Gallery navigation through on-screen buttons, left/right arrow keys, and touch swipes. Close the viewer with the close button, Escape, or a click on the backdrop.
- A reading page with favorite books, quotes, and personal reflections.
- Additional pages for soccer, Formula 1, and Ahmadiyyat, currently under construction.

## Built With

- **HTML5** for page structure and content, including the gallery's native `<dialog>` element.
- **CSS3** for styling, responsive layouts, and theme colors.
- **JavaScript** for theme switching and photo gallery interactions.

The site is static and requires no framework, package installation, or build step.

## Run Locally

Clone the repository:

```sh
git clone https://github.com/Masrawr/Portfolio-Website.git
cd Portfolio-Website
```

Open `index.html` in a browser to view the site. For a local server, run the following from the repository folder if you have Python 3 installed:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit [localhost:8000](http://localhost:8000). Press `Ctrl+C` in the terminal to stop the server.

## Project Structure

```text
Portfolio-Website/
├── index.html               # Homepage and photography gallery
├── style.css                # Shared styles, responsive layouts, and themes
├── script.js                # Theme switching and gallery interactions
├── interests/
│   ├── reading.html         # Books, quotes, and reflections
│   ├── soccer.html          # Under construction
│   ├── formula1.html        # Under construction
│   └── ahmadiyyat.html       # Under construction
├── images/                  # Photos and other site images
├── assets/
│   └── masroor-resume.pdf    # Resume
├── CNAME                    # Custom domain configuration
├── sitemap.xml              # List of site page URLs for search engines
└── README.md
```

## Updating the Site

- Edit `index.html` for homepage content and project information.
- Edit the files in `interests/` for individual interest pages.
- Update `style.css` for layout, typography, and colors. Theme colors are defined in `:root` and `body.dark-mode`.
- Update `script.js` for theme and gallery behavior.
- To add a gallery photo, place the image in `images/` and add an `<img>` inside `.photo-grid` in `index.html`, with descriptive `alt` text and `loading="lazy"`. The gallery script automatically includes images in that grid.
- Keep `sitemap.xml` up to date when adding or removing pages.

## Author

**Masroor Jehangiri** — Computer Science student at CUNY College of Staten Island.

[GitHub](https://github.com/Masrawr) · [LinkedIn](https://www.linkedin.com/in/masroor-jehangiri/)
