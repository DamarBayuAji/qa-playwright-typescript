# Playwright Automation Testing Project

## Prerequisites

Before running this project, make sure the following software is installed:

### 1. Install Node.js

Download Node.js from:

https://nodejs.org

Recommended version:
- LTS Version

After installation, verify Node.js and npm:

```bash
node -v
npm -v
```

Explanation:
- `node -v`
  → checks Node.js version
- `npm -v`
  → checks npm version

---

# Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Explanation:
- Downloads the project from GitHub to local computer.

---

## 2. Open Project Folder

```bash
cd qa-playwright
```

Explanation:
- Moves into the project directory.

---

## 3. Install Dependencies

```bash
npm install
```

Explanation:
- Installs all required dependencies from `package.json`.

This command will automatically install:
- Playwright
- TypeScript
- Other required libraries

---

## 4. Install Playwright Browsers

```bash
npx playwright install
```

Explanation:
- Downloads Playwright browser binaries:
  - Chromium
  - Firefox
  - Webkit

This project uses:
- Chromium / Chrome

---

# Run Automation Tests

## Run All Tests

```bash
npx playwright test
```

Explanation:
- Runs all automation test files.

---

## Run Login Test Only

```bash
npx playwright test tests/login.spec.ts
```

# Open HTML Report

```bash
npx playwright show-report
```

Explanation:
- Opens Playwright HTML execution report.

The report includes:
- Passed tests
- Failed tests
- Error logs
- Screenshots
- Videos

---

# Author

Damar Bayu
```

Explanation:
- Runs login automation only.
