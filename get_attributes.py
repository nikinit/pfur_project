import xml.etree.ElementTree as et

def get_planes(file = 'data.xml'):
    planes = []
    root = et.parse(file).getroot()
    product_table = root[2][0]
    for product in product_table:
        plane = {}
        for assign in product:
            plane[assign.get('applicPropertyIdent')] = assign.get('applicPropertyValues')
        planes.append(plane)
    return planes

def get_attributes(request, planes):
    attributes = []
    for plane in planes:
        plane_attributes = {}
        for attribute in request:
            try:
                plane_attributes[attribute] = plane[attribute]
            except KeyError:
                continue
        attributes.append(plane_attributes)
    return attributes

planes = get_planes()
request = input('Enter attributes you want to get, separated by space button:').split(' ')
print(get_attributes(request, planes))