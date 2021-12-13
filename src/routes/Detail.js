import {useParams } from "react-router-dom";
import {useEffect, useCallback } from "react";
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
    const getMovie = useCallback(async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        //setMovie(json.data.movie);
        //setLoading(false);
        }, [id])
        useEffect(() => {
        getMovie()
        }, [getMovie])
    return (
        <div>
            <h1>Detail</h1>
        </div>
    );
}

export default Detail;