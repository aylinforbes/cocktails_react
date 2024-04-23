const token = 'b247717f6d67fdd5aa373d162d40646ecac270ed49c9faa4'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://cocktails-flask.onrender.com/api/cocktails`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

create: async (data: any = {}) => {
    const response = await fetch(`https://cocktails-flask.onrender.com/api/cocktails`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to create new data on the server')
    }

    return await response.json()
},

update: async (id: string, data:any = {}) => {
    const response = await fetch(`https://cocktails-flask.onrender.com/api/cocktails/${id}`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to update data on the server')
    }

    return await response.json()
},

delete: async (id: string) => {
    const response = await fetch(`https://cocktails-flask.onrender.com/api/cocktails/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`
        },

    })

    if (!response.ok) {
        throw new Error('Failed to delete data from the server')
    }

    return;
},
}