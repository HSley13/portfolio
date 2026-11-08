// Project screenshots and diagrams live in public/projects/<project>/, so they
// are copied into the build as-is and served under the site's base path
// (/portfolio on GitHub Pages). `src` is the path stored in projectsData.
export const projectImageUrl = (src) => `${process.env.PUBLIC_URL}/${src}`;
