import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'

const Welcome = () => {
    return (
        <Container>
            <Jumbotron>
                <h1>Images Gallery</h1>
                <p>
                    This is simple application that retrieves photos using
                    Unsplash API. In order to start enter any search term in the
                    input field.
                </p>
                <p>
                    <Button
                        variant='primary'
                        href='https://unsplash.com'
                        target='_blank'>
                        Learn More
                    </Button>
                </p>
            </Jumbotron>
        </Container>
    )
}

export default Welcome
