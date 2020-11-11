import React, {useState} from 'react'

import axios from 'axios'

// Styles & Icons
import './Home.scss'
import Popcorn from '../../assets/svg/popcorn.svg'
import Clapper from '../../assets/svg/clapperboard.svg'

// Components
import { Main, Text, Searchbar, MovieCard, View, Image} from '../../components'

const Home = () => {
const [search, setSearch] = useState('')
const [load, setLoad] = useState(true)
const [ready, setReady] = useState(false)
const [movie, setMovie] = useState([])

    const fetchData = async (e) => {
        e.preventDefault();
        setReady(true)
        try {
            setLoad(false)
            let listMovie = await axios.get(`http://www.omdbapi.com/?s=${search}&plot=full&apikey=fa6e670f`)
            setLoad(true)
            console.log(listMovie.data);
            setMovie(listMovie.data)
        } catch (error) {
            console.log(error);
        }
    }
    
    const renderMovie = () => {
        if(!ready){
            return (
                 <View className="find-movie">
                    <Image src={Popcorn} />
                    <Text h5>Let's find a good movie!</Text>
                </View> 
            )
        } else if (movie.Response === 'True' || load === false) {
            return(
                    <View className="cardsect">
                        <MovieCard load={load} movie={movie} />
                    </View>
            )
        }else{
            return(
                <View className="find-movie">
                    <Image src={Clapper} />
                    <Text h5>Sorry movie not found!</Text>
                </View> 
            )
        }
    } 

    return (
        <Main>
            <Text h5>Search Movie</Text>
            <Searchbar onChange={(e)=> setSearch(e.target.value)} onSubmit={fetchData} value={search} placeholder="Search movie
                by name..." />
                <hr className="line" />
            {renderMovie()}
        </Main>
    )
}

export default Home