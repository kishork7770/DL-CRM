function loginUser() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (username.value && password.value) {
        const payload = {
            username: username.value,
            password: password.value
        };
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                console.log(xhttp.responseText);
                const parsedResponse = JSON.parse(xhttp.responseText);

                if (parsedResponse && parsedResponse.token) {
                    localStorage.setItem('dl-token', parsedResponse.token);
                    alert(parsedResponse.message);
                    window.location.href = './views/dashboard.html';
                }
            }
        }
        xhttp.open('POST', 'https://api.dev.crm.digitallync.ai/api/v1/users/login');
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send(JSON.stringify(payload));
    } else {

    }
}