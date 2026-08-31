# ADR 0001: Use a layered documentation architecture with Docusaurus as the provisional portal

## Status

Accepted — reviewed by the learner on 2026-08-31

## Decision question

Which documentation architecture should this eight-week public learning project use to publish narrative developer documentation, an OpenAPI-driven REST Reference, and SDK References for Python, Java, Go, and Node.js, while keeping factual sources traceable, builds reproducible, and integration costs maintainable?

This is not a search for one framework that generates every kind of documentation. It is a decision about:

1. which tool should provide the unified reader portal;
2. which source and pipeline should produce each Reference type;
3. how those outputs should be integrated and governed;
4. which compromises are acceptable within approximately 64 hours.

## Context

The system does not have one universal documentation source or generator:

- OpenAPI describes the externally observable REST contract.
- Each SDK retains language-specific public signatures, types, comments, behavior, and version information.
- A documentation portal gives readers a unified entrance but does not own all API facts.
- A governance layer must detect semantic drift across REST and SDK surfaces before a release.

Python normally receives new features first and is therefore the strongest feature-coverage baseline. This does not mean that its docstrings or source-to-Reference pipeline are already mature. The learning project needs to practise that missing engineering boundary rather than assume it exists.

Docusaurus already provides the project baseline and supports a self-owned Markdown/MDX site and local build. Its official content plugins do not provide a native OpenAPI or multi-language SDK Reference generator. OpenAPI, Redoc, TypeDoc, and similar integrations are separate community or project-owned dependencies, so their maintenance cost must be validated rather than hidden inside a framework score.

## Constraints and hard gates

The selection must respect these constraints:

- **Time:** eight weeks and approximately 64 hours.
- **Portfolio evidence:** another person must be able to inspect the sources and reproduce the important outputs locally and in CI.
- **Narrative content:** tutorials, how-to guides, explanations, and decisions remain author-owned Markdown or MDX.
- **REST source:** OpenAPI remains the contract used to validate and generate the REST Reference.
- **SDK scope:** Python receives a complete hands-on experiment; Java, Go, and Node.js receive representative generator and architecture analysis rather than four production-grade implementations.
- **Reader experience:** the project should provide one discoverable portal without claiming that all API facts have one source.

A candidate architecture fails the selection if it cannot meet all of these hard gates:

1. the important build and validation steps can run locally and in CI;
2. every generated page has an explicit path from factual source to published output;
3. the portal can provide stable navigation to the REST and SDK References;
4. external plugins and generators can be identified, version-pinned, and replaced or removed;
5. the experiment can fit within the learning project's time budget.

## Evaluation method

Tools are compared within the layer where they perform the same job. Portal frameworks are compared with portal frameworks; REST generators are assessed against the OpenAPI pipeline; SDK generators are assessed against their language-native sources.

For each option, this ADR asks four questions:

1. What capability does it add?
2. What integration and maintenance cost does it create?
3. What is the main risk in this project?
4. What future condition would reverse the choice?

The decision therefore uses hard gates and explicit trade-offs, not a single numerical score that would imply unlike tools are interchangeable.

## Portal-layer comparison

| Candidate | Main gains | Trade-offs and risks | Selection implication |
| --- | --- | --- | --- |
| **Docusaurus** | Self-owned Markdown/MDX site, React extensibility, local static build, and an existing project baseline | No official native OpenAPI or multi-language SDK Reference generator; the project must own community plugins, custom bridges, styling, search, navigation, and upgrades | Keep provisionally because it fits the portfolio and avoids replacing the current baseline. Accept only after the integration gates pass. |
| **MkDocs** | Small Markdown-first authoring surface and strong alignment with Python-based tooling | Rich API presentation, versioning, or portal behavior may depend on theme and plugin choices; changing now adds migration work without yet proving a lower total cost | Prefer if Python-first operation and lower React/Node ownership become more important than the current baseline. |
| **Sphinx** | Mature Python autodoc, structured cross-references, and multiple output formats | Using it as the whole portal would shift the project toward a Python-centric build; autodoc imports also create dependency and side-effect risks in CI | Use for the Python Reference pipeline. Promote it to the portal only if Python API documentation becomes the dominant artifact. |
| **GitBook** | Managed collaboration and a polished hosted reading experience, including OpenAPI-oriented capabilities | Less evidence that the learner owns the local build and CI pipeline; introduces stronger dependence on a hosted product and its workflow | Prefer only if browser-based collaboration and managed presentation become hard requirements. |

This comparison does not claim that Docusaurus is universally better. It says that Docusaurus is the lowest-disruption portal hypothesis for this specific sprint, and that it still has to prove the difficult part: integrating independently generated Reference content.

## Reference-pipeline comparison

| Architecture option | Main gains | Trade-offs and risks | Decision |
| --- | --- | --- | --- |
| **Use one portal framework to generate every Reference** | Appears to simplify configuration and presentation | Forces different factual sources into one abstraction, hides extraction boundaries, and may provide weak language-native support | Reject. Portal integration is not the same problem as API fact extraction. |
| **Use contract- and language-native generators, then integrate their outputs into one portal** | Preserves traceability, permits stronger native tools, and makes every generation boundary observable | Requires explicit work for navigation, styling, search, versions, links, and CI; several dependencies must be maintained | Select. The extra integration work is also the engineering skill this project is intended to demonstrate. |
| **Handwrite REST and SDK Reference pages** | Maximum editorial control and a simple initial setup | Duplicates signatures and schemas, raises drift risk, and makes updates difficult to verify at scale | Reject for normative Reference facts. Use handwritten pages only for narrative guidance and examples. |
| **Publish separate, loosely connected Reference sites** | Lets every generator retain its native output with minimal transformation | Fragments search, navigation, version context, styling, and reader experience | Keep as a fallback if reliable portal integration exceeds the maintenance budget. |

## Decision

Use a four-layer documentation architecture. Compare and select tools within a layer instead of assigning one global score to portal, REST, and SDK tools.

### 1. Portal layer

Keep Docusaurus as the provisional portal for this learning sprint. It is responsible for:

- the unified reader entrance;
- narrative tutorials, how-to guides, and explanations;
- navigation to REST and SDK Reference outputs;
- the local static-site build and eventual CI publication.

Docusaurus is not the factual source for REST parameters or SDK signatures.

### 2. REST Reference layer

Treat the OpenAPI document as the REST contract for this project. The intended path is:

```text
OpenAPI contract
→ validation
→ explicit generator or renderer
→ REST Reference output
→ portal navigation and publication
```

The OpenAPI validation and Reference generation commands must remain visible and independently runnable from the Docusaurus site build.

### 3. SDK Reference layer

Preserve a language-native fact boundary for every SDK. Compare common semantics—feature availability, parameter meaning, types, defaults, allowed values, errors, deprecations, and versions—without requiring identical naming or one shared generator.

The hands-on learning depth is intentionally asymmetric:

- First, create a **course-built minimal Python SDK example**: a small standalone package with one to three public methods, type hints, docstrings, and tests. Run the complete source → docstring → Sphinx/autodoc → generated Reference path without the dependency complexity of a production repository. This is a controlled learning fixture, not a mock implementation of PyMilvus and not a generated dataset.
- Next, fork the public PyMilvus repository and apply the method to one or two real public methods, verifying signatures, implementation, tests, versions, and existing documentation before writing.
- For Java, Go, and Node.js, identify the language-native fact sources and generation boundaries; run one additional minimal generator experiment, and analyse the other two through public source, configuration, and output evidence.

Python serves as the feature-coverage baseline, not as proof that its documentation pipeline or language conventions should be copied to every SDK.

### 4. Governance layer

Maintain a cross-surface capability record for REST, Python, Java, Go, and Node.js. Stable, machine-checkable rules may move into CI; behavioral meaning and intentional language differences remain part of human review.

When two surfaces disagree, classify the symptom as cross-surface drift before assigning a root cause. For example, if OpenAPI and a Python docstring state different defaults:

1. record the inconsistency;
2. inspect the contract, public signature, implementation, tests, and runtime behavior;
3. determine whether the contract, code, docstring, or generated output is stale;
4. ask product or engineering owners to confirm intended semantics when the evidence is insufficient.

AI-assisted tag or repository scanning may produce a candidate change list, but it is not final evidence without source, test, version, and maintainer verification.

## Why this decision fits the project

This architecture keeps the existing Docusaurus baseline while making the reference-generation boundaries visible. It provides meaningful engineering practice in the two priority areas—OpenAPI/REST and Python SDK Reference—without spending the entire eight-week sprint rebuilding four production-grade SDK generators.

It also avoids a misleading comparison. Docusaurus and MkDocs are primarily portal candidates in this decision; Sphinx/autodoc is primarily a Python extraction pipeline; OpenAPI plus a renderer is a REST pipeline. A tool may span layers, but that does not make all of these tools substitutes for one another.

## Trade-off summary

| Choice | What the project gains | What the project deliberately accepts |
| --- | --- | --- |
| Docusaurus as a provisional portal | One self-owned entrance for narrative and Reference content, with an existing baseline | REST and SDK generation remain separate integrations; Docusaurus is not accepted permanently until those integrations pass the gates |
| OpenAPI-driven REST Reference | A traceable contract, reusable validation, and generator options | The OpenAPI document must be kept accurate, and the project must select and maintain a renderer |
| Minimal Python SDK example, then PyMilvus | A controlled way to learn the entire pipeline before testing it against real source complexity | Two stages consume more time than editing PyMilvus directly, but they separate learning failures from production-repository failures |
| Deep Python work plus representative Java/Go/Node.js analysis | Multi-SDK architectural understanding within the 64-hour limit | The portfolio will not claim production-depth pipelines for every language |
| Capability records and CI checks | Earlier drift detection and visible governance evidence | Semantic mappings require maintenance, and some inconsistencies still require human judgment |

## Alternatives not selected now

- **MkDocs as the portal:** not selected because replacing the current baseline adds migration work before proving that it reduces the total integration cost.
- **Sphinx as the portal:** not selected because its strongest advantage is the Python Reference pipeline, while this project also needs a broader narrative and multi-SDK portal.
- **GitBook as the portal:** not selected because a hosted workflow would show less ownership of the local build and CI engineering that this portfolio is intended to demonstrate.
- **Separate Reference sites:** not selected because one reader entrance is a stated goal, but this remains the fallback if unified integration proves too fragile.

## Consequences

### Benefits

- Readers can use one portal without pretending that all technical facts have one source.
- REST and Python generation become explicit, inspectable portfolio evidence.
- Java, Go, and Node.js remain in scope through semantic mapping and governance.
- Framework re-evaluation is tied to observable integration cost rather than personal preference.

### Costs and risks

- The project must own or adopt separate REST and Python generation steps.
- Community plugins may add compatibility and upgrade risk.
- Generated outputs may not automatically share Docusaurus search, styling, navigation, or version selection.
- Cross-SDK semantic checks require a maintained mapping rather than simple string equality.

## Validation gates

Before changing this ADR to `Accepted`, demonstrate that:

1. Docusaurus builds locally and exposes stable navigation to generated Reference content.
2. A small OpenAPI document can be validated and rendered through an explicit, reproducible command.
3. The course-built minimal Python SDK example can generate Reference from docstrings through Sphinx/autodoc.
4. The generated REST and Python outputs have a documented integration path for navigation, versioning, links, and CI.
5. Every community plugin or bridge used by the portal has an identified owner, pinned version, and replacement or removal path.

## Re-evaluation conditions

Re-evaluate Docusaurus as the portal if it requires unmaintained or fragile integrations, or if REST and SDK outputs cannot achieve acceptable navigation, versioning, search, and CI behavior within the team's maintenance capacity.

Also revisit this decision if:

- Python SDK autodoc becomes the dominant artifact;
- browser-based authoring for non-engineering contributors becomes a hard requirement;
- a common IDL begins to generate multiple SDK surfaces reliably;
- the eight-week scope can no longer support both the portal and explicit generation boundaries.

## Evidence

- [Docusaurus official plugins](https://docusaurus.io/docs/api/plugins)
- [Docusaurus community resources](https://docusaurus.io/community/resources)
- [MkDocs: writing documentation](https://www.mkdocs.org/user-guide/writing-your-docs/)
- [MkDocs: plugins](https://www.mkdocs.org/dev-guide/plugins/)
- [GitBook: Git Sync](https://gitbook.com/docs/integrations/git-sync)
- [GitBook: OpenAPI](https://gitbook.com/docs/api-references/openapi)
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
- [Sphinx autodoc](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html)
- [PyMilvus public repository](https://github.com/milvus-io/pymilvus)
