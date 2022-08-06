import { useEffect, useState } from "react";
import { getData, getDataByLetter} from '../database/API';
import Pharmacys24Open from "./Pharmacys24Open";
import PharmacysOpen from "./PharmacysOpen";

const ListPharmacys = ( { value } ) => {

    const [pharmacys, setPharmacys] = useState([]);
    useEffect( () => {
        // getData()
        getDataByLetter(value)
            .then( pharmacysOpen => setPharmacys(pharmacysOpen));
    }, [])

    return (
        <>
            <div className='card-grid'>
                {
                pharmacys.map( ( pharmacys ) => (
                    <PharmacysOpen 
                        key={pharmacys.id}
                        { ...pharmacys }
                    />
                ))
                }
                < Pharmacys24Open/>
            </div>
        </>
    )
}

export default ListPharmacys;