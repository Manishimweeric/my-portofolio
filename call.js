async function Verifytoken(url, options = {}) {
    const token = localStorage.getItem('token');

    if (!token) {        
        const userChoice = confirm('Your token has expired. Would you like to log in again?');            
            if (userChoice) {
                window.location.href = '/login.html'; 
            } else {
                window.location.href = '/index.html'; 
            }
            return;
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