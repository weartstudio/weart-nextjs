import React from 'react'
import Link from 'next/link'

function Menu() {
	return (
		<nav>
			<Link href="/">
				<a className='logo'>weart</a>
			</Link>
			<ol>
				<li><Link href="/rolam">Rólam</Link></li>
				<li><Link href="/portfolio">Portfólió</Link></li>
				<li><Link href="/blog">Blog</Link></li>
				<li><Link href="/kapcsolat">Kapcsolat</Link></li>
			</ol>
		</nav>
	)
}

export default Menu