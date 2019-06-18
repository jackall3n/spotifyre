import {schema} from "normalizr";

export const UserSchema = new schema.Entity('users', {}, {
    idAttribute: value => value.id || "unknown"
});
