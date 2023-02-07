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
		desc: `If you are looking for someone who will help you to build your digital web presence than congratulations!`,
		items: [
			{
				icon: `/img/home/code-icon.svg`,
				title: `Design to Code`,
				desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, doloribus modi accusamus debitis`,
			},
			{
				icon: `/img/home/react-icon.png`,
				title: `JS & React`,
				desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, doloribus modi accusamus debitis`,
			},
			{
				icon: `/img/home/wordpress-icon.png`,
				title: `WordPress`,
				desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, doloribus modi accusamus debitis`,
			},

		]
	},
	portfolio: {
		title: `Kiemelt referenciák`,
		desc: `Over the years, I've partnered with startups of all sizes and various stages to create some truly unique products. Here are a few that I feel were the most challenging yet rewarding.`
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
		name: 'Egyed Balázs',
		logotext: 'Akikkek már együtt dolgoztam.',
		logos: [
			'/img/home/opten.svg'
		]
	}
}

export const footer = {
	contact: {
		title: `Van egy projekt ötleted? Dolgozzunk együtt rajta!`,
		desc: `I'm David Louis— a designer who works with startups looking to push creative boundaries`,
		btn: `Beszélgessünk`,
	},
	copyright: `Minden jog fenntartva`,
	legal1: `Adatvédelem`,
	legal2: `Impresszum`,
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