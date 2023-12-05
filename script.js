function getSystemInfo() {
    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
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

    return JSON.stringify(systemInfo, null, 4);
}

async function uploadSystemInfo() {
    const info = getSystemInfo(); // Получаем информацию о системе
    try {
        const response = await fetch('http://timp.glitch.me/upload-system-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info) // Отправляем информацию о системе
        });

        if (response.ok) {
            console.log('Данные успешно отправлены');
            const responseData = await response.text();
            console.log(responseData);
        } else {
            console.log('Ошибка при отправке данных');
        }
    } catch (error) {
        console.error('Ошибка при отправке:', error);
    }
}

