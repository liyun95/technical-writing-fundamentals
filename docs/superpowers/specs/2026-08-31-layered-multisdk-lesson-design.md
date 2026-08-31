# Lesson 1 分层选型与多 SDK 文档架构设计

## 背景

原 Lesson 1 把 Docusaurus、MkDocs、Sphinx 和 GitBook 当作同一层的替代方案，并要求学习者直接阅读长篇对比、分配权重。这超出了学习者当前的知识基础，也没有准确反映 Milvus 文档工作的真实范围。

更准确的工作场景是：团队同时维护 RESTful API 文档以及 Python、Java、Go、Node.js 等 SDK Reference；其中 Python SDK Reference 当前最完善，可作为成熟基线。学习者希望重点补齐 OpenAPI 与 REST Reference 工程能力，同时掌握多 SDK 文档体系的一致性和治理方法。

## 学习目标

Lesson 1 完成后，学习者应能够：

1. 区分文档门户、REST Reference、各语言 SDK Reference 和治理层的职责。
2. 解释为什么一个多语言文档系统通常不是“选择唯一框架”。
3. 根据内容来源和团队约束，为不同层选择不同类型的工具。
4. 识别至少一个多 SDK 一致性风险，并提出可验证的治理办法。

## 课程架构

### 四层模型

| 层 | 职责 | 本课中的典型候选 |
| --- | --- | --- |
| 文档门户 | 教程、How-to、概念、统一导航和发布体验 | Docusaurus、MkDocs、GitBook |
| REST Reference | 从接口契约校验并生成 REST Reference | OpenAPI Specification 与独立生成/渲染工具 |
| SDK Reference | 从各语言源码、类型和注释提取事实 | Python、Java、Go、Node.js 的语言原生工具链 |
| 治理层 | 版本、CI、术语、覆盖率、跨 SDK 一致性与发布流程 | GitHub 工作流、检查脚本、模板和规范 |

这个模型不假设一个工具承载全部职责。门户可以统一读者体验，而 REST 与各 SDK 保留独立、可追溯的事实来源和生成管线。

### 学习深度

- **深入实践：**OpenAPI、REST Reference 契约与校验。
- **深入分析：**以成熟的 Python SDK Reference 为基线，理解源码、类型、docstring 和生成结果之间的关系。
- **体系理解：**Java、Go、Node.js 用于练习跨 SDK surface mapping、一致性检查和发布治理；八周内不重建四套生成器。

## 交互流程

### 1. 从具体变更开始

页面先给出一个真实任务：同一个 API 新增参数，需要同步 REST、Python、Java、Go 和 Node.js Reference。学习者先判断每种事实应该在哪里修改，而不是先背框架功能。

### 2. 可视化数据流

展示“技术源 → 生成/提取 → 门户 → 质量门禁”的路径。学习者点击不同输出，查看其事实源、构建责任和潜在失败点。

### 3. 分层比较

一次只比较同一层的候选：

- 门户层比较自托管 docs-as-code 与托管协作平台。
- REST 层比较手写 Reference 与 OpenAPI 驱动的 Reference。
- SDK 层比较通用页面生成与语言原生提取。

不再把门户框架与 SDK 生成工具混成一个总分表。

### 4. 场景选择与即时后果

学习者针对场景选择架构后，页面展示：获得的能力、增加的维护责任、容易出现的漂移，以及结论的反转条件。反馈解释取舍，不使用简单的“正确/错误”。

### 5. 学习者产出

学习者完成两个任务：

1. 把 REST、Python、Java、Go、Node.js 的事实源和发布输出放入正确层次。
2. 为本项目写一段分层架构决策，说明门户、REST 管线、SDK 管线和治理层如何协作。

通过反馈后，学习者再修订 ADR；现有 ADR 仅作为待评审样例，不视为学习成果。

## 课程文件变化

- 更新 `MISSION.md`：明确 REST/OpenAPI 与多 SDK Reference 的体系目标。
- 更新 `COURSE.md`：Lesson 1 改为分层选型；API Reference 与 SDK 课程覆盖多 SDK 治理。
- 更新 `NOTES.md`：记录 Python SDK Reference 是成熟基线，REST/OpenAPI 是重点补齐方向。
- 重写 `lessons/0001-select-a-documentation-framework.html` 为场景实验室。
- 更新 `reference/framework-selection-cheatsheet.html`，从“选一个框架”改为“先识别所选层次”。
- 新增一个多 SDK Reference 架构速查页面；所有课程页面继续复用 `assets/course.css`。

## 内容来源

所有工具能力声明必须链接官方来源。实现课程时只选与本课直接相关的资料：OpenAPI Specification、Docusaurus、Sphinx/Python、Javadoc、Go documentation conventions、TypeDoc 和 GitBook 的官方文档。长篇研究资料保留为参考，不作为学习入口。

## 错误与边界处理

- 学习者无法判断某个工具时，页面应引导其标记“缺少证据”，而不是猜测评分。
- 同一个 SDK 在不同版本或仓库中的真实生成方式可能不同；课程只教授判断方法，不声称复刻 Milvus 当前内部流水线。
- 公开练习继续使用独立、合成的向量检索示例，不使用雇主内部材料。
- 页面中的即时反馈只解释架构后果；最终理解由聊天中的开放回答验证。

## 验证方式

### 页面验证

- Lesson 1、速查表和所有本地资源链接返回 HTTP 200。
- 页面在桌面和窄屏下可阅读，打印样式不破坏表格与架构卡片。
- 不再把 Markdown 原始文件作为必读入口。

### 学习验证

Lesson 1 通过需要同时满足：

1. 学习者能正确指出四个层次。
2. 学习者不会再把 Docusaurus 或任一门户框架视为全部 API 事实的拥有者。
3. 学习者能说明 Python 成熟基线如何帮助评估其他 SDK，而不是把 Python 当作唯一 SDK。
4. 学习者能给出一个跨 SDK 漂移风险和相应的验证办法。

只有满足这些标准后才新增学习记录。

## 非目标

- 不在 Lesson 1 中安装或运行 Java、Go、Node.js 的生成工具。
- 不要求学习者为四个 SDK 建立完整 scorecard。
- 不把所有语言强制统一为同一种源格式或生成器。
- 不在本课决定 Milvus 生产文档系统应采用的具体工具组合。
