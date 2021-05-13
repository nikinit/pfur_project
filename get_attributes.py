def get_planes(product_table, registry_numbers, planes, file = 'data.xml'):
    for product in product_table:
        plane = {}
        for assign in product:
            plane[assign.get('applicPropertyIdent')] = assign.get('applicPropertyValues')
            if assign.get('applicPropertyIdent') == 'registryNbr':
                registry_numbers.append(assign.get('applicPropertyValues'))
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
