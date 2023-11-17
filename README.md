# ArtiSync

Welcome to ArtiSync, a groundbreaking tool transforming the way researchers manage scholarly articles. Experience the ease of streamlined organization for what you've read, are exploring, and need to read. Bid farewell to chaos and embrace the convenience of synchronized, accessible research on any device, empowering you to take control of your academic journey.

## Table of Contents

- [Contributing](#contributing)
  - [Branching Strategy](#branches)
  - [Pull Requests](#pull-requests)
  - [Commit Guidelines](#commits)

## Contributing

### Branching Strategy

When tackling an issue, initiate a new branch for the implementation. Follow this naming convention:

```
tag/small-summary/issue-id
```

**Tags**:
* feat -> new feature
* refactor -> refactoring
* fix -> bug fix
* test -> test related
* docs -> documentation

### Pull Requests

The PR title should adhere to this pattern:

```
X - <description or issue title>
```

Where "X" is the issue number. Include a link to the related issue in the PR description, possibly with the `closes` keyword for automatic issue closure upon PR merge.

#### How to Create a PR

1. Fork the repository
2. Create a new branch for your feature/bugfix
3. Push your changes to your branch
4. Create a pull request
5. Provide a clear and concise description of your changes
6. Wait for the PR to be reviewed and merged

Ensure PR names are descriptive and concise. Use verbs in the imperative form (e.g., "Insert default article states," "Refactor forgot password flow").

### Commit Guidelines

Commit messages should follow the _semantic commit messages_ pattern and fall into these categories:

* feat: new feature
* fix: bug fix
* refactor: rewrite/restructure code without changing behavior
* perf: performance-specific commits
* style: formatting, missing semicolons, white space, etc.
* test: adding missing tests, refactoring tests
* docs: changes to documentation, TODOs, and comments
* build: affect build components, e.g., build tool, CI pipeline, dependencies, project version, etc.
* ops: operational components, e.g., infrastructure, deployment, backup, recovery, etc.
* chore: miscellaneous commits, e.g., modifying .gitignore
* merge: #X from lutzzdias/branch-name -> X is the PR number

Commit message verbs should be in the imperative form (e.g., "Fix issue with user authentication," "Add new article state"). Also, include a brief description of the changes made.

Given that this repository contains both backend and frontend code, append a tag (within brackets) after the commit category tag, indicating which part of the project was affected by the commit. For example:

```
fix [server]: rename article schema table name
```

