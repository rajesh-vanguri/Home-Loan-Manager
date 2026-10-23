# Home Loan Manager

A home loan tracker built as a single HTML file. No build step, no server. Chart.js and the Inter font load from CDNs.

Live: [Home Loan Manager](https://rajesh-vanguri.github.io/Home-Loan-Manager/)

## Features
- Full amortization schedule, monthly and yearly
- Rate change, prepayment and fee tracking
- Best time to prepay insight
- What-if simulator (simulation only, never changes your schedule)
- Dark mode, desktop and mobile layouts
- Export schedule as CSV, save chart as PNG

## Updating your loan
All loan data lives in `config.js` (keep it next to `index.html`):

| Key | What it is |
| --- | --- |
| `loan` | amount, starting rate, tenure (months), first EMI debit date (it pays the previous month's interest cycle), `onChange` (`"tenure"` or `"emi"`) |
| `loan.preEmiInterest` | pre-EMI interest paid before the first EMI (counted as interest paid) |
| `rateChanges` | `{ date, rate, note }` |
| `prepayments` | `{ date, principal, interest, note }` |
| `fees` | `{ date, amount, desc }` |

Dates are `YYYY-MM-DD`. Add an entry, commit and push; GitHub Pages serves the new data on every device. A mistake in `CONFIG` shows a list of what to fix instead of a broken page.

## Run locally
Open `index.html` in a browser.

## License
MIT
