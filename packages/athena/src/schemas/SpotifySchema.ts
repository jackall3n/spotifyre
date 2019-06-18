import {normalize} from 'normalizr';
import {PlaylistSchema} from "@spotifyre/charis/schemas";

export const normalizePlaylist = (data: any) => {
    return normalize(data, PlaylistSchema);
};
