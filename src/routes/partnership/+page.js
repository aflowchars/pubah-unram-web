/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		hero: [
			{
				id: 1,
				image: {
					src: '/assets/home/hero-1.jpg',
					alt: 'pubah 1'
				},
				tag: 'Bekerjasama Dengan',
				title: 'BAPPEDA NTB',
				link: '/programs/bipa'
			},
			{
				id: 1,
				image: {
					src: '/assets/home/hero-2.jpg',
					alt: 'pubah 2'
				},
				tag: 'Bekerjasama Dengan',
				title: 'SMPN 2 Mataram',
				link: '/programs/course'
			}
		]
	};
}
