async function testProfile() {
    const profiler = require('v8-inspect-profiler');

// connect and start profiler
    const session = await profiler.startProfiling({port: 9222});

// time goes by ...

// stop profiler and disconnect
    const profile = await session.stop();

// save profile to disk
    await profiler.writeProfile(profile, 'somepath.cpuprofile');

}

exports.testProfile = testProfile;