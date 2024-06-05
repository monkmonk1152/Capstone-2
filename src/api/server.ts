export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://capstone-ce99d-default-rtdb.firebaseio.com/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://capstone-ce99d-default-rtdb.firebaseio.com/contacts`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (name: string, data:any = {}) => {
        const response = await fetch(`https://capstone-ce99d-default-rtdb.firebaseio.com/contacts/${name}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://capstone-ce99d-default-rtdb.firebaseio.com/contacts/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}