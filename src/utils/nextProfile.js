function nextProfile() {
    const v8Profiler = require('v8-profiler-next');
    const title = 'next';
// ex. 5 mins cpu profile
    v8Profiler.startProfiling(title, true);
    setTimeout(() => {
        const profile = v8Profiler.stopProfiling(title);
        profile.export(function (error, result) {
            // if it doesn't have the extension .cpuprofile then
            // chrome's profiler tool won't like it.
            // examine the profile:
            //   Navigate to chrome://inspect
            //   Click Open dedicated DevTools for Node
            //   Select the profiler tab
            //   Load your file
            fs.writeFileSync(`${title}.cpuprofile`, result);
            profile.delete();
        });
    }, 5 * 1000);


}

exports.nextProfile = nextProfile;