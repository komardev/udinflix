import React, {useState, useEffect} from 'react'

import axios from 'axios'

// Styles & Icons
import './Home.scss'
import Popcorn from '../../assets/svg/popcorn.svg'
import Warning from '../../assets/svg/warning.svg'
import Clapper from '../../assets/svg/clapperboard.svg'

// Components
import { Main, Text, Searchbar, MovieCard, View, Image} from '../../components'

const Home = () => {
    const [search, setSearch] = useState('')
    const [load, setLoad] = useState(true)
    const [ready, setReady] = useState(false)
    const [movie, setMovie] = useState([])
    const [filter, setFilter] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        let lastSearch = localStorage.getItem('udinflix-last-search')
        if(lastSearch){
            setSearch(lastSearch)
            fetching(lastSearch)
        } 
    }, [])

    const fetching = async (last) => {
        let newSearch = '' 
        last ? newSearch = last : newSearch =  search
        setReady(true)
        setError(false)
        setLoad(false)
        try {
            let listMovie = await axios.get(`http://www.omdbapi.com/?s=${newSearch}&plot=full&apikey=fa6e670f`)
            setMovie(listMovie.data)
                if (listMovie.data.Response === 'True') setData(listMovie.data)
        } catch (err) {
            if(err) setError(true)
            console.log(err);
        }
        setLoad(true)
    } 


    const callFetch = async (e) => {
        e.preventDefault();
        localStorage.setItem('udinflix-last-search', search)
        fetching()
    }

    const setData = (data) => {
        let prevData = JSON.parse(localStorage.getItem('udinflix'))
        let newData = []

        if (!prevData) prevData = []
        if (!data) data = movie 

        data.Search.forEach(val => {
            let check = prevData.some(item => item.imdbID === val.imdbID); 
                newData.push({
                    Poster: val.Poster,
                    Type: val.Type,
                    Title: val.Title,
                    Year: val.Year,
                    imdbID: val.imdbID,
                    Favourite: check ? true : false
                })
        });
        setFilter(newData)
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
                        <MovieCard getData={setData} load={load} movie={filter} />
                    </View>
            )
        } else if (error) {
            return(
                <View className="find-movie">
                    <Image src={Warning} />
                    <Text h5>Sorry theres is an error!</Text>
                    <View onClick={callFetch}>
                        <Text className="try" span>Try Again?</Text>
                    </View>
                </View> 
            )
        } else {
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
            <Searchbar onChange={(e)=> setSearch(e.target.value)} onSubmit={callFetch} value={search} placeholder="Search movie
                by name..." />
                <hr className="line" />
                {renderMovie()}
         </Main>
    )
}

export default Home