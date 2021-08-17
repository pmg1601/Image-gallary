import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { ReactComponent as Logo } from '../images/logo.svg'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{ padding: '10px' }}>
            <Container>
                <Logo
                    alt='Image Gallery'
                    style={{ maxWidth: '12rem', maxHeight: '3rem' }}
                />
            </Container>
        </Navbar>
    )
}

export default Header
