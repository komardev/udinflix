import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'

// Style & Icons
import './MovieCard.scss'
import { MdMovie, MdFavoriteBorder,MdFavorite} from "react-icons/md";
import {RectShape} from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';

// Components
import ModalMovie from '../ModalMovie/ModalMovie'
import { View, Card, Text, Image} from '../../atoms'

const MovieCard = (props) => {
    const {movie, load, getData} = props
    const [detail, setDetail] = useState(null)
    const [loadModal, setLoadModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const placeholder = (
        <View>
            <RectShape color='#333' style={{width: '100%', height: 150, borderRadius: 10, marginBottom: 15}}/>
            <RectShape color='#333' style={{width: '100%', height: 150, borderRadius: 10, marginBottom: 15}}/>
            <RectShape color='#333' style={{width: '100%', height: 150, borderRadius: 10, marginBottom: 15}}/>
        </View>
    )

    const addToLocalStorage = (val) => {
        let prevData = JSON.parse(localStorage.getItem('udinflix'))
        let newData = []
        let concatData = []
        prevData ? concatData = [...prevData, val] : concatData.push(val)
            concatData.forEach(item => {
                 newData.push({
                    Poster: item.Poster,
                    Type: item.Type,
                    Title: item.Title,
                    Year: item.Year,
                    imdbID: item.imdbID,
                    Favourite: true
                })
            })
        localStorage.setItem('udinflix', JSON.stringify(newData))
        getData()
    }

    const removeInLocalStorage = (val) => {
        let recentData = JSON.parse(localStorage.getItem('udinflix'))

        const data = recentData.filter(item => {
            return item.imdbID !== val.imdbID
        })

        localStorage.setItem('udinflix', JSON.stringify(data))
        getData()
    }

    const fetchDetail = async (val) => {
        setLoadModal(true)
        setLoading(false)
        try {
            let detailMovie = await axios.get(`http://www.omdbapi.com/?t=${val}&plot=full&apikey=fa6e670f`)
            setDetail(detailMovie.data)
        } catch (error) {
            console.log(error);
        }
        setLoading(true)
    }

     const renderCard = () => {
        return movie.map((val, idx) => {
            return (
                <Card key={idx}>
                    <View className="movcard align-items-center" dataToggle="modal" dataTarget="#movieModal" onClick={() => fetchDetail(val.Title)}>
                        <View>
                            <Image className="image-movie"  src={val.Poster}/>
                        </View>
                        <View className="desc">
                            <Text className="desc__title" p>{val.Title}</Text>
                            <Text className="desc__date" p>{val.Year}</Text>
                            <Text className="desc__info type-text" p><MdMovie className="type"/>&nbsp;{val.Type}</Text>
                            <Text className="desc__info mt-1" p>ID : {val.imdbID}</Text>
                        </View>
                    </View>
                    <View className="favourite">
                        {val.Favourite && (
                            <button onClick={() => removeInLocalStorage(val)} className="favourite__add">
                                <MdFavorite/>&nbsp;Added
                            </button>
                        )}
                         {!val.Favourite && (
                            <button onClick={() => addToLocalStorage(val)} className="favourite__btn">
                                <MdFavoriteBorder/>&nbsp;Add to Favourite
                            </button>
                        )}
                    </View> 
                </Card>   
            )
        })
    }

    return (
        <>
            <ReactPlaceholder className="mt-4" customPlaceholder={placeholder} ready={load} showLoadingAnimation>
                {load === true  && (
                  renderCard()
                )}
            </ReactPlaceholder>
            {loadModal && (<ModalMovie loading={loading} film={detail} id="movieModal"/>)}
        </>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.any,
    load: PropTypes.bool,
}

export default MovieCard
