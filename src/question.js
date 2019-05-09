/**
 * 弹出某个问题
 * @param {*} answers 回答列表
 * @param {*} selectCallback 回答结束后的回调
 */
function question(answers, selectCallback) {
    let container = document.querySelector('#question');
    if (!container) {
        container = document.createElement('div');
        container.id = "question";
    }

    setTimeout(() => {
        const video = document.querySelector('#video');
        if (video) {
            const bottom = window.innerHeight - (video.offsetTop + video.clientHeight);
            container.style.bottom = bottom + 'px';
        }
    }, 20);

    const nodes = [...(container.childNodes || [])];
    nodes.forEach(function (node) {
        container.removeChild(node);
    });
    let bar = document.createElement('div');
    bar.id = "bar";
    container.appendChild(bar);
    let answerContainer = document.createElement('div');
    answerContainer.id = "answers";
    const pList = answers.map((answer) => {
        const p = document.createElement('p');
        p.className = 'answer';
        p.innerText = answer.text;
        p.onclick = function () {
            const ques = document.querySelector('#question');
            ques.style.height = '0';
            selectCallback && selectCallback(answer);
        };
        return p;
    });
    pList.forEach(function (p) {
        answerContainer.appendChild(p);
    })
    container.appendChild(answerContainer);
    return container;
}

module.exports = {
    question
};