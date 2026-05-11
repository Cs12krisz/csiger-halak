import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function SingleFish() {
    const params = useParams();
    const id = params.id
    const [fish, setFish] = useState({});

    useEffect(() => {
        axios.get(`https://halak.sulla.hu/api/Halak/${id}`)
            .then(response => {
                setFish(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id])

    return (
        <>
            <h1>SingleFish</h1>
            <div>
                <h2>{fish.nev}</h2>
                <img src={`data:image/jpeg;base64,${fish.kep}`} alt={fish.nev}/>
                <Link to="/halak" className="btn btn-primary">Vissza</Link>
            </div>
        </>
    )
}

export default SingleFish