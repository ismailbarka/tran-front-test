const data = async () => {
    try {
        const response = await fetch('localhost:4000/api/users/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'ismail',
                password: '123'
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

data().then(result => {
    console.log(result);
});

