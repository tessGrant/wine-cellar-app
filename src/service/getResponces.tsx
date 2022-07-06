
export const getAllWines = async () => await fetch("http://localhost:3001/wines").then(res => {
    if(!res.ok){throw new Error(res.statusText)}
    return res.json();
});

export const getWineDetails = async (id: any) => await fetch(`http://localhost:3001/wines/${id}`).then(res => {
    if(!res.ok){throw new Error(res.statusText)};
    return res.json();
});
