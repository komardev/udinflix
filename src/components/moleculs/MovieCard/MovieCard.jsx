import React from 'react'
import PropTypes from 'prop-types';

// Style & Icons
import './MovieCard.scss'
import { MdMovie } from "react-icons/md";
import {RectShape} from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';

// Components
import { View, Card, Text, Image} from '../../atoms'

const MovieCard = (props) => {
    const {movie, load} = props

     const placeholder = (
        <View>
            <RectShape color='#333' style={{width: '100%', height: 150, borderRadius: 10, marginBottom: 15}}/>
            <RectShape color='#333' style={{width: '100%', height: 150, borderRadius: 10, marginBottom: 15}}/>
            <RectShape color='#333' style={{width: '100%', height: 150, borderRadius: 10, marginBottom: 15}}/>
        </View>
    )

    return (
        <>
            <ReactPlaceholder className="mt-4" customPlaceholder={placeholder} ready={load} showLoadingAnimation>
                {load === true && (
                    movie.Search.map((val, idx) => {
                    return(
                            <Card key={idx} className="movcard align-items-center">
                                <View>
                                    <Image className="image-movie"  src={val.Poster}/>
                                </View>
                                <View className="desc">
                                    <Text className="desc__title" p>{val.Title}</Text>
                                    <Text className="desc__date" p>{val.Year}</Text>
                                    <Text className="desc__info type-text" p><MdMovie className="type"/>&nbsp;{val.Type}</Text>
                                    <Text className="desc__info mt-1" p>ID : {val.imdbID}</Text>
                                </View>
                            </Card>   
                    ) 
                })
                )}
            </ReactPlaceholder>
        </>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.any,
    load: PropTypes.bool
}

export default MovieCard
