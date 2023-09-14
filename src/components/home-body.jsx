import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import '../styles/home-body.css'

export default function HomeBody() {
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular',{
            headers:{
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDBmMTI0ZGRlZjMyOGIxYWZjZDNhMTk4ODUyNTY0NSIsInN1YiI6IjY0ZmVmMzEyZTBjYTdmMDE0ZjZmY2I4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zQxZ1emALAcuhhLAa4fm7wYLmI-njbhK1r-l4Ou8glg'
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
