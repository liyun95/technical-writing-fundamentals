# Two-month course map: Technical Writing Engineering Fundamentals

## Learning contract

This is a course with a portfolio project, not a project delivered for the learner. Every lesson follows:

1. **Understand** — concise explanation and trusted source.
2. **Practise** — the learner makes a small decision, edit, or diagnosis.
3. **Review** — the assistant challenges the reasoning and gives feedback.
4. **Evidence** — only reviewed work becomes portfolio evidence.

The repository and site already created before this contract are **instructor-provided setup**, not completed learner work. They are useful materials to inspect, revise, and learn from; they earn no completion credit by themselves.

## Course sequence

| Lesson | Capability | Learner practice | Evidence | Estimated time |
| --- | --- | --- | --- | --- |
| 0 | Orient the learning environment | Identify the repository’s source, site, and quality boundaries | Personal learning contract and baseline observations | 45 min |
| 1 | Layered documentation-system selection | Separate portal, REST, SDK, and governance decisions; defend how the layers work together | Reviewed layered architecture decision and accepted ADR | 2–3 h |
| 2 | Documentation architecture | Turn audiences and top tasks into a Diátaxis map and navigation hypothesis | Reviewed Function Chain content-set IA brief | 3 h |
| 3 | Reference source strategy | Trace REST and multi-SDK facts from source through extraction to the reader-facing output | REST and multi-SDK source-to-reference map | 2–3 h |
| 4 | OpenAPI as an engineering artifact | Change a minimal API contract, predict validation failure, then repair it | Reviewed OpenAPI change and validation note | 4 h |
| 5 | Python SDK reference pipeline | First generate Reference from docstrings in a course-built minimal Python SDK example; then fork PyMilvus and run a controlled 1–2-method docstring experiment | Reproducible minimal SDK pipeline, reviewed PyMilvus patch, and source-to-output note | 6 h |
| 6 | Documentation quality automation | Choose a quality risk, add a check, and interpret a failing run | CI/check design note and passing check | 4 h |
| 7 | Multi-SDK governance and collaboration | Design a review and release check that detects semantic drift across REST, Python, Java, Go, and Node.js surfaces | Cross-SDK governance workflow and review evidence | 3 h |
| 8 | Measurement and portfolio narrative | Define defensible quality indicators; tell the problem–decision–result story | Case study and short demo | 4–5 h |

## The two threads

| Thread | Lessons | What it proves |
| --- | --- | --- |
| Documentation architecture | 1, 2, 7, 8 | You can define a layered, multi-language system and help it stay coherent. |
| Reference engineering | 3, 4, 5, 6 | You can keep REST and SDK facts traceable, testable, and maintainable. |

## What “done” means

The sprint is complete only when you can explain each major decision aloud, reproduce the important checks, and point to your own reviewed evidence. A green build alone is not completion.

## Starting point

**Current lesson: Lesson 3 — Reference source strategy.** Trace one technical fact from its authoritative REST or SDK source through extraction and generation to the reader-facing output, then identify where drift can enter the path.
