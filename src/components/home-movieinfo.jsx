import React from 'react';
import imdb from '../assets/imdb.png';
import rtomato from '../assets/rotten-tomato.svg';
import trailer from '../assets/trailer.svg'

export default function HomeMovieInfo({ moviesData }) {
    return (
        <div>
            <div className="movies-data">
                <h1>{moviesData.title}</h1><br />
                <div className="ratings">
                    <div className="imdb-ratings">
                        <img src={imdb} alt="imdb logo" />
                        <p>{moviesData.rating}</p>
                    </div>
                    <div className="rotten-tomato-rating">
                        <img src={rtomato} alt="rotten tomato logo" />
                        <p>{moviesData.ratingPercentage}</p>
                    </div>
                </div>
                <p className='movie-desc'>{moviesData.description}</p>
                <button><img src={trailer} alt="trailer-logo" /> WATCH TRAILER</button>
            </div>
            <div className="item-numbering">
                
            </div>
        </div>
    )
}
