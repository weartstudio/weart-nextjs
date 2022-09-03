import React from 'react'
import ArticleItem from './ArticleItem'
import PageTitle from './PageTitle'
import { Container, Row, Col } from 'react-bootstrap';

function ArticleList({ posts, limit }) {
	return (
		<Container className='my-5'>
			<PageTitle title="Blog" />
			<Row className='g-4'>
				{posts?.slice(0, limit).map((post, index) => {
					return (
						<Col lg={4}>
							<ArticleItem post={post} key={index} />
						</Col>
					)
				}
				)}
			</Row>
		</Container>
	)
}

export default ArticleList