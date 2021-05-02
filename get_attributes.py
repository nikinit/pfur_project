import xml.etree.ElementTree as et
def get_products(request, file = 'data.xml'):
    attributes = []
    request = request.split(' ')
    root = et.parse(file).getroot()
    product_table = root[2][0]
    for product in product_table:
        plane = {}
        for assign in product:
            for i in range(len(request)):
                if (assign.get('applicPropertyIdent') == request[i]):
                    plane[assign.get('applicPropertyIdent')] = assign.get('applicPropertyValues')
        attributes.append(plane)
    return attributes
request = input('Enter attributes you want to get, separated by space button:')
print(get_products((request)))