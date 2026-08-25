# Documentation framework selection research

**Decision to make:** select the publishing framework for a small, public developer-documentation portfolio. The project needs Markdown-based narrative content, an OpenAPI-driven REST reference, a small Python SDK reference, reproducible checks in CI, and an explainable trade-off. This is a research note, not the decision record itself.

## Selection criteria

1. **Source and reference fit:** authored narrative pages must remain separate from generated REST and SDK reference output.
2. **Operational fit:** a reviewer must be able to build and validate the site locally and in CI without relying on a hosted editor.
3. **Portfolio signal:** the work should demonstrate one framework deeply, plus an explicit and defensible comparison—not superficial use of four frameworks.
4. **Scope fit:** a two-month, 64-hour project favours a small setup surface while retaining one meaningful extension or generation boundary.

## Evidence-based comparison

| Option | Content model and extension model | API-reference automation | Versions, i18n and presentation | CI / hosting / developer experience | Main trade-off for this project |
| --- | --- | --- | --- | --- | --- |
| **Docusaurus** | Markdown and MDX compile to React; MDX can embed JSX, and Markdown processing can be extended with Remark/Rehype/MDX plugins. [Official docs](https://docusaurus.io/docs/markdown-features) | No API generator is assumed by this comparison. Keep OpenAPI as the factual source and invoke an explicit generator/renderer in the repository; this makes the generation boundary visible. | Built-in docs version snapshots/routing and file-based translation of Markdown/MDX and UI strings. Versioning adds build and maintenance complexity. [Versioning](https://docusaurus.io/docs/versioning), [i18n](https://docusaurus.io/docs/i18n/introduction) | Node-based static-site build; the project documents hot reload, incremental builds, plugins, and deployment to GitHub Pages, Netlify, and Vercel. [Introduction](https://docusaurus.io/docs) | Strong fit for a JavaScript/React-flavoured docs-as-code portfolio. It is not automatically the best choice for Python SDK autodoc; that needs a separate extraction step or a deliberately scoped bridge. |
| **MkDocs + Material** | MkDocs uses Markdown files in a `docs` directory and a YAML configuration file; navigation is defined there. Plugins are separately installed Python packages. [Writing docs](https://www.mkdocs.org/user-guide/writing-your-docs/), [plugins](https://www.mkdocs.org/dev-guide/plugins/) | API automation is normally supplied by a plugin or external generator rather than MkDocs core; record the dependency and pin it in CI. | Core provides themes and plugins; Material adds a richer developer-doc UX. Its version selector integrates with external `mike`; multilingual sites are commonly separate projects linked by a selector. [Material versioning](https://squidfunk.github.io/mkdocs-material/setup/setting-up-versioning/), [language](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/) | Python-first local server/static build; MkDocs documents GitHub Pages publishing via `mkdocs gh-deploy`. [Deploying](https://www.mkdocs.org/user-guide/deploying-your-docs/) | Excellent Markdown-first alternative, especially when the repository is Python-centric. Distinguish MkDocs capabilities from Material/theme/plugin capabilities in any case study. |
| **Sphinx** | Supports reStructuredText and MyST Markdown, structured cross-references, multiple output builders, themes, and extensions. [Official overview](https://www.sphinx-doc.org/en/master/) | Built-in `autodoc` imports Python modules and uses docstrings/signatures; `autosummary` can create the necessary API pages. Imports may execute side effects and must have dependencies installed in CI. [Autodoc](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html), [automatic generation](https://www.sphinx-doc.org/en/master/tutorial/automatic-doc-generation.html) | Supports gettext/PO-based document translation and multiple builders including HTML, LaTeX/PDF and ePub. [i18n](https://www.sphinx-doc.org/en/master/usage/advanced/intl.html) | Python build pipeline and mature extension points. The same environment needed to import the SDK must be reproducible in CI. | Best technical match if the primary learning objective becomes Python SDK reference generation or multi-format publication. Its environment and markup complexity can consume material time in an eight-week project. |
| **GitBook** | Managed documentation product with GitHub/GitLab bidirectional Git Sync, rather than a self-hosted static-site framework. [Git Sync](https://gitbook.com/docs/integrations/git-sync) | Imports OpenAPI files/URLs/CLI-published specs; can generate endpoint pages from operations/tags and present interactive API blocks. [OpenAPI](https://gitbook.com/docs/api-references/openapi), [endpoint pages](https://gitbook.com/docs/api-references/openapi/organize-your-endpoints) | Supports site variants for versions or languages. [Variants](https://gitbook.com/docs/publishing-documentation/site-structure/variants) | Managed publishing and collaboration; Git Sync can preserve a Git workflow. Product analytics/insights availability depends on plan. [Insights](https://gitbook.com/docs/publishing-documentation/insights) | Strong when collaboration, hosted editing, interactive API presentation, and managed analytics are primary. It gives less direct evidence of owning the build, deployment and CI pipeline; that is an inference from its managed-product model. |

## Provisional recommendation

Use **Docusaurus for the portfolio site's baseline**, but make that a documented decision rather than an unexplained default. It best supports the existing target: a public, self-owned static site with a visible Node/CI workflow, Markdown/MDX content, navigation, and room for a small React/MDX customization.

Do **not** claim that Docusaurus is universally superior. Instead, record the following conditional alternatives:

- Choose **Sphinx** if the portfolio is reframed around Python SDK autodoc as the central engineering artefact or needs PDF/ePub outputs.
- Choose **MkDocs + Material** if a fast, Python-aligned, Markdown-first site is more valuable than React/MDX customization; treat versioning and API tooling as explicit ecosystem dependencies.
- Choose **GitBook** if the intended story is cross-functional authoring and managed API experience, accepting that the hosted platform owns more of the publishing machinery.

## Recommended learning deliverable

Before scaffolding, add one short ADR (for example, `ADR-0001-documentation-framework-selection`) with:

1. the criteria above and weighted priorities for this project;
2. Docusaurus, MkDocs + Material, Sphinx, and GitBook as considered options;
3. a decision: Docusaurus for this sprint, including the stated API-generation boundary;
4. rejected alternatives and the conditions that would reverse the choice;
5. a one-sentence verification: `npm run build` works locally and in CI, while OpenAPI validation and reference generation remain independently runnable.

This keeps the framework decision within the eight-week scope while turning the comparison itself into public evidence of architecture and engineering judgment.
