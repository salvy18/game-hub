import useData from "./useData";
import genres from '../data/genres'


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    // if the Genres data file is there then return it from the file otherwise call the api
    if (genres.length > 1) {
        return { data: genres, isLoading: false, error: null }
    } else {
        return useData<Genre>('/genres');
    }


}

export default useGenres;