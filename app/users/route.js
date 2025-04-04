export const users = [
    { id: '1', name: 'Ram' },
    { id: '2', name: 'John' }
]
export async function GET() {
    return Response.json(users);
}
export async function POST(req) {
    const user = await req.json();
    const newUser = {
        id : users.length+1,
        name:user.name
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser),{
        headers:{
            'Content-Type':'application/json',
        },status:201
    })
}