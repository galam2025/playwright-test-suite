🚀 Playwright Test Automation Framework
This repository contains an end-to-end Playwright test automation framework built using TypeScript. 

✅ Key Features & Tech Stack:
🎭 Playwright – Modern automation framework for UI testing
🔹 JavaScript - maintainable tests
📂 Page Object Model (POM) – Structured test architecture
📊 Data-Driven Testing – JSON-based test data for flexibility
⚡ Fast & Reliable – Tests run in parallel with retry mechanisms
📸 Auto-Screenshots & Video Recording – Debugging made easy
🌐 Cross-Browser Testing – Supports Chromium, Firefox, and WebKit
🔄 CI/CD Ready – Can be integrated into GitHub Actions for automated test execution
🛠️ Project Structure:

playwright-test-suite/
│-- tests/                        # Test cases
│   ├── dynamic-tests.spec.ts     # Data-driven test execution
│   ├── login.ts                  # Login utility
│-- pages/                        # Page Object Model (POM) files
│   ├── login.page.ts
│   ├── dashboard.page.ts
│-- test-data/                    # JSON-based test data
│   ├── test-data.json
│-- utils/               # Helper functions & config
│   ├── config.ts        # Base URL & credentials
│-- playwright.config.ts # Playwright configuration file
│-- package.json         # Dependencies & scripts

📌 Test Scenarios Automated:
1️⃣ Login Flow – Validates successful authentication
2️⃣ Navigation Validation – Ensures correct page navigation
3️⃣ Dynamic Test Suite – Verifies UI elements dynamically
4️⃣ Task Management Tests – Checks items under different categories (To-Do, In Progress, Done)
5️⃣ Tag Verification – Confirms correct task categorization (Feature, Bug, High Priority)

🚀 How to Run the Tests
1️⃣ Clone the Repository
git clone https://github.com/galam2025/playwright-test-suite.git
cd playwright-test-suite
2️⃣ Install Dependencies
npm install
3️⃣ Run the Tests
npx playwright test
4️⃣ View Test Reports
npx playwright show-report

🌟 Why This Framework?
This automation framework follows industry best practices, ensuring scalability, maintainability, and efficiency in UI testing. The data-driven approach allows easy modification of test cases, and the POM structure enhances reusability. The framework is built for modern automation needs, supporting parallel execution, cross-browser testing, and headless mode for faster CI/CD runs.

🔹 technical assessment.
📌 Built using Playwright + JavaScript + POM + Data-Driven Testing.
📢 Want to Contribute?
Feel free to fork this repo, raise issues, or submit PRs to enhance it further! 🚀
