import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
function Fishes() {
    const [fishes, setFishes] = useState([]);
    useEffect(() => {
        axios.get('https://halak.sulla.hu/api/Halak')
            .then(response => {
                setFishes(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    return(
        <div>
            <h1>Fishes</h1>
            <ul>
                {fishes.map(fish => (
                    <li key={fish.id}>Név: {fish.nev}
                     <img src={`data:image/jpeg;base64,${fish.kep}`} alt={fish.nev}/>
                     <Link to={`/hal/${fish.id}`} className="btn btn-primary">További adatok<i className="bi-text-paragraph"></i></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Fishes;