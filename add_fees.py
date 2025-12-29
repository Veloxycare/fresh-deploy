#!/usr/bin/env python3
import re

with open('index.html', 'r') as f:
    content = f.read()

fees = [
    ('\$197<span style="font-size: 1.2rem;">/month</span></div>\s*<div class="plan-period">Monthly Subscription</div>', '2', '3.94'),
    ('\$397<span style="font-size: 1.2rem;">/month</span></div>\s*<div class="plan-period">Monthly Subscription</div>', '1.5', '5.96'),
    ('\$897<span style="font-size: 1.2rem;">/month</span></div>\s*<div class="plan-period">Monthly Subscription</div>', '1', '8.97')
]

fee_html = '''                        <div class="plan-collection-fee">
                            <i class="fas fa-exchange-alt"></i>
                            <span>Collection Fee: <span class="fee-amount">{percent}%</span> (<span class="fee-total">${amount}</span>/month)</span>
                        </div>'''

for pattern, percent, amount in fees:
    replacement = f'\\g<0>\\n{fee_html.format(percent=percent, amount=amount)}'
    content = re.sub(f'({pattern})', replacement, content)

css = '''
<style>
.plan-collection-fee {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 10px 15px;
    margin: 15px 0;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.plan-collection-fee i {
    color: #28a745;
    font-size: 1.1rem;
}

.plan-collection-fee .fee-amount {
    font-weight: 700;
    color: #28a745;
}

.plan-collection-fee .fee-total {
    font-weight: 700;
    color: var(--dark);
}

.subscription-plan.featured .plan-collection-fee,
.subscription-plan.featured-enterprise .plan-collection-fee {
    background: rgba(40, 167, 69, 0.1);
    border-color: rgba(40, 167, 69, 0.3);
}
</style>'''

if '.plan-collection-fee' not in content and '<style>' in content:
    content = content.replace('</style>', f'.plan-collection-fee CSS here\\n</style>')
    content = content.replace('.plan-collection-fee CSS here', css.strip())
elif '.plan-collection-fee' not in content:
    content = content.replace('</head>', f'{css}\\n</head>')

with open('index.html', 'w') as f:
    f.write(content)

print("✅ Collection fees added successfully")
