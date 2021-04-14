this.addEventListener('install', function (event) {
    // 处理安装步骤
    // console.log('sw install');
});
this.addEventListener('activate', function (event) {
    // 处理安装步骤
    // console.log('sw activate');
});

/** 版本字符串 */
let _v;

//监听消息
this.addEventListener('message', function (event) {
    let { type, mes } = JSON.parse(event.data);
    //
    switch (type) {
        //设置版本
        case 'v':
            //查看外部版本和当前进程版本是否一致，不一致的话清空缓存
            if (_v != mes) {
                cacheT.removeAll();
            }
            _v = mes;
            //
            break;
        //监听脚本更新消息，更新缓存
        case 'scriptUpdate':
            cacheT.remove(mes);
            //
            break;
    }
});

//监听请求
this.addEventListener('fetch', function (event) {
    let _response;
    //在有版本的情况下先在缓存中找响应
    if (_v) {
        _response = cacheT.get(event.request.url);
    }
    if (!_response) {
        //发送请求
        _response = fetch(event.request).then((response) => {
            //判断response的响应头，是否应该添加到缓存中。
            if (response.headers.has('file-only-key')) {
                // console.log('添加进缓存', response);
                //添加到缓存中，注意，必须添加克隆板，不然只能用一次
                cacheT.add(event.request.url, response.headers.get('file-only-key'), response.clone());
            }
            //返回响应
            return response;
        });
    }
    //拦截请求
    event.respondWith(
        _response,
    );
});

/**
 * 缓存工具
 * 缓存到进程内存中
 */
class cacheT {
    /** 缓存内容，[_url,_key,_response][] */
    static cache = [];

    /**
     * 根据一个请求路径获取缓存
     * @param {*} _url 请求路径
     */
    static get(_url) {
        let _data = this.cache.find((item) => {
            return item[0] == _url;
        });
        //
        if (_data) {
            // console.log('从缓存中取得资源', _url);
            return _data[2].clone();
        }
    }

    /**
     * 添加一个缓存
     * @param {*} _url url
     * @param {*} _key 唯一键值
     * @param {*} _response 响应
     */
    static add(_url, _key, _response) {
        this.cache.push([_url, _key, _response]);
    }

    /**
     * 删除一个缓存
     * @param {*} _key 唯一键值
     */
    static remove(_key) {
        let _index = this.cache.findIndex((item) => {
            return item[1] == _key;
        });
        if (_index != -1) {
            // console.log('删除缓存');
            //
            this.cache.splice(_index, 1);
        }
    }

    /**
     * 删除所有缓存
     */
    static removeAll() {
        this.cache.length = 0;
    }
}