# ArtiSync

ArtiSync is a website focused on the management of articles. It aims to help researchers manage the articles they read for a specific article

## Table of Contents

- [Contributing](#contributing)
  - [Commits](#commits)
  - [Branches](#branches)
- [Scope Specific](#scope-specific)

## Contributing

In order to maintain organization some patterns have been set for the development process. These patterns include how commit messages should be structured, naming of branches and pull requests.

### Commits

A commit should have the following structure:

```
tag [scope]: message
```

Where:

- **tag** - indicates the type of commit.
  - _feat_: new feature
  - _fix_: bug fix
  - _refactor_: rewrite/restructure code without changing behavior
  - _perf_: performance-specific commits
  - _style_: formatting, missing semicolons, white space, etc.
  - _test_: adding missing tests, refactoring tests
  - _docs_: changes to documentation, TODOs, and comments
  - _build_: affect build components, e.g. CI pipeline, dependencies, project version, etc.
  - _ops_: operational components, e.g. deployment, backup, recovery, etc.
  - _chore_: miscellaneous commits, e.g., modifying .gitignore
  - _merge_: the autogenerated message starting from the _#issue-number_
- **scope** - specifies the area of the codebase affected by the changes
  - client
  - server
  - docs
- **message** - provides a concise summary of the changes using imperative verbs.

### Branches

When tackling an issue, create a new branch for the implementation. Follow this naming convention:

```
issue-id/scope/tag/short-description/
```

**Tags**:

- feat -> new feature
- fix -> bug fix
- refactor -> refactoring
- test -> test related
- docs -> documentation

## Scope Specific

Each of the _scope folders_ has its own README explaining things further. You should check out those in order to gain a better understanding of the code structure and design decisions.

- [server](https://github.com/lutzzdias/artisync/tree/main/server)
- [client](https://github.com/lutzzdias/artisync/tree/main/client)
- [docs](https://github.com/lutzzdias/artisync/tree/main/docs)
