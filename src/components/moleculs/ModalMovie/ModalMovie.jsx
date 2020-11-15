import React from 'react'
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

// Style & Icon
import './ModalMovie.scss'
import { MdStar, MdMovie, MdPublic } from "react-icons/md";
import Warning from '../../../assets/svg/warning.svg'
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';

// Components
import {View, Modals, Image, Text} from '../../atoms'


const ModalMovie = (props) => {
    const {id, film, getData} = props

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
         <Modals title={film.detail.Title ? film.detail.Title : '. . . .' } id={id}>
            <ReactPlaceholder customPlaceholder={placeholder} ready={film.ready} showLoadingAnimation>
            {film.error && film.ready && (
                   <View className="find-movie">
                        <Image src={Warning} />
                        <Text h5>Sorry theres is an error!</Text>
                        <View onClick={getData}>
                            <Text className="try" span>Try Again?</Text>
                        </View>
                    </View> 
              )}
            {film.ready && !film.error && (
                <>
                    <View className="headmodal">
                        <Image src={film.detail.Poster}/>
                        <View className="headmodal__desc">
                            <Text className="title" h5>{film.detail.Title}</Text>
                            <Text className="year" p>Year : {film.detail.Year}</Text>
                            <Text className="rating" p><MdStar className="star"/>&nbsp;{film.detail.imdbRating}</Text>
                            <Text className="type" p><MdMovie className="type__icon"/>&nbsp;{film.detail.Type}</Text>
                            <Text className="lang" p><MdPublic className="lang__icon"/>&nbsp;{film.detail.Language}</Text>
                        </View>
                    </View>
                    <View className="descmodal mt-3">
                        <View className="genre">
                            <Text className="genre__title" p>Genre</Text>
                            <View className="genre__text">
                                {
                                    film.detail.Genre.split(",").map((val, idx) => {
                                        return(
                                            <Text key={idx} p>{val}</Text>
                                        )
                                    })
                                }
                            </View>
                        </View>
                        <View className="desc">
                            <Text className="desc__title" p>Description</Text>
                            <View className="desc__text">
                                {film.detail.Plot}
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
    getData: PropTypes.func,
}


export default ModalMovie
