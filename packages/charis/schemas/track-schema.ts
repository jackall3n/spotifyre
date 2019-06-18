import {schema} from 'normalizr';
import {AlbumSchema} from "./album-schema";
import {ArtistSchema} from "./artist-schema";

export const TrackSchema = new schema.Entity('tracks', {
    album: AlbumSchema,
    artists: [ArtistSchema]
});
