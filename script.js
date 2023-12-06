function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  // Используйте данные широты и долготы
}

function error() {
  // Обработка ошибок при получении геолокации
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function getSystemInfo() {
    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        osinfo: navigator.oscpu,
        geo: navigator.geolocation.getCurrentPosition(success, error, options),
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

