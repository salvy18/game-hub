import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (
    // Now instead of using individual variables state lets use Query Objects pattern
    // selectedGenre: Genre | null, 
    // selectedPlatform: Platform | null
    gameQuery: GameQuery

) => useData<Game>('/games', {
    params: {
        // Now instead of using individual variables state lets use Query Objects pattern
        // genres: selectedGenre?.id,
        // platforms: selectedPlatform?.id
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
    }
},
    // Now instead of using individual variables state lets use Query Objects pattern
    // [selectedGenre?.id, selectedPlatform?.id]);
    [gameQuery]);

export default useGames;