# OrMatic — Daily Gold Price Tracker

A Google Apps Script that automatically fetches the daily price of a 10g gold bar and logs it, with the date, into a Google Sheets spreadsheet — building a historical price log with zero manual effort.

## Demo

_Add a screenshot or short GIF here showing the spreadsheet with logged prices over time (and optionally the companion Android app)._

## Features

- **Automated price fetching** — Scrapes the current 10g gold bar price from a public pricing page.
- **Daily logging** — Appends the price and the corresponding date to the spreadsheet every day, building a time series automatically.
- **Scheduled trigger** — A one-time setup call installs a daily time-based trigger, so the script runs on its own with no manual intervention.

## How it works

| Function | Purpose |
|---|---|
| `fetchGoldPrice()` | Fetches the pricing page with `UrlFetchApp` and extracts the current price from the HTML using a regular expression. |
| `updateGoldPrice()` | Calls `fetchGoldPrice()`, then appends the price (column B) and today's date (column A) to the next free row of the active sheet. |
| `setDailyTrigger()` | Registers a time-based trigger that calls `updateGoldPrice()` once a day. Run this once to activate daily automation. |

## Getting started

1. **Create a spreadsheet**
   Create a new Google Sheets file (or use an existing one) to store the price history.

2. **Add the script**
   Go to `Extensions > Apps Script`, create a script file, and paste the content of the project's script file in.

3. **Activate the daily trigger**
   In the Apps Script editor, run `setDailyTrigger()` once. This schedules `updateGoldPrice()` to run automatically every day.

## Notes

- The price is extracted by parsing HTML from a specific public pricing page rather than through an official API, so the script may need adjusting if that page's structure changes.
- Column A stores the log date and column B the corresponding price — any downstream tool (dashboard, chart, app) can read directly from these two columns.

## Potential use cases

- Tracking personal gold price trends over time without manual lookups.
- Feeding a dashboard, chart, or companion app that reads historical price data from the sheet.
- Educational use for finance students studying market trend analysis.

## Tech stack

- Google Apps Script (JavaScript)
- Google Sheets

## Author

Developed by [Clément Vongsanga](https://github.com/Synergy-XVortex). Questions, suggestions, and pull requests are welcome.
