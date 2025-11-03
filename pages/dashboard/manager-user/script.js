import { getUsers } from '../../../components/firebase/dashboard.js';

async function renderUI() {
    const users = await getUsers();
    let html = '';
    for (const user of users) {
        html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td>${user.name}</td>
                <td>${user.status}</td>
                <td>${user.createdAt}</td>
                <td>${user.updatedAt}</td>
                <td>
                    <button class="btn btn-primary">...</button>
                </td>
            </tr>
        `;
    }
    usersTable.innerHTML = html;
}

const usersTable = document.getElementById('users-table');
renderUI();