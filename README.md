# ArtiSync

ArtiSync revolutionizes the way researchers manage scholarly articles, offering streamlined organization for what you've read, are exploring, and need to read. 
Say goodbye to chaos and hello to the convenience of synchronized, accessible research on any device, empowering you to take control of your academic journey.

## Table of Contents

- [Contributing](#contributing)
  - [Branches](#branches)
  - [Pull Requests](#pull-requests)
  - [Commits](#commits)

## Contributing

### Branches
When working on an issue, a new branch must be created in which the implementation
will be done. The convention for branch names is described as follows:

```
tag/small-summary/issue-id
```

**tags**:
* feat -> new feature
* refactor -> refactoring
* fix -> bug fix
* test -> test related
* docs -> documentation


### Pull Requests

The PR title should follow exactly the following pattern:

```
#X - <description or issue title>
```

Where x is the issue number. The PR description should contain a link to the
issue that it is related to. Possibly with the `closes` keyword, so that the
issue is automatically closed when the PR is merged.

#### How to create a PR

1. Fork the repository
2. Create a new branch for your feature/bugfix
3. Push your changes to your branch
4. Create a pull request
5. Include a clear and concise description of your changes
6. Wait for the PR to be reviewed and merged

The pull requests names should be descriptive and concise. The verbs should be in
the imperative form (e.g., "Insert default article states", "Refactor forgot
password flow").

### Commits

The commit messages should follow the _semantic commit messages_ pattern. Commits
are organized into the following categories:

* feat: new feature
* fix: bug fix
* refactor: rewrite/restructure code but does not change behavior
* perf: performance specific commits
* style: formatting, missing semi colons, white space, formatting, etc
* test: adding missing tests, refactoring tests
* docs: changes to the documentation, TODOs and comments
* build: affect build components, eg. build tool, ci pipeline, dependencies, project version, etc
* ops: operational components, eg. infrastructure, deployment, backup, recovery, etc
* chore: miscellaneous commits, eg. modifying .gitignore
* merge: #X from lutzzdias/branch-name -> X is the PR number

The commit message verbs should be in the imperative form (e.g., "Fix issue with
user authentication", "Add new article state"). The commit message should also
include a brief description of the changes that were made.

Since this repo contains both backend and frontend code, after the commit category
tag, there should be a tag (within brackets) indicating which part of the project was affected by
the commit. For example:

```
fix [server]: rename article schema table name
```
