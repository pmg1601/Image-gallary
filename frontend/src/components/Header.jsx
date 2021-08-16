import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{ padding: '10px' }}>
            <Container>
                <Navbar.Brand href='#'>Images Gallary</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
