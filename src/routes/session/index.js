import Api from '../../services/Api';

export async function post(req, res, next) {
    try {
        const response = await Api.post("/login", req.body);
        res.end("ok");
        return response.results;
    } catch (err) {
        console.error(err);
    }
};