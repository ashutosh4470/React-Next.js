import React from 'react'
import { revalidatePath } from 'next/cache';

const MockUsers = async () => {
    const response = await fetch('https://67efb6b72a80b06b889579fe.mockapi.io/users');
    const users = await response.json();

    const addUser = async(FormData)=>{
        'use server'
        const name = FormData.get('name');
        const res = await fetch('https://67efb6b72a80b06b889579fe.mockapi.io/users',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name}),
        })
        const newUser = await res.json();
        revalidatePath('/mock-users');
        console.log("newUser : ",newUser);
    }

    return (
        <div className='py-10'>
            <form action={addUser} className='mb-4'>
                <input type="text" name='name' required className='border p-2 mr-2' />
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                    Add User 
                </button>
            </form>
            <div className='grid grid-cols-4 gap-4 py-10'>
                {users.map((user) => (
                    <div key={user.id}
                        className='p-4 bg-white shadow-md rounded-lg text-gray-700'>
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MockUsers