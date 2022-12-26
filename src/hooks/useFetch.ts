import { useEffect, useState } from "react";

export interface Address {
    Calle: string
    Numero: number
    Estado: string
    Estado_Abreviado: string
}

export interface Parking {
    Id: number,
    Address: Address,
    Amenities: string[],
    Images: string[],
    Description: string,
    Price: number,
    Type: string,
    Score: number
}

export interface Parkings{
    data: Parking[],
    isLoading: boolean,
    hasError: any
}

export const useFetch = (url:string) => {

    const [state, setState] = useState<Parkings>({
        data: [],
        isLoading: true,
        hasError: null
    })

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

  
    useEffect(() => {

        getFetch();

    }, [url])
    


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}