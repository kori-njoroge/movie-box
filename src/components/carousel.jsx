import React from "react";
import '../styles/carousel.css'
import HomeNav from "./home-nav";
import HomeMovieInfo from "./home-movieinfo";
import HomeBody from "./home-body";

export default function Carousel() {
    const moviesData = [
        {
            title: 'John Wick 3 : Parabellum',
            rating: '86.0/100',
            ratingPercentage: '90%',
            description:'John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.',
            trailerLink:'https://www.youtube.com/watch?v=6hB3S9bIaco'
        },
        {
            title: "The Shawshank Redemption",
            rating: "80/100",
            ratingPercentage: "90%",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            trailerLink: "https://www.youtube.com/watch?v=6hB3S9bIaco",
        },
        {
            title: "The Godfather",
            rating: "85/100",
            ratingPercentage: "95%",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            trailerLink: "https://www.youtube.com/watch?v=sY1S34973zA",
        },
        {
            title: "Pulp Fiction",
            rating: "75/100",
            ratingPercentage: "88%",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            trailerLink: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
        },
        {
            title: "Inception",
            rating: "90/100",
            ratingPercentage: "92%",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        },
        {
            title: "The Dark Knight",
            rating: "88/100",
            ratingPercentage: "94%",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            trailerLink: "https://www.youtube.com/watch?v=_PZpmTj1Q8Q",
        }
    ];


    const styles = {
        backgroundImage: 'url("https://static-prod.adweek.com/wp-content/uploads/2019/05/john-wick-poster-qa-hed-page-2019.jpg")',
        backgroundSize: 'cover',
        filter: 'contrast(150%) brightness(70%)'
    }

    return (
        <div style={styles} className="carousel-container">
            <HomeNav />
            <HomeMovieInfo moviesData={moviesData[0]} />
            <HomeBody />
        </div>
    )
}
