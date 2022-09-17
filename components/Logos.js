import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Logos() {
	return (
		<div id="logos" className='bg-white shadow py-4'>
			<Container>
				<Row className='justify-content-between'>
					<Col xs="auto"><img src="https://weart.hu/wp-content/uploads/2021/01/visual-studio-code-1.svg" alt="" /></Col>
					<Col xs="auto"><img src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" alt="" /></Col>
					<Col xs="auto"><img src="https://weart.hu/wp-content/uploads/2021/01/javascript-horizontal.svg" alt="" /></Col>
					<Col xs="auto"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" /></Col>
					<Col xs="auto"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" alt="" /></Col>
					<Col xs="auto"><img src="https://logos-download.com/wp-content/uploads/2016/03/WordPress_logo.png" alt="" /></Col>
					<Col xs="auto"><img src="https://weart.hu/wp-content/uploads/2021/01/Woocommerce_logo.png" alt="" /></Col>
				</Row>
			</Container>
		</div>
	)
}

export default Logos