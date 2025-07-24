/* 
TODO-01: Create a function named fetchPostsAsync
         Mark it as async
         Use await fetch('https://dummyjson.com/posts')
         Handle response and parse JSON with await
         Log the posts data
         Wrap in try/catch to handle errors

TODO-02: Export fetchPostsAsync and test it in main.js 
*/

// จากตัวอย่างหน้า 14-fetch-data-async

export
const fetchPostsAsync = async () => {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        if (response.ok) {
            const data = await response.json()
            console.log(data.posts[1]);
            return // ตัดจบหลัง console.log ไม่ไปเจอ throw
        }
        throw new Error('Fail');
        // ปัญหา : ถึงแม้ว่า response.ok เป็น true ก็ยังมี throw new Error('Fail') ต่อท้ายเสมอ เพราะ throw อยู่นอก if แล้วมันจะโยน error ทุกครั้งหลังจาก console.log
        // วิธีแก้ : ย้าย throw เข้าไปไว้ใน else หรือใช้ return ต่อท้ายหลังจาก console.log ก็ได้

    } catch (error) {
        console.log('Error', error);
    }
}

// fetchPostsAsync()