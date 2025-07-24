/* 
TODO-01: Create a function named fetchPostsThen
         Use fetch('https://dummyjson.com/posts')
         Use .then() to convert response to JSON
         Use another .then() to log the posts data
         Use .catch() to handle errors

TODO-02: Export fetchPostsThen and test it in main.js 
*/

// ตัวอย่างจากหน้า 12-fetch-data-basic

export
const fetchPostsThen = () => {
    fetch('https://dummyjson.com/posts')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Fail');
    })
    .then((data) => {
        console.log(data.posts[0]);
    })
    .catch((error) => {
        console.log('Error', error);
    })
}

// fetchPostsThen();