function registerUser() {
    const nameInput = document.getElementById('name');
    const empCodeInput = document.getElementById('empCode');
    const mailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const roleInput = document.getElementById('role');


    if (usernameInput.value && passwordInput.value) {

        const payload = {
            name: nameInput.value,
            empCode: empCodeInput.value,
            email: mailInput.value,
            mobile: mobileInput.value,
            username: usernameInput.value,
            password: passwordInput.value,
            role: roleInput.value
        };


        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                alert("User added Successfully");
                const parsedResponse = JSON.parse(xhttp.responseText);

                if (parsedResponse && parsedResponse.token) {
                    localStorage.setItem('dl-token', parsedResponse.token);
                    alert(parsedResponse.message);
                }

            }
        }

        xhttp.open('POST', 'https://api.dev.crm.digitallync.ai/api/v1/users/register');
        xhttp.setRequestHeader('content-type', 'application/json');
        xhttp.send(JSON.stringify(payload));
    } else {

        alert("Outer Error");
    }




}