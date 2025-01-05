import path from 'node:path';

const notes = '/users/joe/notes.txt';


console.log('object :>> ', 
path.dirname(notes),
path.basename(notes),
path.extname(notes));


console.log('object123 :>> ', path.basename(notes, path.extname(notes)));


const name = 'joe';
path.join('/', 'users', name, 'notes.txt'); // '/users/joe/notes.txt'
console.log('obj 3:>> ', path.join('/', 'users', name, 'notes.txt'));

path.resolve('joe.txt'); // '/Users/joe/joe.txt' if run from my home folder
 console.log('obj 4 :>> ', path.resolve('joe.txt'));

 path.resolve('tmp', 'joe.txt'); // '/Users/joe/tmp/joe.txt' if run from my home folder
 console.log('obj 5 :>> ', path.resolve('tmp1','tmp2','joe.txt'));

 path.normalize('/users/joe/.//test.txt'); // '/users/test.txt'
console.log('obj 6 :>> ', path.normalize('/users/joe/..//test.txt'));