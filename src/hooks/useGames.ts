import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {

        const contoller = new AbortController();
        apiClient
            .get<FetchGamesResponse>("/games", { signal: contoller.signal })
            .then((response) => setGames(response.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            }
            );

        return () => contoller.abort()
    }, []);

    return { games, error };
}

export default useGames;