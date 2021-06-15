import get_attributes, request_handler
import xml.etree.ElementTree as et
registry_numbers = []
planes = []
tree = et.parse('./data/data.xml')
root = tree.getroot()
product_table = root[2][0]
planes = get_attributes.get_planes(product_table, registry_numbers, planes)
request = input('Do you want to "add" or "change" or "delete": ')
print(request_handler.handle_request(request, registry_numbers, planes, tree, product_table))
