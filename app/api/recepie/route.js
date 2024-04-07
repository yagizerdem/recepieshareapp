
import {getById} from "../../../query"
export async function GET(request){
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return Response.json({ data: null });
    const meal = getById(id)
    return Response.json({ data: meal })
}