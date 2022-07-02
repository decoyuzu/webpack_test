// import 'js/sub';
import '@scss/app';

// setTimeout(() => {
//     import ("js/sub");
// }, 2000);
import 'js/sub';

import utils from './utils';
// import 'regenerator-runtime';
// import 'core-js';


const init = async() => {
    console.log("this is a main js file.");
    await asyncFn();
    jQuery();
    utils.log('hello from index.js');
};

async function asyncFn() {
    console.log([1, 2, 3].includes(0));
};
init();