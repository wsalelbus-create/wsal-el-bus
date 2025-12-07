// ===== PREVENT ELASTIC BOUNCE AND PULL-TO-REFRESH =====
// Aggressive solution that works on iOS Safari
let lastY = 0;
let isScrolling = false;

// Prevent on document level
document.addEventListener('touchstart', function (e) {
    lastY = e.touches[0].clientY;

    // Check if arrivals panel is scrollable
    const arrivalsPanel = document.querySelector('.arrivals-panel');
    if (arrivalsPanel) {
        isScrolling = arrivalsPanel.scrollTop > 0;
    }
}, { passive: false });

document.addEventListener('touchmove', function (e) {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - lastY;

    // If pulling down (deltaY > 0) when not scrolling, prevent it
    if (deltaY > 0 && !isScrolling) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
}, { passive: false });

// Also prevent on body
document.body.addEventListener('touchmove', function (e) {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - lastY;

    if (deltaY > 0 && window.scrollY === 0) {
        e.preventDefault();
    }
}, { passive: false });
