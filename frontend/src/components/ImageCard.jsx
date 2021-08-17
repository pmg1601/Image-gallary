import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'

const ImageCard = ({ images, deleteImage }) => {
    return (
        <Container className='mt-5'>
            {images.length ? (
                <Row xs={1} md={2} lg={3} xl={4}>
                    {images.map((image, i) => (
                        <Col key={i} className='my-auto'>
                            <Card
                                className='shadow p-3 mb-5 bg-white rounded'
                                style={{ width: '18rem' }}
                            >
                                <Card.Img
                                    variant='top'
                                    src={image.urls.small}
                                />

                                <Card.Body>
                                    <Card.Title>{image.title}</Card.Title>

                                    <Card.Text>{image.description}</Card.Text>

                                    <Button
                                        variant='primary'
                                        onClick={() => deleteImage(image.id)}
                                    >
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <h1 className='text-center'>No Images</h1>
            )}
        </Container>
    )
}

export default ImageCard
