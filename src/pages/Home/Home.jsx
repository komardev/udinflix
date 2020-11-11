import React, {useState} from 'react'

// Components
import { Main, Text, Searchbar } from '../../components'

const Home = () => {
    const [search, setSearch] = useState('')


    const alerta = (e) => {
        e.preventDefault();
        alert(search)
    }

    return (
        <Main>
            <Text h5>Search Movie</Text>
            <Searchbar onChange={(e) => setSearch(e.target.value)} onSubmit={alerta} value={search} placeholder="Search movie by name..." />
        </Main>
    )
}

export default Home