import {PlaywrightTestConfig } from '@playwright/test';


const currentDateTime = new Date(Date.now())
  .toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
  .replace(/[:/,.]/g, "_")
  .replace(/[ .]/g, "T");


const BVS_Config: PlaywrightTestConfig={
    testDir: './tests',
    expect: { timeout: 5000 },
    timeout: 200000,

    reporter: [
        [
          "html",
          { outputFolder: `playwright-report/${currentDateTime}`, open: "never" },
        ],

      ],
}

export default BVS_Config;