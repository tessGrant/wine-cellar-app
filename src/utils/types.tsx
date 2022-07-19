export interface Wine {
    id: string;
    name: string;
    vineyard: string;
    year: string;
    rating: number;
    notes: string;
}

export interface UpdateWine {
    id: any;
    [key: string]: any;
}

export interface FilteredObj {
    filterKey: any;
    filterValue: any;
}