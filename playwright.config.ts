import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 90 * 1000,
  expect:{
    timeout: 60 * 1000,
  },
 
  use: {
    browserName:'chromium',
    headless:false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   
  ],
  
});

