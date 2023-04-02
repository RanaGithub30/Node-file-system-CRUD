const fs = require('fs');

const folderName = 'test';
const fileName = "bio.txt";

/**
 * chck if the folder is already exists or not, if not exist create a new one.
*/

try {
    if (!fs.existsSync(folderName)) {
        // create a new folder called test
        fs.mkdirSync(folderName)
    }
} catch (err) {
    console.error(err);
}

/**
 * first check if a file is exist in given directory or not
 * if not exists, it will create a new one & write its content 
 * if exist it will make a new line given in else 
 */

try{
    if(!fs.existsSync(folderName+'/'+fileName)){
         fs.writeFileSync(folderName+'/'+fileName, 'This file is created by Node Programming');
    }else{
         fs.appendFileSync(folderName+'/'+fileName, '\n This is a new line created when the page is already exists 2');
    }
}
catch (err) {
    console.error(err);
}

/* 
Read the content of the file 
we have to use utf8 to avoid buffer data
*/

const data = fs.readFileSync(folderName+'/'+fileName, 'utf8');
// console.log(data);

/**
 * Rename existing file name 
*/

// fs.renameSync(folderName+'/'+fileName, 'NewBio.txt');

// delete file
// fs.unLinkSync(folderName+'/'+fileName)

// delete folder
// fs.rmdirSync(folderName)