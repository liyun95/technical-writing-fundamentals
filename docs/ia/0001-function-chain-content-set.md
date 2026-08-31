# Function Chain content architecture brief

## Status

Accepted as Lesson 2 learning evidence on 2026-08-31. This is not a production Milvus documentation plan. Version-sensitive Function Chain behavior and SDK coverage remain subject to source, test, and owner verification.

## Reader problem

When a user wants to rerank vector-search results using business-relevant signals, the user needs to understand whether Function Chain fits the scenario, configure an appropriate chain, apply it to a search, verify the resulting order, and consult the exact contract while implementing it.

This is one feature-level problem with several reader states. It should not be forced into one Diátaxis type or one all-purpose page.

## Reader states and entry hypothesis

| Reader state | Immediate need | Likely entry |
| --- | --- | --- |
| Learning Function Chain through a controlled first experience | Build a mental and practical foundation without choosing among every option | Tutorial |
| Already performs vector search and wants to add business-signal reranking | Complete a concrete change in an existing search workflow | How-to |
| Implementing or debugging a chain | Look up signatures, fields, types, supported values, constraints, errors, and versions | Reference |
| Evaluating whether and how to use a chain | Understand the motivation, data flow, execution order, boundaries, and trade-offs | Explanation |

There is no universal first page. For the learner's stated scenario—an existing vector-search user adding reranking—the How-to is the primary entry. A reader new to Function Chain may enter through the Tutorial, while implementation work may land directly in Reference through search.

## Proposed content set

| Type | Page promise | Starting state and success | Keep elsewhere |
| --- | --- | --- | --- |
| Tutorial | Learn Function Chain by reranking one controlled search result set with one business signal | The lesson supplies the required collection, data, search, and one preselected chain. The reader verifies that the result order changes as predicted. | Alternative chain patterns, exhaustive parameters, and production design trade-offs |
| How-to | Add business-signal reranking to an existing vector-search workflow | The reader already has a searchable collection with the required fields. The guide defines one chain for the goal, applies it to search, and verifies the result. | A catalog of every operation or mode; extended execution-model explanation |
| Reference | Look up the Function Chain configuration and the API surfaces that accept it | The reader can find the object structure, stages, operations, expressions, inputs, outputs, parameters, supported values, defaults, constraints, errors, and version availability within a stated coverage boundary. | End-to-end task instruction and lengthy rationale |
| Explanation | Understand how ordered Function Chain processing changes search results | The reader can trace signal sources, transformations, execution order and placement, resulting ranking, limits, and design trade-offs. | Full SDK syntax, exhaustive support matrices, and step-by-step setup |

## Linking hypothesis

- Link from the How-to to Reference at the point where the reader constructs the chain and needs exact supported values.
- Link from the How-to to Explanation when a design choice depends on execution semantics or trade-offs.
- Link from the Tutorial to the How-to as the next task and to Reference for further supported configuration.
- Link from Reference examples back to the focused How-to instead of expanding Reference into a complete workflow.
- Link from Explanation to both the task-oriented How-to and the stable Reference contract.

Reference is therefore a high-priority adjacent destination, as the learner proposed, but it is not the only useful link. Explanation becomes necessary at decisions where exact syntax alone cannot tell the reader which design fits the application.

## Important correction and evidence gap

The learner's initial Tutorial path included creating “a collection with a Function Chain.” Current public evidence does not yet justify that wording. On the PyMilvus `master` branch, `MilvusClient.search()` exposes `function_chains`, and the public protocol describes a Function Chain as an ordered execution plan. This suggests a search-time boundary, while the collection must still contain any fields the chain reads. The intended target version and actual lifecycle must be verified before choosing page steps.

Required verification before drafting product documentation:

1. target Milvus and SDK versions, release status, and supported languages;
2. the API operations that accept Function Chain and the exact attachment point;
3. supported stages, operations, expression forms, inputs, outputs, parameters, and limits;
4. required collection fields, loading or indexing prerequisites, and execution placement;
5. validation errors, runtime failure modes, and observable result semantics;
6. one tested canonical scenario whose fields, signals, operation order, and expected ranking stay consistent across all pages.

## Source evidence consulted

- [PyMilvus `MilvusClient.search()` on `master`](https://github.com/milvus-io/pymilvus/blob/master/pymilvus/milvus_client/milvus_client.py)
- [Milvus protocol `FunctionChain` definition](https://github.com/milvus-io/milvus-proto/blob/master/proto/schema.proto)
- [Diátaxis compass](https://www.diataxis.fr/compass/)
