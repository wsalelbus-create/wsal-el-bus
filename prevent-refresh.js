// ===== PREVENT PULL-TO-REFRESH =====
// Simple, aggressive solution - prevent ALL downward touch movements when at page top
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: false });

document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const touchDelta = touchY - touchStartY;

    // If pulling down (positive delta) when window is at top, block it
    if (touchDelta > 0 && window.scrollY === 0) {
        e.preventDefault();
        return false;
    }
}, { passive: false });
