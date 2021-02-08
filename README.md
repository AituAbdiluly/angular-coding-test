# Angular Coding Test

## Clone project

    git clone https://github.com/AituAbdiluly/angular-coding-test.git

## Installation

With `npm`:

    cd client && npm install
    
    cd .. && npm install


Optionally, with `Yarn`:

    cd client && yarn
    
    cd .. && yarn
    

## Run project

This will run server and client.

With `npm`:

    npm run dev

Optionally, with `Yarn`:

    yarn dev


App will run on http://localhost:4200

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