import xml.etree.ElementTree as et
import Plane
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
# request = input('Enter attributes you want to get, separated by space button:').split(' ')
# print(get_attributes(request, planes)) ... here will be 3 planes from XML
plane = Plane.Plane('SJ-100', 'A', '245X', '463', '0004', 'Azimuth', '1 Battery', '2 Exhaust Fans')
print(plane.make_summary())
planes.append(plane.make_summary())
print(planes) # and here we have a new one, which we created via class Plane