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
            <h1>Halak</h1>
            <div className='row g-4'>
                {fishes.map(fish => (
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={fish.id}>
                            <div className="card h-100 shadow-sm">
                                <img className='card-img-top' src={`data:image/jpeg;base64,${fish.kep}`} alt={fish.nev}/>
                                <div className="card-body">
                                    <h5 className='card-title'>{fish.nev}</h5>
                                    <p className='card-text'>Faj: {fish.faj}</p>
                                    <p className='card-text'>Méret: {fish.meretCm} cm</p>
                                    <Link to={`/hal/${fish.id}`} className="btn btn-primary">További adatok<i className="bi-text-paragraph"></i></Link>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Fishes;