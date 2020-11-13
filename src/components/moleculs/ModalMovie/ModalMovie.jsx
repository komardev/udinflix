import React from 'react'
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

// Style & Icon
import { MdStar, MdMovie, MdPublic } from "react-icons/md";
import './ModalMovie.scss'
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';

// Components
import {View, Modals, Image, Text} from '../../atoms'


const ModalMovie = (props) => {
    const {id, film, loading} = props

    const renderGenre = () => {
        return film.Genre.split(",").map((val, idx) => {
            return(
                <Text key={idx} p>{val}</Text>
            )
        })
    }

    const placeholder = (
        <>
            <View className="row">
                <View className="col-4 col-sm-3">
                    <RectShape color='#333' style={{height: '130px', width: '90px' }}/>
                </View>
                <View className="col">
                    <RectShape color='#333' style={{ height: 23, width: '80%', marginTop: 10}} />
                    <TextBlock className="mt-3" rows={3} color='#333'/>
                </View>
            </View>
            <TextBlock className="mt-3" rows={4} color='#333'/>
        </>
    )

    return (
         <Modals title={!loading ? 'Loading...' : film.Title } id={id}>
            <ReactPlaceholder customPlaceholder={placeholder} ready={loading} showLoadingAnimation>
              {loading && (
                  <>
                    <View className="headmodal">
                        <Image src={film.Poster}/>
                        <View className="headmodal__desc">
                            <Text className="title" h5>{film.Title}</Text>
                            <Text className="year" p>Year : {film.Year}</Text>
                            <Text className="rating" p><MdStar className="star"/>&nbsp;{film.imdbRating}</Text>
                            <Text className="type" p><MdMovie className="type__icon"/>&nbsp;{film.Type}</Text>
                            <Text className="lang" p><MdPublic className="lang__icon"/>&nbsp;{film.Language}</Text>
                        </View>
                    </View>
                    <View className="descmodal mt-3">
                        <View className="genre">
                            <Text className="genre__title" p>Genre</Text>
                            <View className="genre__text">
                                {renderGenre()}
                            </View>
                        </View>
                        <View className="desc">
                            <Text className="desc__title" p>Description</Text>
                            <View className="desc__text">
                                {film.Plot}
                            </View>
                        </View>
                    </View>
                </>
              )}
            </ReactPlaceholder>
        </Modals>
    )
}

ModalMovie.propTypes = {
    id: PropTypes.string,
    film: PropTypes.any,
    loading: PropTypes.bool
}


export default ModalMovie
