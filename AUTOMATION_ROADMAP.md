# Automation Roadmap for AmaderHR

This repository currently stores manual testing assets. To add automation quickly and safely, this starter setup introduces Playwright-based smoke coverage and CI execution.

## What is included

- A Playwright test runner configuration (`playwright.config.ts`).
- A smoke suite (`tests/smoke.spec.ts`) with basic homepage and login checks.
- A GitHub Actions workflow (`.github/workflows/playwright.yml`) to run smoke tests on every push and pull request.
- NPM scripts to run all tests, smoke tests, and test discovery locally.

## How to run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set a base URL for the running AmaderHR app:

   ```bash
   export BASE_URL="https://your-amaderhr-url"
   ```

3. Run smoke tests:

   ```bash
   npm run test:smoke
   ```

## Suggested next steps

1. Replace generic selectors in `tests/smoke.spec.ts` with stable locators (`data-testid` preferred).
2. Convert the highest-priority manual test cases from the Excel sheets into automated flows.
3. Add API-level tests for critical business paths (auth, attendance, payroll).
4. Gate merges by requiring smoke suite success in branch protection rules.
5. Add nightly regression execution and publish trend dashboards.
