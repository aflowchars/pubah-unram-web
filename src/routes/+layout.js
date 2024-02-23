import { FacebookIconRegular, InstagramIconRegular } from '$lib/icons/iconoir';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		navbar: {
			topbar: {
                left: [
                    {
                        id: 1,
                        icon: FacebookIconRegular,
                        link: 'https://www.facebook.com/pusatbahasaunram/?locale=id_ID'
                    },
                    {
                        id: 2,
                        icon: InstagramIconRegular,
                        link: 'https://www.instagram.com/upa_bahasaunram/'
                    }
                ],
                right: [
                    {
                        id: 1,
                        label: 'myUnram',
                        link: 'https://my.unram.ac.id/'
                    },
                    {
                        id: 2,
                        label: 'SiReg',
                        link: 'https://sireg.unram.ac.id/'
                    },
                    {
                        id: 3,
                        label: 'TOEFL',
                        link: 'https://tita.unram.ac.id/'
                    },
                    {
                        id: 4,
                        label: 'Cek Hasil',
                        link: 'https://tita.unram.ac.id/cek_hasil'
                    },
                    
                ]
            },
            mainbar: [
                {
                    id: 1,
                    type: 'link',
                    link: '/profile',
                    label: 'Profil'   
                },
                {
                    id: 2,
                    type: 'dropdown',
                    label: 'Programs',
                    menus: [
                        {
                            id: 1,
                            link: '/programs/language-test',
                            label: 'Language Test'   
                        },
                        {
                            id: 2,
                            link: '/programs/translation-&-interpreting',
                            label: 'Translation & Interpreting'   
                        },
                        {
                            id: 3,
                            link: '/programs/resource-centre-&-self-access-centre',
                            label: 'Resource Centre & Self Access Centre'   
                        },
                        {
                            id: 4,
                            link: '/programs/bipa',
                            label: 'BIPA'   
                        },
                        {
                            id: 5,
                            link: '/programs/course',
                            label: 'Course'   
                        },
                    ] 
                },
                {
                    id: 3,
                    type: 'link',
                    link: '/partnership',
                    label: 'Partnership'   
                },
                {
                    id: 4,
                    type: 'link',
                    link: '/gallery',
                    label: 'Galeri'   
                },
            ]
        },
        footer: {
            logo: {
                title: 'Pusat Bahasa Universitas Mataram',
                link: '/',
                image: {
                    src: '/assets/general/unram-logo.png',
                    alt: 'Unram Logo'
                }
            },
            social_media: [
                {
                    id: 1,
                    icon: FacebookIconRegular,
                    link: 'https://www.facebook.com/pusatbahasaunram/?locale=id_ID'
                },
                {
                    id: 2,
                    icon: InstagramIconRegular,
                    link: 'https://www.instagram.com/upa_bahasaunram/'
                }
            ],
            details: {
                address: {
                    id: 1,
                    label: 'Jl. Majapahit No.62, Gomong, Kec. Selaparang Mataram, West Nusa Tenggara. 83115',
                    link: 'https://maps.app.goo.gl/YryQ9Nqs9bYW8dgg9'
                },
                telephone: {
                    id: 2,
                    label: '+6283472829129',
                    link: 'tel:+6283472829129',
                },
                email: {
                    id: 3,
                    label: 'media@unram.ac.id',
                    link: 'mailto:media@unram.ac.id'
                }
            },
            menus: [
                {
                    id: 1,
                    label: 'Beranda',
                    link: '/'
                },
                {
                    id: 2,
                    label: 'Profil',
                    link: '/profile'
                },
                {
                    id: 3,
                    label: 'Program',
                    link: '/programs'
                },
                {
                    id: 4,
                    label: 'Partnership',
                    link: '/partnership'
                },
                {
                    id: 5,
                    label: 'Galeri',
                    link: '/gallery'
                }
            ]
        }
	};
}
