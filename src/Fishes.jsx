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
            <div className='m-auto text-center content bg-ivory'>
                {fishes.map(fish => (

                    <div className='card col-sm-3 col-md-4 col-lg-6 d-inline-block m-1 p-2' key={fish.id}>
                            <div className='card-header'>Név: {fish.nev}</div>

                            <div className="card-body">
                                <p>Faj: {fish.faj}</p>
                                <img className='w-50' src={`data:image/jpeg;base64,${fish.kep}`} alt={fish.nev}/>
                            </div>

                            <div className='card-footer'>
                                <Link to={`/hal/${fish.id}`} className="btn btn-primary">További adatok<i className="bi-text-paragraph"></i></Link>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Fishes;