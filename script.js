document.addEventListener('DOMContentLoaded', function() {
    const redirectBtn = document.getElementById('redirectBtn');
    const telegramUrl = 'https://t.me/Casino_Weaknesses/28';
    
    // Redirect on button click
    redirectBtn.addEventListener('click', function() {
        // Track button click in Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
        }
        
        // Small delay to ensure pixel event is sent
        setTimeout(function() {
            window.location.href = telegramUrl;
        }, 100);
    });
    
    // Optional: Auto-redirect after 5 seconds
    // Uncomment the lines below if you want automatic redirect
    // setTimeout(function() {
    //     window.location.href = telegramUrl;
    // }, 5000);
});

