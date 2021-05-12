import FileModule, { IFileModuleContent } from "../../com/FileModule";
import MainConfig from "../../config/MainConfig";
import { EWebSocketMesType } from "../../webSocket/EWebSocketMesType";
import WebSocket from "../../webSocket/WebSocket";
import TsBuild from "./TsBuild";
var moment = require('moment');
var chalk = require('chalk');
import type { Message } from "esbuild/lib/main";

/**
 * Src模块
 */
export default class SrcModule extends FileModule {
    /** 更新总数 */
    private static m_updateSum: number = 0;

    /** 初始化回调 */
    protected _init() {
        //
        if (MainConfig.config.ifLog) {
            console.log(chalk.gray('-> 创建模块'));
            console.log(chalk.gray(this.absolutePath));
        }
    }

    /**
     * 更新回调
     */
    public _update() {
        SrcModule.m_updateSum++;
        //
        if (MainConfig.config.ifLog) {
            console.log(chalk.gray('>'));
            console.log(chalk.gray('--> 模块更新'), chalk.yellow(this.absolutePath));
            console.log(chalk.gray('x', this.updateNumber), chalk.magenta('X', SrcModule.m_updateSum), chalk.blue(moment(Date.now()).format('HH:mm:ss')));
        }
        //发出脚本更新事件
        WebSocket.send(this.key, EWebSocketMesType.scriptUpdate);
    }

    /** 更新内容 */
    protected _updateContent(): Promise<IFileModuleContent> {
        //返回一个esbuild的任务
        return TsBuild.build(this.absolutePath, this.suffix);
    }

    /** 处理错误回调 */
    protected _mismanage(_e: Message[] | string): string {
        if (!_e) { return ''; }
        //
        let _mess: {
            text: string,
            vsCodeUrl: string,
        }[] = [];
        let _vscodeUrl: string;
        if (typeof _e == 'object' && Array.isArray(_e)) {
            for (let _o of _e) {
                //拼接vscodeUrl
                _vscodeUrl = `vscode://file/${encodeURI(`${this.normPath}:${_o.location.line}`)}`;
                //
                _mess.push({
                    text: `文件：${this.normPath}\n位置：${_o.location.line}:${_o.location.column}\n错误代码：${_o.location.lineText}\n错误信息：${_o.text}`,
                    vsCodeUrl: _vscodeUrl,
                });
            }
        } else {
            _mess.push({
                text: _e,
                vsCodeUrl: `vscode://file/${this.normPath}`,
            });
        }
        //最后的代码
        let _content: string = '';
        for (let _mes of _mess) {
            console.log(chalk.yellow('esbuild打包错误'));
            console.log(chalk.gray(_mes.text));
            //
            _content += `
                console.error('Esbuild打包出错');
                console.error(\`${ _mes.text}\`);
                ${_mes.vsCodeUrl ? `console.error('点击直达：', \`${_mes.vsCodeUrl}\`);` : ''}
                \n
            `
        }
        //
        return _content;
    }
}