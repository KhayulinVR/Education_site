
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('container');
		
        // Центрирование страницы при загрузке
        window.scrollTo(
            (container.scrollWidth - window.innerWidth) / 2, 
            (container.scrollHeight - window.innerHeight) / 2
        );

        let isDragging = false; // Флаг для отслеживания состояния перетаскивания
        let startX, startY; // Начальные координаты перетаскивания

        // Обработчик начала перетаскивания
        container.addEventListener('mousedown', (e) => {
            isDragging = true; // Устанавливаем флаг в true
            startX = e.clientX; // Сохраняем начальную координату x
            startY = e.clientY; // Сохраняем начальную координату y
            container.style.cursor = 'grabbing'; // Меняем курсор на захват
        });

        // Обработчик перемещения мыши
        document.addEventListener('mousemove', (e) => {
            if (isDragging) { // Проверяем, происходит ли перетаскивание
                const dx = e.clientX - startX; // Вычисляем смещение по x
                const dy = e.clientY - startY; // Вычисляем смещение по y
                window.scrollBy(-dx, -dy); // Прокручиваем страницу
                startX = e.clientX; // Обновляем начальную координату x
                startY = e.clientY; // Обновляем начальную координату y
            }
        });

        // Обработчик окончания перетаскивания
        document.addEventListener('mouseup', () => {
            isDragging = false; // Сбрасываем флаг перетаскивания
            container.style.cursor = 'default'; // Меняем курсор на стандартный
        });

        // Обработчик выхода мыши за пределы контейнера
        container.addEventListener('mouseleave', () => {
            isDragging = false; // Сбрасываем флаг перетаскивания
            container.style.cursor = 'default'; // Меняем курсор на стандартный
        });
    });
