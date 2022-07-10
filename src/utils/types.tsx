export interface Wine {
    id: string;
    name: string;
    vineyard: string;
    year: number;
    rating: number;
    notes: string;
}

export interface UpdateWine {
    id: string;
    [key: string]: string | number;
}