// Minecraft Education 1.21 / MakeCode extension sample
// Toolbox category label defaults to English; localized via _locales ja / ja-JP.
//% color=#FF8C00 icon="\uf031" block="Hiragana"
namespace hiraloc {

    //% block="on chat %cmd do %handler"
    //% cmd.shadow="text" cmd.defl="start"
    export function onChat(cmd: string, handler: () => void): void {
        player.onChat(cmd, handler);
    }

    //% block="%times times repeat %handler"
    //% times.min=1 times.max=100 times.defl=3
    export function repeat(times: number, handler: () => void): void {
        for (let i = 0; i < times; i++) {
            handler();
        }
    }

    //% block="say %msg"
    //% msg.shadow="text" msg.defl="hello"
    export function say(msg: string): void {
        player.say(msg);
    }

    //% block="pause %ms ms"
    //% ms.min=10 ms.max=10000 ms.defl=500
    export function pause(ms: number): void {
        loops.pause(ms);
    }

    // Agent movement wrappers
    //% block="agent move forward %blocks blocks"
    //% blocks.min=1 blocks.max=100 blocks.defl=1
    export function agentForward(blocks: number): void { agent.move(FORWARD, blocks); }

    //% block="agent move back %blocks blocks"
    //% blocks.min=1 blocks.max=100 blocks.defl=1
    export function agentBack(blocks: number): void { agent.move(BACK, blocks); }

    //% block="agent move right %blocks blocks"
    //% blocks.min=1 blocks.max=100 blocks.defl=1
    export function agentRight(blocks: number): void { agent.move(RIGHT, blocks); }

    //% block="agent move left %blocks blocks"
    //% blocks.min=1 blocks.max=100 blocks.defl=1
    export function agentLeft(blocks: number): void { agent.move(LEFT, blocks); }

    //% block="agent move up %blocks blocks"
    //% blocks.min=1 blocks.max=100 blocks.defl=1
    export function agentUp(blocks: number): void { agent.move(UP, blocks); }

    //% block="agent move down %blocks blocks"
    //% blocks.min=1 blocks.max=100 blocks.defl=1
    export function agentDown(blocks: number): void { agent.move(DOWN, blocks); }

    // Agent place wrappers
    //% block="agent place block in front"
    export function agentPlaceFront(): void { agent.place(FORWARD); }

    //% block="agent place block below"
    export function agentPlaceDown(): void { agent.place(DOWN); }
}
