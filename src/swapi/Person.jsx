
import { useState, useEffect } from "react";
import { apiGet } from "../utils/api";
import { useParams, useNavigate } from "react-router-dom";

export function Person() {

    const [person, setPerson] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchPerson() {
            const data = await apiGet("people/" + id);
            setPerson(data);
        }
        fetchPerson();
    }, [id]); // zavolá se znovu při změně id 

    if (!person) {
        return <p>Načítám data...</p>
    }

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Výška: {person.height}</p>
            <p>Váha: {person.mass}</p>
            <p>Barva očí: {person.eye_color}</p>
            <button onClick={() => navigate(-1)}>zpět</button>
        </div>
    )
}
