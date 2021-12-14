import {useParams } from "react-router-dom";
import {useState,useEffect, useCallback } from "react";
function Detail(){
    const x = useParams();
    const {id} = useParams();
    console.log(x);
    console.log(id);

    // const getMovie = async () =>  {
    //     const json = await (
    //         await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    //         ).json();
    //     console.log(json);
        
    // };
    // useEffect(() => {
    //     getMovie();
        
    // }, []);
    const [loading, setLoading] = useState([true]);
    const [movie, setMovie] = useState([]);
    const getMovie = useCallback(async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        //setMovie(json.data.movie);
        //setLoading(false);
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
        }, [id])
        useEffect(() => {
        getMovie()
        }, [getMovie]);
    return (
        <div>
        {loading
            ? (<h1>Loading...</h1>)
            : (
                <div>
                    <h1>Detail</h1>     
                    <div>
                        <h2>{movie.title_long}</h2>
                        <p>{movie.description_full}</p>
                    </div>
                </div>
            )
        }
        </div>
    );
}

export default Detail;