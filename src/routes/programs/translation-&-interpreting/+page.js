/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		hero: {
            id: 1,
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Language Test',
            title: 'Layanan Terjemahan dan Interpretasi Bahasa',
            description: `Layanan Terjemahan dan Interpretasi Bahasa menyediakan pengubahan teks dan pemahaman lisan dari satu bahasa ke bahasa lain, memfasilitasi komunikasi lintas bahasa dalam berbagai konteks.`
        },
        nav_page: {
            left: {
                link: '/programs/language-test',
                label: 'Language Test'
            },
            right: {
                link: '/programs/resource-centre-&-self-access-centre',
                label: 'Resource Centre & Self-Access Centre'
            }
        }
    }
}
