import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Search from './components/Search'

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

function App() {
    const [word, setWord] = useState('')

    // Handle search bar submit action
    const handleSearchSubmit = (e) => {
        e.preventDefault()

        const URL = `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
        fetch(URL)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))

        setWord('')
    }

    /* -------------------------------------------------------------------------- */
    return (
        <div className="App">
            <Header />
            <Search
                word={word}
                setWord={setWord}
                handleSubmit={handleSearchSubmit}
            />
        </div>
    )
}

export default App
