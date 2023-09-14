import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import '../styles/home-body.css'

const token = process.env.BEARERTOKEN

export default function HomeBody() {
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular',{
            headers:{
                    Authorization: token
                }
        }).then(response =>{
            console.log(response)
        }).catch(error =>{
            console.log(error)
        })
    },[])


    return (
        <div className='home-body-container'>
            <div className="home-body-nav">
                <h2>Featured Movie</h2>
                <Link to={'/dashboard'}> See more <i className='fas fa-chevron-right'></i> </Link>
            </div>
        </div>
    )
}
