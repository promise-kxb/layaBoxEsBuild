//先判断能否使用serviceWorker
if ('serviceWorker' in navigator) {
    //注册
    let _ifRegister = false;
    //更新已有的sw
    if (navigator.serviceWorker.controller) {
        //关闭上一个版本的sw
        if (navigator.serviceWorker.controller.scriptURL.match(/[^\/]+$/)[0] != esbuildTool.config.swURL) {
            _ifRegister = true;
            navigator.serviceWorker.controller.postMessage(JSON.stringify({
                type: 'close',
            }));
            //提示打开新窗口
            console.log(
                ...esbuildTool.consoleEx.textPack(
                    esbuildTool.consoleEx.getStyle('#fdfaf6', '#f08a5d'),
                    `工具更新，已停用旧 serviceWorker 
关闭此窗口，用新窗口打开 ${location.href} 重启项目。
或者打开 chrome://serviceworker-internals 手动关闭 serviceWorker`
                )
            );
        } else {
            navigator.serviceWorker.controller.postMessage(JSON.stringify({
                type: 'update',
                mes: esbuildTool.config,
            }));
        }
    } else {
        _ifRegister = true;
    }
    //
    if (_ifRegister) {
        //注册sw
        navigator.serviceWorker.register(`/${esbuildTool.config.swURL}`).then((registration) => {
            //立刻发送一个初始化事件，初始化相关信息
            registration.active?.postMessage(JSON.stringify({
                type: 'update',
                mes: esbuildTool.config,
            }));
            //
            console.log(
                ...esbuildTool.consoleEx.textPack(
                    esbuildTool.consoleEx.getStyle('#8785a2', '#f4f6ff'),
                    'ServiceWorker 注册成功✔️: 访问更快⚡'
                )
            );
        }).catch((err) => {
            console.log(
                ...esbuildTool.consoleEx.textPack(
                    esbuildTool.consoleEx.getStyle('#8785a2', '#f4f6ff'),
                    `ServiceWorker 注册失败❌: ${err}`
                )
            );
        });
    }
} else {
    console.log(
        ...esbuildTool.consoleEx.textPack(
            esbuildTool.consoleEx.getStyle('#8785a2', '#ffeda3'),
            '不支持 ServiceWorker ! 😱'
        )
    );
}