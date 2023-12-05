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

function downloadSystemInfo() {
    const info = getSystemInfo();
    const blob = new Blob([info], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'system-info.txt';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(fileUrl);
}
