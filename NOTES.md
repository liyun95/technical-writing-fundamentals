# Teaching notes

- Primary goal: a public portfolio for senior developer-documentation and documentation-architecture roles.
- Domain context: current work maintains Milvus-related documentation; public exercises must use independent, synthetic examples.
- Time budget: at least eight hours per week for an eight-week sprint.
- Teaching preference established on 2026-08-25: make the lesson explicit before work begins; learner practices first, assistant reviews and supports. Do not treat assistant-built artifacts as learner progress.
- Working context clarified on 2026-08-31: the team maintains RESTful API documentation and Python, Java, Go, and Node.js SDK References. Python normally receives new features first and is therefore the strongest feature-coverage baseline; this does not imply that its docstrings or source-to-Reference automation are mature.
- Desired depth: practise OpenAPI and REST Reference engineering deeply; analyse the Python source-to-reference pipeline deeply; learn Java, Go, and Node.js primarily through surface mapping, semantic consistency, and governance exercises.
- Interaction preference: begin with a concrete documentation change and reveal architectural consequences before asking for a written decision. Do not make a long research table the learning entry point.
- Lesson 5 scope approved on 2026-08-31: first build a small synthetic Python SDK and generate Reference from its docstrings; then fork public PyMilvus and apply the same method to one or two real public methods. Treat AI tag-diff scans as change discovery, with signatures, implementation, tests, versions, and maintainer intent used for verification.
