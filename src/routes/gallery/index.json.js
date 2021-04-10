import {items} from './_items.js';

export function get(req, res, next) {
    res.end(JSON.stringify(items));
}