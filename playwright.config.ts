import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';
import BVS_Config from './src/com/testing//bvs/bvs.config';
import AI_Config from './src/com/testing/ai/ai.config';

export default defineConfig({

  projects:[

    {
      name: 'ai',

    },

    {
      name: 'bvs',
      ...BVS_Config,

    }
  ]
})