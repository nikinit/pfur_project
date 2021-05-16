import Plane
import xml.etree.ElementTree as et

def handle_request(request, registry_numbers, planes, tree, product_table):
    print(registry_numbers, planes)
    if request == 'add':
        return add_plane(registry_numbers, planes, tree, product_table)
    elif request == 'change':
        return change_plane(registry_numbers, planes, tree, product_table)
    elif request == 'delete':
        return delete_plane(registry_numbers, planes, tree, product_table)
    else:
        request = input('Do you want to "add" or "change" or delete": ')
        return handle_request(request, registry_numbers, planes, tree, product_table)


def add_plane(registry_numbers, planes, tree, product_table):
    # creating a new plane
    plane_model = input('Enter model: ')
    plane_minor_model = input('Enter minorModel: ')
    plane_subModel = input('Enter subModel: ')
    plane_registryNbr = input('Enter registry number: ')
    plane_operator = input('Enter operator: ')
    plane_electrical = input('Enter electrical differences: ')
    plane_air_cond = input('Enter air condition differences: ')
    plane_modification = input('Enter modification SB-001: ')
    plane = Plane.Plane(plane_model, plane_minor_model, plane_subModel,
    plane_registryNbr, plane_operator, plane_electrical, plane_air_cond, plane_modification)
    # finished creating a plane. Now variables
    new_reg_number = plane.registryNbr
    number_of_assigns = len(plane.summary)
    assign_properties = list(plane.summary.keys())
    try:
        is_new = registry_numbers.index(new_reg_number)
        return 'This plane already exists'
    except:
        # below we update a list
        registry_numbers.append(new_reg_number)
        plane.give_line_number(len(planes))
        plane_object = plane.make_summary()
        planes.append(plane_object)
        # above we update a list
        # now we update xml
        product = et.Element('product')
        for i in range(number_of_assigns):
            assign = et.Element('assign')
            assign.set('applicPropertyIdent', assign_properties[i])
            if assign_properties[i] != 'modification':
                assign.set('applicPropertyType', 'prodattr')
            else:
                assign.set('applicPropertyType', 'condition')
            assign.set('applicPropertyValues', plane_object[assign_properties[i]])
            product.append(assign)
        product_table.append(product)
        tree.write('data.xml')
        #finished updating xml
        return planes

def change_plane(registry_numbers, planes, tree, product_table):
    registry_number = input('Enter the registry number of a plane you want to change: ')
    print(registry_numbers)
    try:
        is_exist = registry_numbers.index(registry_number)
    except:
        return 'There is no such plane.'

    assign_to_change = input('Enter assign you want to change: ')
    if assign_to_change == 'registryNbr' or assign_to_change == 'lineNbr':
        return 'You are prohibited to change that!'
    #above is okay
    
    for plane in planes:
        if plane['registryNbr'] == registry_number: # good
            plane_queue = registry_numbers.index(plane['registryNbr'])
            change = input('Enter a new value for you attibute: ')
            i = 0
            for assign in plane:
                if assign == assign_to_change:
                    print('Changed ', assign_to_change, ' from ', plane[assign_to_change], ' to ', change)
                    plane[assign_to_change] = change
                    # above we change list, below XML
                    print(product_table[plane_queue][i].attrib)
                    product_table[plane_queue][i].set('applicPropertyValues', change)
                    tree.write('data.xml')
                    return planes
                i += 1
            print('You entered a new modification assign:', assign_to_change, ". It's value is", change)
            plane[assign_to_change] = change
            #now create new assign with ident = change, type = condition(const), and values = change
            assign = et.Element('assign')
            assign.set('applicPropertyIdent', assign_to_change)
            assign.set('applicPropertyType', 'condition')
            assign.set('applicPropertyValues', change)
            product_table[plane_queue].append(assign)

            tree.write('data.xml')
            return planes


def delete_plane(registry_numbers, planes, tree, product_table):
    registry_number = input('Enter the registry number of a plane you want to delete: ')
    try:
        is_exist = registry_numbers.index(registry_number)
    except:
        return 'There is no such plane.'

    plane_queue = 0
    # deleting from list and XML
    for plane in planes:
        if plane['registryNbr'] == registry_number:
            del planes[plane_queue]
            del registry_numbers[registry_numbers.index(registry_number)]
            product_table.remove(product_table[plane_queue])
            break
        plane_queue += 1
    # now changing the lineNumbers
    plane_queue = 1
    for plane in planes:
        plane['lineNbr'] = '0'*(4-len(str(plane_queue))) + str(plane_queue)
        i = 0
        for assign in plane:
            if assign == 'lineNbr':
                product_table[plane_queue - 1][i].set('applicPropertyValues', plane['lineNbr'])
                print(product_table[plane_queue - 1][i])
            i += 1
        plane_queue += 1
    

    tree.write('data.xml')
    return planes, registry_numbers
