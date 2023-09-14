import React from "react";
import '../styles/home-movieinfo.css'
import imdb from "../assets/imdb.png";
import rtomato from "../assets/rotten-tomato.svg";
import trailer from "../assets/trailer.svg";

export default function HomeMovieInfo({ moviesData }) {

    


    return (
        <div className="movieinfo-container">
            <div className="movies-data">
                <h1>{moviesData.title}</h1>
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
                <p className="movie-desc">{moviesData.description}</p>
                <button className="watch-trailer-btn">
                    <img src={trailer} alt="trailer-logo" /> WATCH TRAILER
                </button>
            </div>
            <div className="item-numbering">
                <p>-1</p>
                <p>-2</p>
                <p>-3</p>
                <p>-4</p>
                <p>-5</p>
            </div>
        </div>
    );
}
