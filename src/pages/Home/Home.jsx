import React, {useState, useEffect} from 'react'

// Redux
import {useSelector, useDispatch} from 'react-redux'
import {getSearch} from '../../config/redux'

// Styles & Icons
import './Home.scss'
import Popcorn from '../../assets/svg/popcorn.svg'
import Warning from '../../assets/svg/warning.svg'
import Clapper from '../../assets/svg/clapperboard.svg'

// Components
import { Main, Text, Searchbar, MovieCard, View, Image} from '../../components'

const Home = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [ready, setReady] = useState(false)
    const moviex = useSelector(state => state.Movie)
 

    useEffect(() => {
        let lastSearch = localStorage.getItem('udinflix-last-search')
        if(lastSearch){
            setSearch(lastSearch)
            fetching(lastSearch)
        } 
    }, [])

    const fetching = (last) => {
        let newSearch = last ? last : search
        setReady(true)
        dispatch(getSearch(newSearch))
    } 

    const callFetch = async (e) => {
        e.preventDefault();
        fetching()
        localStorage.setItem('udinflix-last-search', search)
    }

    return (
         <Main>
            <Text h5>Search Movie</Text>
            <Searchbar onChange={(e)=> setSearch(e.target.value)} onSubmit={callFetch} value={search} placeholder="Search movie
                by name..." />
                <hr className="line" />
                {moviex.list && (
                        <View className="cardsect">
                            <MovieCard load={moviex.ready} movie={moviex.list} />
                        </View>
                )}

                {!ready && (
                    <View className="find-movie">
                        <Image src={Popcorn} />
                        <Text h5>Let's find a good movie!</Text>
                    </View> 
                )}

                {moviex.error.Response === 'False' && (
                    <View className="find-movie">
                        <Image src={Clapper} />
                        <Text h5>Sorry movie not found!</Text>
                    </View> 
                )}

                {moviex.error && (
                    <View className="find-movie">
                        <Image src={Warning} />
                        <Text h5>Sorry there is an error!</Text>
                        <View onClick={callFetch}>
                            <Text className="try" span>Try Again?</Text>
                        </View>
                    </View> 
                )}
         </Main>
    )
}

export default Home