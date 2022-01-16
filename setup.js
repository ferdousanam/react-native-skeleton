const fs = require('fs');

const filePath = './.env.local';
const filePathCopy = './.env';

try {
    if (fs.existsSync(filePathCopy)) {
        console.log('.env File Already Exist');
        return;
    }
} catch (err) {
    console.error(err);
}

fs.copyFile(filePath, filePathCopy, (err) => {
    if (err) {
        throw err;
    }

    console.log('.env File Copy Successfully.');
});
