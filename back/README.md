# Server

## Table of Contents

-   [Dependencies](#dependencies)
-   [Environment](#environment)
-   [Migrations](#migrations)
-   [Structure](#structure)
-   [License](#license)

## Getting Started

### Dependencies

This project is built with [NestJS](https://nestjs.com/), using
[typeORM](https://typeorm.io/) as its _ORM_ and
[PostgreSQL](https://www.postgresql.org/) as its database. In order to
facilitate development, we use [Docker](https://www.docker.com/) to run the
database in a container.

The **package manager** used is [pnpm](https://pnpm.io/), which is very similar
to npm but is faster and more efficient.

### Environment

This project reads environment variables from a `.env` file. You have to rename
the `.env.example` file to `.env` and change its values for the project to work.

## Migrations

Migrations are a way to manage and version control changes to a database schema.
They provide a systematic and reproducible way to make and track modifications
to the structure of a database. They consist of both an "up" and a "down"
method, this allows developers to move both forward and backward in the
evolution of the database schema.

### Creating Migrations

The name of the migration should be lower case and use dashes to separate words.
Verbs should be in the imperative form.

```bash
pnpm typeorm:migration:create ./src/infra/database/migrations/{name-of-migration}
```

### Reverting Migrations

In case the migration you created did not have the desired effect, you can
revert it. Reverting will undo all the changes that were made by the last
migration, but it will not delete the migration file itself. This allows the
developer to fix whatever was wrong with the migration.

```bash
pnpm run typeorm:migration:revert
```

## Structure

The overall folder structure is the following:

```
src/
├── common/
│   ├── guard/
│   ├── helper/
│   ├── pipe/
│   ├── type/
│   └── common.module.ts
├── infra/
│   └── database/
│       ├── factory/
│       ├── migration/
│       ├── seed/
│       ├── data-source.ts
│       └── typeorm.module.ts
├── modules/
│   ├── module/
│   │   ├── controller/
│   │   │   ├── module.controller.ts
│   │   │   └── module.controller.spec.ts - tests
│   │   ├── dto/
│   │   │   ├── create-module.dto.ts
│   │   │   └── ...
│   │   ├── entity/
│   │   │   └── name.entity.ts
│   │   ├── repository/
│   │   │   ├── module.repository.ts
│   │   │   └── module.repository.spec.ts - tests
│   │   ├── schema/
│   │   │   └── module.schema.ts - typeorm schema
│   │   ├── service/
│   │   │   ├── module.service.ts
│   │   │   └── module.service.spec.ts - tests
│   │   └── module.module.ts
│   ├── .../
│   └── app.module.ts
└── main.ts
```

## License

This project is licensed under the [MIT License](LICENSE.md)
