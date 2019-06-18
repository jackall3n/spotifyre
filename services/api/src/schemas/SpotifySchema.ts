import {normalize, NormalizedSchema, schema} from 'normalizr';

export const UserSchema = new schema.Entity('users', {}, {
    idAttribute: value => value.id || "unknown"
});

export const AlbumSchema = new schema.Entity('albums', {
    artists: [UserSchema]
});

export const TrackSchema = new schema.Entity('tracks', {
    album: AlbumSchema,
    artists: [UserSchema]
});

export const PlaylistSchema = new schema.Entity('playlists', {
    tracks: {
        items: [{
            track: TrackSchema,
            added_by: UserSchema
        }]
    },
    owner: UserSchema
});

export const normalizePlaylist = (data: any): NormalizedSchema<any, any> => {
    return normalize<any, any>(data, PlaylistSchema);
};
