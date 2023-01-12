import React from 'react'
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap'

function Process() {
	return (
		<div className="bg-dark py-7 text-white">
			<Container>
				<Row>
					<Col>
						<h2 className='display-5'>Hogyan oldom meg a <span className='colored'>problémákat?</span></h2>
						<p className='my-4 text-muted'>A sikeres webes projekteknél kéz a kézben jár a design és a fejlesztés. Így a felmerülő problémák jelentős többsége is a design és a kód szűk kersztmetszetéből adódik.</p>
						<Button variant='colored' href='/kapcsolat'>Beszélgessünk</Button>
					</Col>
					<Col>
						<ListGroup className="bg-colored">

						</ListGroup>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Process