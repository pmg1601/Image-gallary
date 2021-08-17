import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Search from './components/Search'
import ImageCard from './components/ImageCard'
import { Alert, Button } from 'react-bootstrap'

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

function App() {
    const [word, setWord] = useState('')
    const [images, setImages] = useState([])
    const [show, setShow] = useState(0)

    // Handle search bar submit action
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        console.log('Images Default :', images)

        const URL = `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
        // const URL = 'https://randomuser.me/api/'

        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results[0])
                setImages([{ ...data, title: word }, ...images])

                console.log('Images :', images)
            })
            .catch((err) => console.log(err))

        setWord('')
    }

    // Delete image
    const handleDeleteImage = (id) => {
        setImages(images.filter((image) => image.id !== id))

        setShow(1)
    }

    // Close PopUp
    const closePopup = () => setShow(0)

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
                        position: 'fixed',
                        bottom: '0',
                        left: '10px',
                    }}
                >
                    Image Deleted
                    <Button
                        variant='danger'
                        style={{
                            padding: '0 9px',
                            marginLeft: '20px',
                            borderRadius: '50%',
                            textAlign: 'center',
                        }}
                        onClick={closePopup}
                    >
                        x
                    </Button>
                </Alert>
            )}
        </div>
    )
}

export default App
