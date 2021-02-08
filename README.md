# Angular Coding Test

## Installation

With `npm`:

    npm install

Optionally, with `Yarn`:

    yarn

## Run

With `npm`:

    npm run dev

Optionally, with `Yarn`:

    yarn dev

## Structure

```bash
├── client
│   ├── angular.json
│   ├── e2e
│   │   ├── protractor.conf.js
│   │   ├── src
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── app.po.ts
│   │   └── tsconfig.json
│   ├── package.json
│   ├── README.md
│   ├── src
│   │   ├── app
│   │   │   ├── alert
│   │   │   │   ├── alert.component.html
│   │   │   │   ├── alert.component.scss
│   │   │   │   └── alert.component.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── calculator
│   │   │   │   ├── calculator.component.html
│   │   │   │   ├── calculator.component.scss
│   │   │   │   └── calculator.component.ts
│   │   │   └── data.service.ts
│   │   ├── assets
│   │   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── polyfills.ts
│   │   ├── styles.scss
│   │   └── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   ├── tslint.json
│   └── yarn.lock
├── controllers
│   └── calcController.ts
├── package.json
├── README.md
├── routes
│   └── calcRoutes.ts
├── server.ts
├── tsconfig.json
├── tslint.json
└── yarn.lock
```