window.addEventListener('DOMContentLoaded', (event) => {
    fetch('file.json')
        .then(response => response.json())
        .then(data => {
            // اینجا می توانید داده های فایل JSON را تغییر دهید
            // به عنوان مثال:
            data.name = 'John Doe';
            data.age = 30;

            // حالا می توانید داده های تغییر یافته را به سرور ارسال کنید
            // به عنوان مثال:
            fetch('path/to/save/updated/json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(updatedData => {
                console.log('داده های تغییر یافته:', updatedData);
            })
            .catch(error => {
                console.error('خطا در ارسال داده ها:', error);
            });
        })
        .catch(error => {
            console.error('خطا در بارگیری فایل JSON:', error);
        });
});
