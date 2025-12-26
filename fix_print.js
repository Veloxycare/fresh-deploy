function fixAllPrintButtons() {
    const printButtons = document.querySelectorAll('button, .table-btn');
    
    printButtons.forEach(btn => {
        const html = btn.innerHTML.toLowerCase();
        const text = btn.textContent.toLowerCase();
        const onclick = btn.getAttribute('onclick');
        
        if ((html.includes('print') || text.includes('print')) && 
            onclick && onclick.includes('showNotification')) {
            
            btn.removeAttribute('onclick');
            
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const row = this.closest('tr');
                const reportName = row ? row.querySelector('td:first-child')?.textContent : 'Report';
                
                showNotification(`Printing ${reportName} with logo...`, 'info');
                
                const printWindow = window.open('', '_blank');
                printWindow.document.write(`
                    <html>
                    <head>
                        <title>Alabama Healthcare Partners - ${reportName}</title>
                        <style>
                            body { font-family: Arial, sans-serif; margin: 40px; }
                            .logo-header { text-align: center; margin-bottom: 30px; }
                            .logo-header img { width: 280px; height: auto; }
                            .report-title { font-size: 24px; margin: 20px 0; color: #2c3e50; }
                            .report-meta { color: #666; margin-bottom: 30px; }
                            .content { line-height: 1.6; }
                            .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ccc; 
                                     font-size: 12px; color: #777; text-align: center; }
                        </style>
                    </head>
                    <body>
                        <div class="logo-header">
                            <img src="my-logo.png" alt="Alabama Healthcare Partners">
                            <h1 class="report-title">${reportName}</h1>
                            <div class="report-meta">
                                <p>Generated: ${new Date().toLocaleString()}</p>
                                <p>User: System Administrator</p>
                                <p>Alabama Healthcare Partners - Medicaid Intelligence Platform</p>
                            </div>
                        </div>
                        <div class="content">
                            <h3>Report Content</h3>
                            <p>This is a sample report. In a real implementation, this would contain the actual report data.</p>
                            <p>All reports include the Alabama Healthcare Partners logo and branding automatically.</p>
                        </div>
                        <div class="footer">
                            <p>Confidential Document &copy; ${new Date().getFullYear()} Alabama Healthcare Partners</p>
                        </div>
                    </body>
                    </html>
                `);
                
                printWindow.document.close();
                printWindow.focus();
                setTimeout(() => {
                    printWindow.print();
                    printWindow.close();
                }, 1000);
            });
        }
    });
    
    console.log('✓ Fixed all print buttons with logo support');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixAllPrintButtons);
} else {
    fixAllPrintButtons();
}
