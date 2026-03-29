document.addEventListener('DOMContentLoaded', () => {
            const overlay = document.getElementById('overlay');
            const content = document.querySelector('.container');
            const bg = document.getElementById('bg');

            overlay.addEventListener('click', () => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    content.style.display = 'flex';
                    bg.play();
                }, 1000);
            })});