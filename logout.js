function logout() {    
        const confirmed = confirm('Are you sure you want to log out?');
    
        if (confirmed) {
            localStorage.removeItem('token');
            localStorage.removeItem('token');     
            alert('You have been logged out successfully.');      
            window.location.href = 'login.html';
        }
    }    

