# ArtiSync

## Server

This README is related to the backend of ArtiSync. It contains a few guidelines 
for how to contribute, as well as some basic information about the project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing Dependencies](#installing-dependencies)
  - [Env Variables](#env-variables)
- [Migrations](#migrations)
  - [Creating Migrations](#creating-migrations)
  - [Reverting Migrations](#reverting-migrations)
- [Contributing](#contributing)
  - [Pull Requests](#pull-requests)
  - [Commit Patterns](#commit-patterns)
- [License](#license)

## Getting Started

Provide information on how to set up the project for development.

### Prerequisites

This project is built with [NestJS](https://nestjs.com/), using [typeORM](https://typeorm.io/) 
as its ORM and [PostgreSQL](https://www.postgresql.org/) as its database. In order
to facilitate development, we use [Docker](https://www.docker.com/) to run the 
database in a container.

### Installing Dependencies

The **package manager** used is [pnpm](https://pnpm.io/), which is very similar
to npm but is faster and more efficient.

_You must have **node** installed in order to pnpm to work._

There are multiple ways of installing pnpm, some are listed below:
- using npm:
```bash
npm install -g pnpm
```

- using homebrew:
```bash
brew install pnpm
```

- using chocolatey:
```bash
choco install pnpm
```

### Env Variables
This project reads environment variables from a `.env` file. You should create
your own `.env` file in the root directory of the project, and add the following
variables to it:

```
HOST=your-host
DB_PORT=9999
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
```

## Migrations

Migrations are a way to manage and version control changes to a database schema.
They provide a systematic and reproducible way to make and track modifications to 
the structure of a database, such as adding new tables, altering existing ones, 
or creating indexes. 
Migrations typically consist of both an "up" migration to apply changes and a "down" 
migration to revert them, ensuring that developers can move both forward and backward 
in the evolution of the database schema.

### Creating Migrations

In order to create a migration, you must execute the following command (assuming
you're in the root directory of the project):

```bash
pnpm run typeorm:migration:create ./src/infra/database/migrations/{name-of-migration}
```

- The name of the migration should be lower case and use dashes to separate words.
- It's name usually describes the changes that are being made to the database in a concise
manner. 
- The verbs should be in the imperative form (e.g., "create-user-table",
"insert-default-states").

### Reverting Migrations

In case the migration you created did not have the desired effect, you can revert
it by executing the following command (assuming you're in the root directory of
the project):

```bash
pnpm run typeorm:migration:revert
```

This will undo all the changes that were made by the last migration. But it will
not delete the migration file itself, so you can reapply it after fixing what was
wrong with it.

## Contributing

This section provides a few guidelines about patterns that should be followed when
contributing to the project.

### Pull Requests

In order to create Pull Requests:

1. Fork the repository
2. Create a new branch for your feature/bugfix
3. Push your changes to your branch
4. Create a pull request
5. Include a clear and concise description of your changes
6. Wait for the PR to be reviewed and merged

The pull requests names should be descriptive and concise. The verbs should be in
the imperative form (e.g., "Insert default article states", "Refactor forgot
password flow").

### Commit Patterns

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

The commit message verbs should be in the imperative form (e.g., "Fix issue with
user authentication", "Add new article state"). The commit message should also
include a brief description of the changes that were made.

Since this repo contains both backend and frontend code, after the commit category
tag, there should be a tag (within brackets) indicating which part of the project was affected by
the commit. For example:

```
fix [server]: rename article schema table name
```
