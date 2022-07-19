import { FilteredObj, UpdateWine, Wine } from "../types";

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

export const updateWineMutation = async (data: UpdateWine) => await fetch(`http://localhost:3001/wines/${data.id}`,
    {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
    if(!res.ok){throw new Error(res.statusText)};
    return res.json();
});

export const addNewWineMutation = async (wine: Wine) => await fetch(`http://localhost:3001/wines`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(wine)
    }).then(res => {
    if(!res.ok){throw new Error(res.statusText)};
    return res.json();
});

export const filterByYear = async (filterBy: FilteredObj) => 
    await fetch(`http://localhost:3001/wines?${filterBy.filterKey}_like=${filterBy.filterValue}`).then(res => {
    if(!res.ok){throw new Error(res.statusText)}
    return res.json();
});
