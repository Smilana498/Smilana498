document.getElementById('submitRating').addEventListener('click', function() {
    const rating = parseInt(document.getElementById('rating').value);
    const messageElement = document.getElementById('message');

    if (isNaN(rating) || rating < 1 || rating > 10) {
        messageElement.textContent = 'Пожалуйста, введите число от 1 до 10!';
        return;
    }

    if (rating > 5) {
        messageElement.textContent = 'Спасибо за высокую оценку!';
    } else {
        messageElement.textContent = 'Мы работаем над улучшением сервиса!';
    }
});



