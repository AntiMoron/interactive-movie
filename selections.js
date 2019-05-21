module.exports = {
    start: {
        src: './assets/1.mp4',
        question: [
            {
                text: '鼓起勇气',
                link: 'a2'
            },
            {
                text: '犹豫退缩',
                link: 'a3'
            }
        ]
    },
    a2: {
        src: './assets/2.mp4',
        next: 'a4',
    },
    a3: {
        src: './assets/3.mp4',
        next: 'a4',
    },
    a4: {
        src: './assets/4.mp4',
        question: [
            {
                text: '承认',
                link: 'a5'
            },
            {
                text: '否认',
                link: 'a6'
            }
        ]
    },
    a5: {
        src: './assets/5.mp4',
        next: 'a7',
    },
    a6: {
        src: './assets/6.mp4',
        next: 'a7',
    },
    a7: {
        src: './assets/7.mp4',
        next: 'a8',
    },
    a8: {
        src: './assets/8.mp4',
        question: [
            {
                text: '让母亲处理',
                link: 'a9'
            },
            {
                text: '独自处理',
                link: 'a10'
            }
        ]
    },
    a9: {
        src: './assets/9.mp4',
        next: 'a11',
    },
    a10: {
        src: './assets/10.mp4',
        next: 'a11',
    },
    a11: {
        src: './assets/11.mp4',
        question: [
            {
                text: '提及血迹',
                link: 'a12'
            },
            {
                text: '递出手机',
                link: 'a13'
            }
        ]
    },
    a12: {
        src: './assets/12.mp4',
        next: 'a14',
    },
    a13: {
        src: './assets/13.mp4',
        next: 'a14',
    },
    a14: {
        src: './assets/14.mp4',
        question: [
            {
                text: '接受',
                link: 'a15'
            },
            {
                text: '拒绝',
                link: 'a16'
            }
        ]
    },
    a15: {
        src: './assets/15.mp4',
        next: 'a17',
    },
    a16: {
        src: './assets/16.mp4',
        next: 'a17',
    },
    a17: {
        src: './assets/17.mp4',
        question: [
            {
                text: '偷听',
                link: '18'
            },
            {
                text: '偷窥',
                link: '19'
            }
        ]
    },
    a18: {
        src: './assets/18.mp4',
        next: 'final',
    },
    a19: {
        src: './assets/19.mp4',
        next: 'final',
    },
    final: {
        src: './assets/final.mp4'
    }
};