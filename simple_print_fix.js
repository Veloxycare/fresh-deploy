document.addEventListener('DOMContentLoaded', function() {
    // Simple print button fix
    setTimeout(function() {
        const printButtons = document.querySelectorAll('button');
        printButtons.forEach(btn => {
            if (btn.innerHTML.includes('print') || btn.innerHTML.includes('Print')) {
                const oldClick = btn.onclick;
                if (oldClick && oldClick.toString().includes('showNotification')) {
                    btn.onclick = function() {
                        showNotification('Opening print preview with logo...', 'info');
                        
                        const win = window.open('', '_blank', 'width=900,height=700');
                        win.document.write(`
                            <html>
                            <head><title>Print Document</title></head>
                            <body style="padding:40px;text-align:center;">
                                <img src="my-logo.png" style="width:280px;margin-bottom:20px;">
                                <h1>Alabama Healthcare Partners</h1>
                                <h3>Advanced Medicaid Intelligence Platform</h3>
                                <hr>
                                <p>Document prepared for printing</p>
                                <p>Generated: ${new Date().toLocaleString()}</p>
                                <script>
                                    setTimeout(function() { window.print(); window.close(); }, 1000);
                                </script>
                            </body>
                            </html>
                        `);
                        win.document.close();
                    };
                }
            }
        });
    }, 1000);
});
