# Layered Multi-SDK Lesson Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Lesson 1's single-framework scorecard with a short, interactive lesson that teaches layered selection for a REST API and Python, Java, Go, and Node.js SDK references.

**Architecture:** Keep each lesson as standalone HTML while reusing the existing course stylesheet. Add one progressively enhanced JavaScript component for immediate classification feedback, one framework-layer decision aid, and one multi-SDK architecture reference. Keep open learner reasoning in chat so browser feedback supports—but does not substitute for—instructor review.

**Tech Stack:** Semantic HTML, shared CSS, vanilla JavaScript, Markdown course records, local HTTP server, link and markup smoke checks.

---

### Task 1: Align the learning contract with the approved scope

**Files:**
- Modify: `MISSION.md`
- Modify: `COURSE.md`
- Modify: `NOTES.md`
- Modify: `RESOURCES.md`

- [ ] **Step 1: Verify the old single-framework framing is still present**

Run:

```bash
rg -n "weighted comparison|Framework selection|Python SDK reference is the only|四个文档框架" MISSION.md COURSE.md NOTES.md RESOURCES.md
```

Expected: `COURSE.md` still describes Lesson 1 as a weighted comparison of four frameworks.

- [ ] **Step 2: Update the mission and course sequence**

Make the following exact conceptual changes:

- `MISSION.md`: add the ability to design a layered portal, REST/OpenAPI, multi-SDK reference, and governance system; state that Python is a mature comparison baseline rather than the only SDK.
- `COURSE.md`: rename Lesson 1 to layered documentation-system selection; make its evidence a learner-authored architecture decision; revise Lessons 3, 5, and 7 so REST traceability, Python deep analysis, and Java/Go/Node consistency governance are visible.
- `NOTES.md`: record the user's real working context and the desired depth split.
- `RESOURCES.md`: add official Javadoc, Go doc comment, and TypeDoc sources and describe what each supports.

- [ ] **Step 3: Verify the new scope language**

Run:

```bash
rg -n "OpenAPI|Python|Java|Go|Node.js|治理|分层" MISSION.md COURSE.md NOTES.md RESOURCES.md
```

Expected: all four SDK languages, REST/OpenAPI, and layered governance appear in the learning contract.

- [ ] **Step 4: Commit the learning-contract update**

```bash
git add MISSION.md COURSE.md NOTES.md RESOURCES.md
git commit -m "docs: align course with multi-SDK reference work"
```

### Task 2: Add reusable interaction and layout components

**Files:**
- Modify: `assets/course.css`
- Create: `assets/layer-lab.js`

- [ ] **Step 1: Add a failing asset check**

Run:

```bash
test -f assets/layer-lab.js && rg -n "layer-flow|classification-grid|feedback-panel" assets/course.css
```

Expected: FAIL because the script and new component classes do not exist.

- [ ] **Step 2: Add shared visual components**

Extend `assets/course.css` with:

- a four-layer flow that collapses to one column on narrow screens;
- compact layer labels and source/output cards;
- accessible form controls and feedback states;
- scenario consequence panels;
- print rules that expand or preserve essential explanations.

- [ ] **Step 3: Add progressive classification feedback**

Create `assets/layer-lab.js` so that it:

- finds forms marked with `data-layer-quiz`;
- compares each select's value with `data-answer`;
- shows a specific explanation stored in `data-explanation`;
- reports the number correct without treating the result as course completion;
- leaves the exercise usable as a written worksheet when JavaScript is unavailable.

- [ ] **Step 4: Verify the assets**

Run:

```bash
test -f assets/layer-lab.js
rg -n "data-layer-quiz|data-answer|aria-live" assets/layer-lab.js
rg -n "layer-flow|classification-grid|feedback-panel|scenario-grid" assets/course.css
```

Expected: every command succeeds.

- [ ] **Step 5: Commit the shared assets**

```bash
git add assets/course.css assets/layer-lab.js
git commit -m "feat: add layered architecture lesson components"
```

### Task 3: Rewrite the decision aids around layers and traceability

**Files:**
- Modify: `reference/framework-selection-cheatsheet.html`
- Create: `reference/multi-sdk-reference-architecture.html`

- [ ] **Step 1: Verify the old reference starts with a global framework choice**

Run:

```bash
rg -n "六步算法|四个候选的默认倾向" reference/framework-selection-cheatsheet.html
```

Expected: both old sections are found.

- [ ] **Step 2: Rewrite the framework decision aid**

The revised page must:

- begin with “先识别所选层次”;
- compare Docusaurus, MkDocs, and GitBook only as portal candidates;
- compare handwritten and OpenAPI-driven REST Reference separately;
- explain that Sphinx/autodoc belongs primarily to the Python extraction pipeline in this lesson;
- retain gates, evidence, consequences, and reversal conditions without a numeric total score.

- [ ] **Step 3: Create the multi-SDK architecture reference**

The new page must include:

- the four-layer model;
- a source → extractor → output map for REST, Python, Java, Go, and Node.js;
- a drift triage algorithm: identify the changed concept, inspect every public surface, compare semantics rather than spelling, then automate the stable check;
- an explicit warning that actual Milvus generators must be verified from public repositories and are not asserted by this synthetic course;
- links to the official OpenAPI, Sphinx autodoc, Javadoc, Go doc comments, and TypeDoc documentation.

- [ ] **Step 4: Verify the references**

Run:

```bash
rg -n "先识别所选层次|门户层|REST Reference|Sphinx" reference/framework-selection-cheatsheet.html
rg -n "Python|Java|Go|Node.js|OpenAPI|漂移" reference/multi-sdk-reference-architecture.html
```

Expected: all required concepts are present.

- [ ] **Step 5: Commit the references**

```bash
git add reference/framework-selection-cheatsheet.html reference/multi-sdk-reference-architecture.html
git commit -m "docs: add layered reference architecture aids"
```

### Task 4: Rebuild Lesson 1 as a scenario laboratory

**Files:**
- Modify: `lessons/0001-select-a-documentation-framework.html`

- [ ] **Step 1: Verify the old weighted exercise is present**

Run:

```bash
rg -n "分给下面六项|合计必须等于 10|练习 A：先选权重" lessons/0001-select-a-documentation-framework.html
```

Expected: the old scoring exercise is found.

- [ ] **Step 2: Replace the lesson with the approved learning flow**

The page must contain, in this order:

1. a concrete synthetic change: add one parameter across REST and four SDK surfaces;
2. a four-layer visual map: portal, REST contract/reference, language-native SDK extraction, and governance;
3. a clear distinction between “统一读者入口” and “统一事实来源”;
4. same-layer comparisons with gain, cost, drift risk, and reversal condition;
5. an immediate seven-item classification exercise using the shared script;
6. an open architecture decision prompt covering portal, REST, Python baseline, Java/Go/Node strategy, one drift risk, one verification, and one reversal condition;
7. primary-source links and an invitation to ask the instructor when evidence is missing;
8. completion criteria matching the four learning validations in the approved design.

Do not include a full framework scorecard or present any one portal framework as the owner of REST/SDK facts.

- [ ] **Step 3: Verify the learning and interaction contract**

Run:

```bash
rg -n "四层|统一读者入口|统一事实来源|data-layer-quiz|漂移风险|反转条件|问我" lessons/0001-select-a-documentation-framework.html
! rg -n "合计必须等于 10|完整评分表" lessons/0001-select-a-documentation-framework.html
```

Expected: the new concepts and exercise exist; the old scoring requirement does not.

- [ ] **Step 4: Commit the rewritten lesson**

```bash
git add lessons/0001-select-a-documentation-framework.html
git commit -m "docs: teach layered multi-SDK framework selection"
```

### Task 5: Validate the complete lesson experience

**Files:**
- Verify: `lessons/0001-select-a-documentation-framework.html`
- Verify: `reference/framework-selection-cheatsheet.html`
- Verify: `reference/multi-sdk-reference-architecture.html`
- Verify: `assets/course.css`
- Verify: `assets/layer-lab.js`

- [ ] **Step 1: Run local file and link checks**

Run:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

In another shell, run:

```bash
for path in \
  lessons/0001-select-a-documentation-framework.html \
  reference/framework-selection-cheatsheet.html \
  reference/multi-sdk-reference-architecture.html \
  assets/course.css \
  assets/layer-lab.js; do
  curl --fail --silent --output /dev/null "http://127.0.0.1:4173/$path"
done
```

Expected: all requests return HTTP 200.

- [ ] **Step 2: Check HTML structure and referenced local assets**

Run:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path

class Parser(HTMLParser):
    pass

for path in [
    Path('lessons/0001-select-a-documentation-framework.html'),
    Path('reference/framework-selection-cheatsheet.html'),
    Path('reference/multi-sdk-reference-architecture.html'),
]:
    parser = Parser()
    parser.feed(path.read_text())
    assert parser.get_starttag_text() is not None
print('HTML parse smoke check: PASS')
PY
```

Expected: `HTML parse smoke check: PASS`.

- [ ] **Step 3: Inspect desktop and narrow-screen rendering**

Open `http://127.0.0.1:4173/lessons/0001-select-a-documentation-framework.html`, check the four-layer map at desktop and phone widths, complete the classification exercise, and verify both reference links.

Expected: no horizontal page overflow, usable controls, immediate explanatory feedback, and readable reference pages.

- [ ] **Step 4: Run repository hygiene checks**

Run:

```bash
git diff --check
rg -n -i "TODO|TBD|placeholder|待定|以后补" \
  MISSION.md COURSE.md NOTES.md RESOURCES.md assets lessons reference
```

Expected: `git diff --check` succeeds and the placeholder scan returns no matches.

- [ ] **Step 5: Commit any validation fixes**

If validation required fixes:

```bash
git add MISSION.md COURSE.md NOTES.md RESOURCES.md assets lessons reference
git commit -m "fix: polish layered lesson experience"
```

If no fixes were required, do not create an empty commit.
