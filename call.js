async function Verifytoken(url, options = {}) {
    const token = localStorage.getItem('token');

    if (!token) {        
        Swal.fire({
            title: 'Session Expired',
            text: 'Your token has expired. Would you like to log in again?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Log in',
            cancelButtonText: 'Go to Home'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/login.html'; 
            } else {
                window.location.href = '/index.html'; 
            }
        });
        return; // Exit the function if the token is expired
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
            localStorage.removeItem('token'); // Remove invalid token
            Swal.fire({
                title: 'Unauthorized',
                text: 'Your session has expired. Please log in again.',
                icon: 'warning',
                confirmButtonText: 'Log in'
            }).then(() => {
                window.location.href = '/login.html'; 
            });
            return; // Stop execution if unauthorized
        }

        return response;
    } catch (error) {
        console.error('Error making request:', error);
        Swal.fire({
            title: 'Error',
            text: 'An error occurred while processing your request. Please try again later.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
        throw error; // Rethrow the error for handling elsewhere if needed
    }
}
