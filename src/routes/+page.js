/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		header: [
			{
				id: 1,
				image: {
					src: '/assets/home/hero-1.jpg',
					alt: 'pubah 1'
				},
				tag: 'Program',
				title: 'Program in-Country Bahasa Indonesia bagi Penutur Asing',
				description:
					'Program bahasa in-country bagi penutur asing adalah program di mana pembelajar bahasa asing tinggal dan belajar di negara yang menjadi sumber bahasa yang dipelajari. Program semacam ini memberikan pengalaman langsung dalam penggunaan bahasa target dalam konteks sehari-hari dan budaya lokal.',
				link: '/programs/bipa'
			},
			{
				id: 1,
				image: {
					src: '/assets/home/hero-2.jpg',
					alt: 'pubah 2'
				},
				tag: 'Program',
				title: 'Program TOEFL Preparation',
				description:
					'TOEFL Preparation adalah program yang dirancang untuk membantu calon peserta tes TOEFL meningkatkan kemampuan bahasa Inggris mereka melalui latihan mendalam, familiarisasi dengan format tes, dan strategi khusus dalam menjawab pertanyaan TOEFL.',
				link: '/programs/course'
			}
		]
	};
}