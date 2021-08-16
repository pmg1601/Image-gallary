import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Search = ({ word, setWord, handleSubmit }) => {
    return (
        <Container className='my-3'>
            <Form onSubmit={handleSubmit}>
                <Row className='align-items-center justify-content-center'>
                    <Col xs='12' md='8' lg='6'>
                        <Form.Control
                            className='mb-2'
                            type='text'
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            placeholder='Search For New Image ...'
                        />
                    </Col>

                    <Col xs='auto'>
                        <Button type='submit' className='mb-2'>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Search
