function startListenWords(_handler) {
    function handler(e) {
        _handler(e);
    }
    document.addEventListener('onkeydown', handler);
  return function() {
      document.removeEventListener('onkeydown', handler);
  };
}

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

    // setTimeout(() => {
    //     const video = document.querySelector('#video');
    //     // if (video) {
    //         // const bottom = window.innerHeight - (video.offsetTop + video.clientHeight);
    //         // container.style.bottom = Math.max(0, bottom) + 'px';
    //     // }
    // }, 20);

    const nodes = [...(container.childNodes || [])];
    nodes.forEach(function (node) {
        container.removeChild(node);
    });
    let bar = document.createElement('div');
    bar.id = "bar";
    container.appendChild(bar);
    let answerContainer = document.createElement('div');
    answerContainer.id = "answers";
    const pList = answers.map((answer, idx) => {
        const d = document.createElement('div');
        d.className = 'answer';
        const p = document.createElement('p');
        p.className = 'answer-cn';
        p.innerText = '「   ' + answer.text + '   」';
        p.onclick = function () {
            const ques = document.querySelector('#question');
            ques.style.height = '0';
            selectCallback && selectCallback(answer, idx);
        };
        const p2 = document.createElement('p');
        p2.className = 'answer-en';
        p2.innerText = answer.en;
        p2.onclick = function () {
            const ques = document.querySelector('#question');
            ques.style.height = '0';
            selectCallback && selectCallback(answer, idx);
        };
        d.appendChild(p);
        d.appendChild(p2);
        const dtor = startListenWords(function(e){
            if (e.key.toLowerCase() === answer.key) {
                dtor();
                selectCallback && selectCallback(answer, idx);
            }
        });
        return d;
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
