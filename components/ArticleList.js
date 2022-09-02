import React from 'react'
import ArticleItem from './ArticleItem';
import { Container, Row, Col } from 'react-bootstrap';

export default function ArticleList({ posts }) {
  return (
    <Container className='my-5'>
      <h2 className='mb-5'>Blog.</h2>
      <Row className='g-4'>
        {posts?.map(post => {
          return (
            <Col lg={4}>
              <ArticleItem post={post} key={post.id} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
