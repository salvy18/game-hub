import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGamesWithoutUsingGenerics = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const contoller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGamesResponse>("/games", { signal: contoller.signal })
            .then((response) => {
                setGames(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            }
            );

        return () => contoller.abort()
    }, []);

    return { games, error, isLoading };
}

export default useGamesWithoutUsingGenerics;