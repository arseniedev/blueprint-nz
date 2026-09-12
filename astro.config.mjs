import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';

export default defineConfig({
    adapter: netlify(),
    devToolbar: {
        enabled: false
    },
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Gotham',
            cssVariable: '--font-gotham',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['/assets/fonts/GothamSSm/gothamcondssm_black.otf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['/assets/fonts/GothamSSm/gothamxnarrssm_bold.otf'],
                        weight: 700,
                        style: 'bold',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Atkinsons',
            cssVariable: '--font-atkinsons',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['/assets/fonts/atkinsons/atkinson-bold.woff'],
                        weight: 500,
                        style: 'bold',
                        display: 'swap',
                    },
                    {
                        src: ['/assets/fonts/atkinsons/atkinson-regular.woff'],
                        weight: 200,
                        style: 'normal',
                        display: 'swap',
                    }
                ],
            },
        }
    ],
    integrations: [
        react(),
        icon(),
    ],
    outDir: './dist',
    publicDir: './public',
    redirects: {},
    vite: {
        plugins: [
            tailwindcss(),
        ]
    },
});