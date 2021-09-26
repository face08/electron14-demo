function monitor(mainWindow) {
    const os = require("os-utils");

    setInterval(() => {
        os.cpuUsage(function (v) {
            mainWindow.webContents.send("cpu", v * 100);
            mainWindow.webContents.send("mem", os.freememPercentage() * 100);
            mainWindow.webContents.send("total-mem", os.totalmem() / 1024);
        });
    }, 1000);
}