import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import service from './schema/service'
import contact from './schema/contact'


export default defineConfig({
    name: 'default',
    title: 'EMA Beauty Lounge Admin',

    // These should be in your .env.local file
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [structureTool(), visionTool()],


    schema: {
        types: [service, contact],
    },
})
