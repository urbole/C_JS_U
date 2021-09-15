import {one, two} from './main.js'; //* импорт из другого файла //* если подключать модули в index.html надо полностью прописывать путь - main.js
console.log(`${one} and ${two}`);


// import { one as first } from './main'; //* можно переименовывать сразу при импорте
// console.log(first);


// import * as data from './main'; //* можно импортировать все
// console.log(`${data.one} and ${data.two}`);
// // data.sayHi(); //* работает при не дефолтном экспорте в файле main.js

import sayHi from './main.js'; //* если подключать модули в index.html надо полностью прописывать путь - main.js
sayHi();
