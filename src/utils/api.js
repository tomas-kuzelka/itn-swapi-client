


export async function apiGet(endpoint) {
    const response = await fetch("https://swapi.py4e.com/api/" + endpoint);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error("chyba načítání dat!");
    }
}
