/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		hero: {
			id: 1,
			src: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			alt: 'Profile Pusat Bahasa Unram',
			title: 'Profil UPA Bahasa Unram',
			description: `Profil dari Pusat Bahasa yang merupakan salah satu institusi yang mewadahi berbagai program bahasa.`
		},
		nav_page: {
			left: {
				link: '/programs/resource-centre-&-self-access-centre',
				label: 'BIPA'
			},
			right: {
				link: '/programs/course',
				label: 'Course'
			}
		}
	};
}
