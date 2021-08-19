import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

import Header from './components/Header'
import Search from './components/Search'
import ImageCard from './components/ImageCard'

const API_URL = process.env.API_URL || 'http://localhost:5050'

// APP functional component
function App() {
    const [word, setWord] = useState('')
    const [images, setImages] = useState([])
    const [show, setShow] = useState(0)

    // Handle search bar submit action
    const handleSearchSubmit = (e) => {
        e.preventDefault()

        const URL = `${API_URL}/new-image?query${word}`

        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setImages([{ ...data, title: word }, ...images])
            })
            .catch((err) => {
                console.log(err)
            })

        setWord('')
    }

    // Delete image Pop-Up
    const handleDeleteImage = (id) => {
        setImages(images.filter((image) => image.id !== id))
        setShow(1)
    }

    /* -------------------------------------------------------------------------- */
    return (
        <div className='App'>
            <Header />
            <Search
                word={word}
                setWord={setWord}
                handleSubmit={handleSearchSubmit}
            />

            <ImageCard images={images} deleteImage={handleDeleteImage} />

            {!!show && (
                <Alert
                    variant='danger'
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '10px',
                    }}>
                    Image Deleted
                    <Button
                        variant='danger'
                        style={{
                            padding: '0 9px',
                            marginLeft: '20px',
                            borderRadius: '50%',
                            textAlign: 'center',
                        }}
                        onClick={() => setShow(0)}>
                        x
                    </Button>
                </Alert>
            )}
        </div>
    )
}

export default App
