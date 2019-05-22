// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { entry } = require('./src/index');


//实际使用
document.onkeydown = function (e) {	//对整个页面文档监听
    var keyNum = window.event ? e.keyCode : e.which;		//获取被按下的键值
    function changeSpeed(s) {
        const vs = document.getElementsByTagName('video');
        window.__playbackRate = s;
        if (vs) {
            [...vs].forEach(v => {
                v.playbackRate = s;
            });
        }
    }
    //判断如果用户按下了回车键（keycody=13）
    if (keyNum == 70) {
        console.log('F fast 4x');
        // 加速播放
        changeSpeed(4);
    }
    if (keyNum == 71) {
        console.log('G(Mega) fast speed 8x');
        // 还原正常
        changeSpeed(8);
    }
    //判断如果用户按下了空格键(keycode=32)，
    if (keyNum == 68) {
        console.log('Normal speed');
        // 还原正常
        changeSpeed(1);
    }
}

entry();

