# Revolut Open Banking - Credit Card Transactions

This Angular application consumes transaction data and displays a clean Open Banking dashboard using Angular Material cards.  
It follows a layered and component-based architecture with sub-domains (`shared` and `creditcard`), Angular Signals for state, and `@ngx-translate` for EN | ES internationalization.

## Stack

- Angular 21 (standalone components)
- Angular Material
- TypeScript
- HttpClient
- Angular Signals
- `@ngx-translate/core` + `@ngx-translate/http-loader`

## Features

- Toolbar with Revolut logo, title, and language toggle EN | ES
- Main section with `Credit Card Transactions` title
- Transaction cards including card number, merchant, product detail, installments, schedule, date, amount, and currency
- Footer with copyright and developer information
- Accessibility basics: alt text, ARIA labels, semantic structure
- Fallback data flow from `assets/mock/banking.json` if endpoint is unavailable

## Run

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Build

```bash
npm run build
```

## Author

- Code: `u202300000`
- Name: `Dilsen Lastname`
