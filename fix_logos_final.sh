#!/bin/bash
# Fix header logo
sed -i '' '3467,3471c\
                        <img src="my-logo.png" alt="IntakeAccess.ai Logo" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">\
                    </div>' index.html

# Fix login logo  
sed -i '' '3356,3360c\
                            <img src="my-logo.png" alt="IntakeAccess.ai Logo" style="width: 100%; height: 100%; border-radius: 12px; object-fit: cover;">\
                        </div>' index.html

# Remove blue background
sed -i '' '600s/background: var(--primary);/background: transparent;/' index.html
