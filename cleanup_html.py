with open('index.html', 'r') as f:
    content = f.read()
import re
styles = re.findall(r'<style>[\s\S]*?\.plan-collection-fee[\s\S]*?</style>', content)
if len(styles) > 1:
    first_style = styles[0]
    for dup_style in styles[1:]:
        content = content.replace(dup_style, '')
content = content.replace('</style>\n</style>', '</style>')
content = content.replace('</style></style>', '</style>')
if '</html>' in content:
    parts = content.split('</html>')
    content = parts[0] + '</html>'
with open('index.html', 'w') as f:
    f.write(content)
print("HTML cleaned up")
