import {schema} from "normalizr";

export const ArtistSchema = new schema.Entity('artists', {}, {
    idAttribute: value => value.id || "unknown"
});
