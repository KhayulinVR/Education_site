<script>
    const object = document.getElementById('object');
    const tooltipText = document.getElementById('object');

    object.addEventListener('mouseover', (event) => {
        const tooltipRect = object.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const halfViewportWidth = viewportWidth / 2;

        if (tooltipRect.left < halfViewportWidth) {
            // Если элемент находится в левой половине окна
            tooltipText.textContent = 'Это всплывающая надпись слева!';
            tooltipText.style.left = '125%';
            tooltipText.style.right = 'auto';
        } else {
            // Если элемент находится в правой половине окна
            tooltipText.textContent = 'Это всплывающая надпись справа!';
            tooltipText.style.left = 'auto';
            tooltipText.style.right = '125%';
        }
    });
</script>