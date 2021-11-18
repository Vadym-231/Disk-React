import {FC, Props} from "react";

export interface IProducts {
    name: string,
    type: string,
    description: string,
    headImg?: string,
    views: number,
    likes: number,
    dislike: number,
    soldOut: number,
    startCount: number,
    count: number,
    createdBy: IUser | null,
    createdAt?: Date,
    editedAt?: Date,
    images: string[],
    _id?: string
}

export interface IViewProduct {
    name?: string,
    type?: string,
    description?: string,
    headImg?: string,
    views?: number,
    likes?: number,
    dislike?: number,
    soldOut?: number,
    startCount?: number,
    count?: number,
    createdBy?: IUser | null,
    createdAt?: Date,
    editedAt?: Date,
    images?: string[]

}
export interface IUser {
    name: string,
    email: string,
    role: 'admin' | 'moder'
}
export interface IQuery {
    [value: string] : [string]
}
export interface IRoute {
    label?: string,
    path: string,
    icon?: FC,
    component: FC<Props<{}>>
}

export interface IAction {
    type: string,
    data: object
}
