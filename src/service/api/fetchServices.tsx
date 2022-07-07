import { Wine } from "../types";

export const getAllWines = async () => await fetch("http://localhost:3001/wines").then(res => {
    if(!res.ok){throw new Error(res.statusText)}
    return res.json();
});

export const getWineDetails = async (id: any) => await fetch(`http://localhost:3001/wines/${id}`).then(res => {
    if(!res.ok){throw new Error(res.statusText)};
    return res.json();
});

export const deleteWineMutation = async (id: any) => await fetch(`http://localhost:3001/wines/${id}`, {method: 'DELETE'}).then(res => {
    if(!res.ok){throw new Error(res.statusText)};
    return res.json();
});

export const updateWineMutation = async (id: any) => await fetch(`http://localhost:3001/wines/${id}`,
    {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'Some other Wine'})
    }).then(res => {
    if(!res.ok){throw new Error(res.statusText)};
    return res.json();
});

export const addNewWineMutation = async (wine: Wine) => {
    const newWine = {
        "id": wine.id,
        "name": wine.name,
        "vineyard": wine.vineyard,
        "year": wine.year,
        "rating": wine.rating,
        "notes": wine.notes 
    };
    await fetch(`http://localhost:3001/wines`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWine)
        }).then(res => {
        if(!res.ok){throw new Error(res.statusText)};
        return res.json();
    });
}