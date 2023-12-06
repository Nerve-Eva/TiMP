function getSystemInfo() {
    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        osinfo: navigator.oscpu,
        cpuClass: navigator.geolocation,
        language: navigator.language,
        deviceMemory: navigator.deviceMemory || 'Неизвестно'
    };

    return systemInfo;
}

async function uploadSystemInfo() {
    const info = getSystemInfo(); // Получаем информацию о системе
    console.log("Отправляемые данные:", info);
    console.log("JSON:", JSON.stringify(info));
    await fetch('http://timp.glitch.me/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info) // Отправляем информацию о системе
    });
}

