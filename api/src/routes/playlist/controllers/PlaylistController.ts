import {getPlaylist} from "../../../providers/SpotifyProvider";
import {normalizePlaylist} from "../../../schemas/SpotifySchema";

export const getPlaylistById = async (id: string) => {
    const playlist = await getPlaylist(id);

    const {playlists, ...rest} = normalizePlaylist(playlist).entities;

    return {
        playlist: playlists[id],
        ...rest
    }
};
