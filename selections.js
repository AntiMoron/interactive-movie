module.exports = {
    start: {
        src: './assets/1.mp4',
        question: [
            {
                text: '递出纸条',
                link: 'a2',
                en: 'pass the message',
                key: 'a',
            },
            {
                text: '不递纸条',
                link: 'a3',
                en: 'maybe later'
                key: 'b',
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
                link: 'a5',
                en: 'admit'
            },
            {
                text: '否认',
                link: 'a6',
                en: 'deny'
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
                text: '打开门让母亲看见血迹',
                link: 'a9',
                en: 'let mother help'
            },
            {
                text: '独自留在厕所处理血迹',
                link: 'a10',
                en: 'handle it alone'
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
                link: 'a12',
                en: 'mention the blood'
            },
            {
                text: '递出手机',
                link: 'a13',
                en: 'give out cell phone'
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
                link: 'a15',
                en: 'accept'
            },
            {
                text: '拒绝',
                link: 'a16',
                en: 'refuse'
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
                link: 'a18',
                en: 'peep'
            },
            {
                text: '偷窥',
                link: 'a19',
                en: 'peek'
            }
        ]
    },
    a18: {
        src: './assets/18.mp4',
        next: 'a20',
    },
    a19: {
        src: './assets/19.mp4',
        next: 'a20',
    },
    a20: {
        src: './assets/20.mp4',
        next: 'start',
    }
};
