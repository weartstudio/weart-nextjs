import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Logos() {
	return (
		<div id="logos" className="my-5" >
			<Row className='justify-content-between text-center g-4 py-5'>
				<Col xs="6" sm="4" lg="auto"><img src="https://weart.hu/wp-content/uploads/2021/01/visual-studio-code-1.svg" alt="" /></Col>
				<Col xs="6" sm="4" lg="auto"><img src="https://weart.hu/wp-content/uploads/2021/01/javascript-horizontal.svg" alt="" /></Col>
				<Col xs="6" sm="4" lg="auto"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" /></Col>
				<Col xs="6" sm="4" lg="auto"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" alt="" /></Col>
				<Col xs="6" sm="4" lg="auto"><img src="https://logos-download.com/wp-content/uploads/2016/03/WordPress_logo.png" alt="" /></Col>
				<Col xs="6" sm="4" lg="auto"><img src="/php.png" /></Col>
			</Row>
		</div >
	)
}

export default Logos