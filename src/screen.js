const { question } = require('./question');
const selection = require('../selections');

/**
 * 播放某个电影资源
 * @param src
 */
function playVideo(node) {
    if (!node) {
        node = selection['start'];
    }
    const src = node.src;
    const questionOption = node.question;
    const next = node.next;
    // 先删除div
    let container = document.querySelector('#outlet');
    if (!container) {
        container = document.createElement('div');
        container.id = "outlet";
    }
    let video = document.querySelector('#video');
    if (video) {
        // 销毁下
        const v = document.createElement('video');
        container.replaceChild(v, video);
        video = v;
    } else {
        video = document.createElement('video');
        container.appendChild(video);
    }
    video.src = src;
    video.id = "video";
    video.autoplay = "autoplay";
    video.style.width = '100%';

    video.onended = function () {
        // 如果有下一个就播放下一个
        if (next) {
            playVideo(selection[next]);
            return;
        }
        if (!next && questionOption) {
            document.querySelector('#question').style.height = window.innerHeight * 0.18 + 'px';
            const bar = document.querySelector('#bar');
            bar.style.width = '100%';
            bar.style.opacity = 1;
            setTimeout(() => {
                bar.style.width = 0;
                bar.style.opacity = 0.1;
            }, 200);

            if (questionOption) {
                const firstOption = questionOption[0];
                setTimeout(() => {
                    document.querySelector('#question').style.height = "0";
                    playVideo(selection[firstOption.link]);
                }, 8 * 1000);
            }
        }
    };
    if (questionOption) {
        const qDiv = question(questionOption, (answer) => {
            playVideo(selection[answer.link]);
        });
        qDiv.style.height = '0';
        container.appendChild(qDiv);
    }
    //////////测试条///////////
    setTimeout(() => {
        const question = document.querySelector('#question');
        question.style = {};
        question.style.height = window.innerHeight * 0.18 + 'px';
        const bar = document.querySelector('#bar');
        bar.style.width = '100%';
        bar.style.opacity = 1;
        setTimeout(() => {
            bar.style.width = 0;
            bar.style.opacity = 0.1;
        }, 200);
    }, 2000);
    //////////测试条///////////
    document.body.appendChild(container);
}

module.exports = {
    playVideo
};