import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';
// https://astro.build/config

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
                        src: ['./src/assets/fonts/GothamSSm/gothamcondssm_black.otf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/GothamSSm/gothamxnarrssm_bold.otf'],
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
                        src: ['./src/assets/fonts/atkinsons/atkinson-bold.woff'],
                        weight: 500,
                        style: 'bold',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinsons/atkinson-regular.woff'],
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
    redirects: {
        '/stage-0/what-you-need-to-know-early': '/patient-space/stage-0/what-you-need-to-know-early',
        '/stage-0/small-choices-big-impact': '/patient-space/stage-0/small-choices-big-impact',
        '/stage-0/should-i-get-screened': '/patient-space/stage-0/should-i-get-screened',
        '/stage-1/understanding-your-diagnosis': '/patient-space/stage-1/understanding-your-diagnosis',
        '/stage-1/doctor-time-making-every-visit-count': '/patient-space/stage-1/doctor-time-making-every-visit-count',
        '/stage-1/navigating-your-options': '/patient-space/stage-1/navigating-your-options',
        '/stage-2/staying-grounded-through-it-all': '/patient-space/stage-2/staying-grounded-through-it-all',
        '/stage-2/body-care-that-builds-you-up': '/patient-space/stage-2/body-care-that-builds-you-up',
        '/stage-2/your-body-your-needs': '/patient-space/stage-2/your-body-your-needs',
        '/stage-3/what-to-expect-now': '/patient-space/stage-3/what-to-expect-now',
        '/stage-3/caring-for-a-tired-body': '/patient-space/stage-3/caring-for-a-tired-body',
        '/stage-3/finding-your-ground': '/patient-space/stage-3/finding-your-ground',
        '/stage-4/the-care-that-fits-you': '/patient-space/stage-4/the-care-that-fits-you',
        '/stage-4/support-for-the-day-to-day': '/patient-space/stage-4/support-for-the-day-to-day',
        '/stage-4/honouring-your-life': '/patient-space/stage-4/honouring-your-life',
    },
    vite: {
        plugins: [
            tailwindcss(),
            // viteStaticCopy({
            //     targets: [{
            //         src:'./src/**/*', // copy all files under src
            //         dest: './' // place at root of dist/
            //     }]
            // })
        ]
    },
});