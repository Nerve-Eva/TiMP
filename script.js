function getSystemInfo() {
    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        osinfo: navigator.oscpu,
        cpuClass: navigator.cpuClass,
        language: navigator.language,
        languages: navigator.languages,
        screen: {
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth
        },
        onlineStatus: navigator.onLine,
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

