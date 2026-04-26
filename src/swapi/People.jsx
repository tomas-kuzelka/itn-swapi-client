
import { useState, useEffect } from "react";
import { apiGet } from "../utils/api";
import { Link } from "react-router-dom";


export function People() {

    const [people, setPeople] = useState(null); // stav postav

    useEffect(() => { // zavolá se při vložení komponenty do stránky a jako poslední
        async function fetchPeople() {
            const data = await apiGet("people");
            console.log(data); // výpis získaných dat pro kontrolu
            setPeople(data.results);
        }
        fetchPeople();
    }, []); // spustí se jenom jednou (při vložení komp. do stránky)

    if (!people) { // podmínka pro načtení dat
        return <p>Načítám data...</p>
    }

    return (
        <div>
            <h1>Postavy</h1>
            {people.map((person, index) => (
                <div key={index + 1}>
                    <h2>
                        <Link to={"/people/" + (index + 1)}>
                            {person.name}
                        </Link>
                    </h2>
                    <p>Výška: {person.height}</p>
                    <p>Váha: {person.mass}</p>
                </div>
            ))}
        </div>
    )
}
