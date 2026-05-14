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
            <div className="card shadow-sm">
                <img className="card-img-top" src={`data:image/jpeg;base64,${fish.kep}`} alt={fish.nev}/>
                <div className="card-body">
                    <h2 className="card-title">{fish.nev}</h2>
                    <p className="card-text">Faj: {fish.faj}</p>
                    <p className="card-text">Méret: {fish.meretCm} cm</p>
                    <Link to="/halak" className="btn btn-primary"><i className="bi bi-arrow-left"></i>Vissza</Link>
                </div>
            </div>
        </>
    )
}

export default SingleFish