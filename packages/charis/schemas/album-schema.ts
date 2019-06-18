import {schema} from "normalizr";
import {UserSchema} from "./user-schema";

export const AlbumSchema = new schema.Entity('albums', {
    artists: [UserSchema]
});
