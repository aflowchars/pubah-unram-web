/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		hero: {
			id: 1,
			src: 'https://plus.unsplash.com/premium_photo-1661727502961-a69d64bea7c1?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			alt: 'Resource Centre & Self-Access Centre',
			title: 'Resource Centre & Self-Access Centre',
			description: `Akses mandiri kepada peserta program dalam memperoleh bahan bacaan, sumber daya belajar, dan teknologi untuk mendukung pembelajaran mereka.`
		},
		nav_page: {
			left: {
				link: '/programs/translation-&-interpreting',
				label: 'Translation & Interpreting'
			},
			right: {
				link: '/programs/bipa',
				label: 'BIPA'
			}
		}
	};
}
