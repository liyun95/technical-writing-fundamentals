# ADR 0001: Select the documentation framework

## Status

Accepted

## Decision criteria

| Criterion | Weight | Why it matters |
| --- | ---: | --- |
| Narrative-content and navigation fit | 3 | The site needs tutorial, how-to, explanation, and reference routes. |
| REST and SDK reference fit | 5 | API Reference is the core engineering-learning track. |
| Local build and CI ownership | 5 | Reviewers must reproduce the workflow without a hosted editor. |
| Extension and presentation flexibility | 2 | One meaningful extension is enough for this sprint. |
| Two-month scope cost | 5 | The project has about 64 hours. |
| Collaboration and managed editing | 1 | Useful context, but not the primary portfolio claim. |

## Scorecard

| Option | Content (3) | Reference (5) | Local/CI (5) | Extension (2) | Scope (5) | Collaboration (1) | Weighted total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Docusaurus | 5 | 4 | 5 | 5 | 3 | 2 | 87 |
| MkDocs + Material | 4 | 3 | 5 | 4 | 5 | 2 | 87 |
| Sphinx | 4 | 5 | 5 | 4 | 2 | 2 | 82 |
| GitBook | 4 | 4 | 2 | 3 | 4 | 5 | 73 |

## Score rationale

- Docusaurus: strong narrative, local-build, and React/MDX extension fit; external REST and SDK integrations add sprint work, so Scope is 3 rather than 5.
- MkDocs + Material: a fast Markdown-first, Python-aligned setup earns Scope 5, while plugin or external API tooling lowers its reference and extension scores.
- Sphinx: bundled Python reference extensions and local builds score highly, but the environment, MyST, and multi-output setup produce the highest scope cost.
- GitBook: managed editing and API presentation reduce setup effort, but hosted-product ownership lowers local/CI and extension flexibility.

## Decision

Select Docusaurus 3 for this sprint. It ties with MkDocs + Material on the weighted score, so the deciding factor is the portfolio goal: demonstrate a JavaScript/React-flavoured, self-owned developer-docs workflow. Sphinx remains stronger for native Python autodoc, but this project has REST as its primary reference surface and the Python SDK is deliberately small with a separate documented extraction path.

## Rejected alternatives

- MkDocs + Material: choose instead if a Python-first, Markdown-first build and fastest authoring path outweigh React/MDX flexibility.
- Sphinx: choose instead if native Python autodoc or multi-format output becomes the primary artefact.
- GitBook: choose instead if managed collaboration and interactive hosted API documentation outweigh ownership of build and CI.

## Consequences

These are future architecture constraints and acceptance requirements, not claims about the repository's current implementation. OpenAPI validation and reference generation must each be runnable independently of the website build; they do not have to be independent of each other. The site must build with `npm run build` locally and later in CI.
