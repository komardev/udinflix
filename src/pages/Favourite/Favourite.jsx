import React, { useEffect, useState} from 'react'

// Icons
import Heart from '../../assets/svg/heart.svg'

// Components
import { Main, Text, View, Image, MovieCard} from '../../components'

const Favourite = () => {
    const [movie, setMovie] = useState([]) 

    useEffect(() => {
        getFromStorage()
    }, [])

    const getFromStorage = () => {
        let prevData = JSON.parse(localStorage.getItem('udinflix'))
        let newData = []
        if (!prevData) prevData = []
        prevData.forEach(val => {
            if (val.Favourite) {
                newData.push({
                    Poster: val.Poster,
                    Type: val.Type,
                    Title: val.Title,
                    Year: val.Year,
                    imdbID: val.imdbID,
                    Favourite: true
                })
            }
        });
        setMovie(newData.reverse())
    }


    const renderMovie = () => {
          if (movie.length) {
              return(
                  <View className="cardsect">
                      <MovieCard getData={getFromStorage} load={true} movie={movie} />
                  </View>
              )
            }else {
                return(
                    <View className="find-movie mt-5">
                        <Image src={Heart} />
                        <Text h5>There's no movie in favourite!</Text>
                    </View> 
              )
            }
    } 

    return (
        <Main>
            <Text h5>My Favourite</Text>
            {renderMovie()}
        </Main>
    )
}

export default Favourite
