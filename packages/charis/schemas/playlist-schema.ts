import {schema} from 'normalizr';
import {TrackSchema} from "./track-schema";
import {UserSchema} from "./user-schema";

export const PlaylistSchema = new schema.Entity('playlists', {
    tracks: {
        items: [{
            track: TrackSchema,
            added_by: UserSchema
        }]
    },
    owner: UserSchema
});
