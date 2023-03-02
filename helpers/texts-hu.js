export const home = {
	hero: {
		title: `Helló, frontend fejlesztő vagyok`,
		desc: `Egyed Balázs vagyok. Szabadúszó frontend programozóként - egyéni ügyfeleim mellett - cégeknek, ügynökségeknek segítek sikeresen megvalósítani a webes projektjeiket.`,
		btn: `Beszélgessünk`,
	},
	logos: [
		'/img/home/vscode.svg',
		'/img/home/figma.svg',
		'/img/home/js.svg',
		'/img/home/react.png',
		'/img/home/nextjs.svg',
		'/img/home/wordpress.svg',
		'/img/home/git.svg'
	],
	services: {
		title: `Miben tudok segíteni?`,
		desc: `Ha keresel valakit aki segít felépíteni a webes projektjeid kliens oldali megjelenését, akkor jó helyen jársz!`,
		items: [
			{
				icon: `/img/home/code-icon.svg`,
				title: `Design to Code`,
				desc: `A kapott design terv alapján felépítem a sitebuild-et, akár a vállalati konvencióknak megfelelő toolokkal.`,
			},
			{
				icon: `/img/home/react-icon.png`,
				title: `JS & React`,
				desc: `API / GraphQL adatelérések alapján készítek ReactJS / NextJS webappokat akár WP-vel kombinálva.`,
			},
			{
				icon: `/img/home/wordpress-icon.png`,
				title: `WordPress`,
				desc: `Legyen szó akár MVC szerű vagy Headless használatról, tudok segíteni, ez az oldal is részben így épült fel.`,
			},

		]
	},
	portfolio: {
		link: 'Még több projekt'
	},
	about: {
		numbers: [
			{
				title: 'év tapasztalat',
				num: '8+'
			},
			{
				title: 'sikeres projekt',
				num: '50+'
			},
			{
				title: 'elégedett ügyfél',
				num: '20+'
			}
		],
		more: 'Bővebben rólam',
	}
}

export const footer = {
	contact: {
		title: `Van egy projekt ötleted? Dolgozzunk együtt rajta!`,
		desc: `Egyed Balázs vagyok — szabadúszó frontend fejlesztő, aki segít kitolni a web határait`,
		btn: `Beszélgessünk`,
	},
	copyright: `Minden jog fenntartva`,
}

export const menu = {
	items: [
		{
			title: 'Rólam',
			url: '/about'
		},
		{
			title: 'Portfolió',
			url: '/portfolio'
		},
		{
			title: 'Kapcsolat',
			url: '/contact'
		},
	]
}