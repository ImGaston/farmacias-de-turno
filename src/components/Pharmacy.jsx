import React from "react";
import ListPharmacys from "./ListPharmacys";

const Pharmacy = () => {
    const letras = ['N', 'O', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
    const inicialDate = new Date(2022, 0, 1);
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const fullDay = `${day}/${month}/${year}`;
    const difference = date.getTime() - inicialDate.getTime();
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24)) -1;
    const index = totalDays % 15;
    const letra = letras[index];

    return (
        <>
            <section>
                <p>{ fullDay } </p>
                <p>Las farmacias con la letra: { letra }</p>
            </section>
            <ListPharmacys value={ letra } /> 
            
        </>
    )
}

export default Pharmacy;