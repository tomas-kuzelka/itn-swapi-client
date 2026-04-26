
import { useState, useEffect } from "react";
import { apiGet } from "../utils/api";


export function People() {

    const [people, setPeople] = useState(null); // stav postav

    useEffect(() => { // zavolá se při vložení komponenty do stránky
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
            {people.map((person) => (
                <div>
                    <h2>{person.name}</h2>
                    <p>Výška: {person.height}</p>
                    <p>Váha: {person.mass}</p>
                </div>
            ))}
        </div>
    )
}
