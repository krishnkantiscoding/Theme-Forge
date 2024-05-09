const fs = require('fs');
const archiver = require('archiver');

function zipDirectory(source, out) {
    const archive = archiver('zip', { zlib: { level: 9 } }); // Sets the compression level.
    const stream = fs.createWriteStream(out);

    return new Promise((resolve, reject) => {
        archive
            .directory(source, false)
            .on('error', err => reject(err))
            .pipe(stream)
            ;

        stream.on('close', () => resolve());
        archive.finalize();
    });
}

// Usage:
// zipDirectory('../sampleExtension', './output.zip')
//     .then(() => console.log('Folder successfully zipped!'))
//     .catch(console.error);

module.exports = zipDirectory;