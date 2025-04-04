import { users } from "../route"; // Make sure this import path is correct

export async function GET(request, { params }) { // No 'await' for 'params'
    const { id } = await params;
    const user = users.find((user) => user.id === parseInt(id));
    
    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(user), { status: 200 });
}
