function showLeads() {

    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {

        if (request.readyState == 4) {
            window.alert("Successfull");
            //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbnVzZXJAeW9wbWFpbC5jb20iLCJtb2JpbGUiOiI4Njg2ODk3ODAwIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE2MDM3MDI0LCJleHAiOjE3MTYxMjM0MjR9._ETtxdTvAy1K0yv8utZN5js96ku32IO0krgLZVxEopo';
            const leads = JSON.parse(request.responseText).leads;
            let str = `<tr>
            <th>USER ID</th>
            <th>NAME</th>
            <th>PHONE</th>
            <th>EMAIL</th>
        </tr>`;
            for (let i = 1; i < 5; i++) {
                str += `
                <tr>
                <td>${leads[i].id}</td>
                <td>${leads[i].name}</td>
                <td>${leads[i].phone}</td>
                <td>${leads[i].email}</td>
                </tr>`;
            }
            document.getElementById('demo').innerHTML = str;

        }
    }
    request.open('GET', 'https://api.dev.crm.digitallync.ai/api/v1/leads/');
    request.setRequestHeader('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbnVzZXJAeW9wbWFpbC5jb20iLCJtb2JpbGUiOiI4Njg2ODk3ODAwIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE2ODEwMjYyLCJleHAiOjE3MTY4OTY2NjJ9.y2FRPkK3hexe-_gb1qwEVTDV5EescPe_dRGO5udJ1Dc');
    request.send();

}
