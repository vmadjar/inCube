export interface Photos {
    small?: any;
    large?: any;
}

export interface User {
    name: string;
    id: number;
    photos: Photos;
    status?: any;
    followed: boolean;
}

export interface IUsers {
    items: User[];
    totalCount: number;
    error?: any;
}

