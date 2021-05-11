"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const BufferT_1 = require("../../_T/BufferT");
const SrcTransition_1 = require("./SrcTransition");
var fs = require("fs");
var path = require("path");
const esbuild = require('esbuild');
/**
 * ts文件打包
 */
class TsBuild {
    /**
     * 打包
     * @param _url 模块路径，绝对路径
     * @param _suffix 模块后缀
     */
    static build(_url, _suffix) {
        return new Promise((r, e) => {
            //文件名字
            let _fileName = path.basename(_url);
            //读取目标文件
            fs.readFile(_url, (err, rootCode) => {
                if (err) {
                    e('读取文件失败！' + _url);
                }
                else {
                    rootCode = rootCode.toString();
                    //判断后缀
                    if (/^(ts)|(js)$/.test(_suffix)) {
                        //使用esbuild打包
                        esbuild.transform(rootCode, {
                            //装载器
                            loader: _suffix,
                            //内联映射
                            sourcemap: true,
                            //资源文件
                            sourcefile: `./.${_fileName} ✔`,
                            //字符集
                            charset: 'utf8',
                            //
                        }).then(({ code, map, warnings }) => {
                            //文件过渡
                            code = SrcTransition_1.default.tsBuildBack(code); //打包后
                            // console.log('esbuild之后的代码', chalk.gray(code.slice(0, 50)));
                            if (warnings.length > 0) {
                                warnings.forEach((item) => {
                                    console.log(chalk.gray(item));
                                });
                            }
                            //返回内容，全部转成buffer格式的数据
                            r({
                                code: Buffer.from(code + `//# sourceMappingURL=${_fileName}.map`),
                                map: Buffer.from(map),
                            });
                        }).catch((E) => {
                            e(`esBuild打包文件时出错@${_url}\n` + E);
                        });
                    }
                    //打包成普通文本
                    else {
                        let _code = SrcTransition_1.default.textBuildBack(rootCode);
                        r({
                            code: Buffer.from(_code),
                            map: BufferT_1.default.nullBuffer,
                        });
                    }
                }
            });
        });
    }
}
exports.default = TsBuild;
//# sourceMappingURL=TsBuild.js.map