navigator.mediaDevices.addEventListener('devicechange', () => {
    console.log('get you');
});

async function setup() {
    try {
        await navigator.mediaDevices.getUserMedia({
            audio: {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    echoCancellation: true,
                    noiseSuppression: true,
                },
            },
            video: {
                mandatory: {
                    // arbitrary limits for width and height
                    maxWidth: 10000,
                    maxHeight: 10000,
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: 'mediasourceIdWhenNeeded',
                },
            },
        })
    } catch (e) {
        console.log('asdf', e);
    }

}


function testStore() {
    const electronStore = require('electron-store');
    const eleStore = new electronStore();

    let j = {name: 'face', age: 22}
    eleStore.set('userInfo', j);

    let t = eleStore.get('userInfo');
    console.log(t);

}

testStore();
