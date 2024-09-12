async function Verifytocken(url, options = {}) {
    const token = localStorage.getItem('token');

    if (!token) {        
        window.location.href = '/login';
        return;
    }
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 401) {          
            localStorage.removeItem('authToken');
            window.location.href = '/login.html'; 
            return;
        }

        return response;
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
  }
 }