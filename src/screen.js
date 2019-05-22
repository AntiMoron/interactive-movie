const { question } = require('./question');
const selection = require('../selections');

let cache = {};

/**
 * 创建一个id的video
 * @param {*} node 
 */
function getVideo(id, src, container, autoplay) {
    let video = cache[id];
    if (video) {
        video.playbackRate = window.__playbackRate || 1;
        return video;
    }
    video = document.createElement('video');
    video.id = id;
    video.src = src;
    container.appendChild(video);
    if (autoplay) {
        video.autoplay = "autoplay";
    }
    video.style.width = '100%';
    video.playbackRate = window.__playbackRate || 1;
    cache[id] = video;
    return video;
}

/**
 * 隐藏video属性
 * @param {*} video 一个videoDOM标签！！！！！！！！！
 */
function hideVideo(video) {
    video.style.display = 'none';
    video.load();
    video.pause();
}

function showVideo(video) {
    video.style.display = 'block';
    video.play();
}

/**
 * 没有就初始化视频
 * @param {*} container 
 */
function initVideo(container) {
    console.log(container)
    getVideo('v1', '', container);
    getVideo('v2', '', container);
    getVideo('v3', '', container);
}
/**
 * swapVideoToIndex
 */
function swapVideoToIndex(playingIndex) {
    const v1 = getVideo('v1');
    const v2 = getVideo('v2');
    const v3 = getVideo('v3');
    if (playingIndex === 0) {
        showVideo(v1);
        hideVideo(v2);
        hideVideo(v3);
        return v1;
    } else if (playingIndex === 1) {
        hideVideo(v1);
        showVideo(v2);
        hideVideo(v3);
        return v2;
    } else {
        hideVideo(v1);
        hideVideo(v2);
        showVideo(v3);
        return v3;
    }
}
/**
 * 根据索引号获取video元素
 * @param {*} idx 
 */
function getVideoByIndex(idx) {
    switch (idx) {
        case 0:
            return getVideo('v1');
        case 1:
            return getVideo('v2');
        case 2:
            return getVideo('v3');
    }
}

/**
 * 播放某个电影资源
 * @param src
 * @param vIdx 指定用哪个播放
 */
function playVideo(node, vIdx, setSrc) {
    if (!node) {
        node = selection['start'];
    }
    if (!vIdx) {
        vIdx = 0;
    }
    if (setSrc === undefined) {
        setSrc = true;
    }
    vIdx %= 3;
    console.info('==========Current Playing=========, vIdx', vIdx);
    console.info(node);
    const src = node.src;
    const questionOption = node.question;
    const next = node.next;
    // 先删除div
    let container = document.querySelector('#outlet');
    if (!container) {
        container = document.createElement('div');
        container.id = "outlet";
        document.body.appendChild(container);
    }
    initVideo(container);
    const video = getVideoByIndex(vIdx);
    if (setSrc) {
        video.src = src;
    }
    swapVideoToIndex(vIdx);
    // 和里面问题处理保持一致
    if (questionOption) {
        const q1 = (vIdx + 1) % 3;
        const q2 = (vIdx + 2) % 3;
        const q1V = getVideoByIndex(q1);
        const q2V = getVideoByIndex(q2);
        q1V.src = selection[questionOption[0].link].src;
        q1V.load();
        q2V.src = selection[questionOption[1].link].src;
        q2V.load();
    } else if (next) {
        const q1 = (vIdx + 1) % 3;
        q1V = getVideoByIndex(q1);
        q1V.src = selection[next].src;
        q1V.load();
    }

    let defaultSelectToken = undefined;
    video.onended = function () {
        if (questionOption) {
            const firstOption = questionOption[0];
            defaultSelectToken = setTimeout(() => {
                document.querySelector('#question').style.height = "0";
                playVideo(selection[firstOption.link], (vIdx + 1) % 3, false);
            }, 11 * 1000);

            document.querySelector('#question').style.height = window.innerHeight * 0.18 + 'px';
            const bar = document.querySelector('#bar');
            bar.style.width = '100%';
            bar.style.opacity = 1;
            setTimeout(() => {
                bar.style.width = 0;
                bar.style.opacity = 0.1;
            }, 200);
            return;
        }

        // 如果有下一个就播放下一个
        if (next) {
            playVideo(selection[next], (vIdx + 1) % 3, false);
            return;
        }
    };
    if (questionOption) {
        const qDiv = question(questionOption, (answer, idx) => {
            playVideo(selection[answer.link], (idx + 1 + vIdx) % 3, false);
            if (defaultSelectToken !== undefined) {
                clearTimeout(defaultSelectToken);
            }
        });
        qDiv.style.height = '0';
        container.appendChild(qDiv);
    }
    //////////测试条///////////
    // setTimeout(() => {
    //     const question = document.querySelector('#question');
    //     question.style = {};
    //     question.style.height = window.innerHeight * 0.18 + 'px';
    //     const bar = document.querySelector('#bar');
    //     bar.style.width = '100%';
    //     bar.style.opacity = 1;
    //     setTimeout(() => {
    //         bar.style.width = 0;
    //         bar.style.opacity = 0.1;
    //     }, 200);
    // }, 2000);
    //////////测试条///////////
}

module.exports = {
    playVideo
};