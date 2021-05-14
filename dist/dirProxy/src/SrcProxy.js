"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MainConfig_1 = __importDefault(require("../../config/MainConfig"));
var HttpTool_1 = __importDefault(require("../../http/HttpTool"));
var SrcOperation_1 = __importDefault(require("./SrcOperation"));
/**
 * src代理
 */
var SrcProxy = /** @class */ (function () {
    function SrcProxy() {
    }
    /**
     * 开始
     */
    SrcProxy.start = function () {
        // req 请求， res 响应 
        return HttpTool_1.default.createServer(function (req, res) {
            //head
            var _head = {
                'Content-Type': 'application/javascript;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE',
                'Access-Control-Expose-Headers': 'Content-Type,*',
                'cache-control': 'no-cache', //协商缓存
            };
            //get请求
            if (req.method === 'GET') {
                //
                SrcOperation_1.default.getFile(req).then(function (_fileData) {
                    //
                    res.writeHead(_fileData.stateCode, __assign(__assign({}, _head), _fileData.resHead));
                    //返回数据
                    res.end(_fileData.content);
                });
            }
            //post请求
            else if (req.method === 'POST') {
                //
                res.end('不支持post请求。');
            }
        }, MainConfig_1.default.config.port.src)
            .then(function (server) {
            //重置scr目录服务代理端口
            MainConfig_1.default.config.port.src = server.address().port;
        });
        ;
    };
    /**
     * 获取主页地址
     */
    SrcProxy.getHomePage = function () {
        return '';
    };
    return SrcProxy;
}());
exports.default = SrcProxy;
//# sourceMappingURL=SrcProxy.js.map