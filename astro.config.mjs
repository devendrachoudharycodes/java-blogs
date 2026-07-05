import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace with your actual GitHub username
  site: 'https://devendrachoudharycodes.github.io', 
  
  // Replace with your repository name. 
  // Note: Remove the 'base' line entirely if your repo is exactly named 'your-github-username.github.io'
  base: 'java-blogs',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],

});
