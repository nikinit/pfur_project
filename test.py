reg_numbers = ['FA123A', 'FA123B', 'FA123D', 'FA123C', 'FA123E', 'FA123F']
import xml.etree.ElementTree as et
tree = et.parse('data.xml')
root = tree.getroot()
product_table = root[2][0]
reg_number = 'FA123A'
req = 'operator'
change = 'Utair'
print(product_table[0][1].set('applicPropertyValues', '100EA'))
for product in product_table:
    assigns = len(product)
    for i in range(assigns):
        # print(product[0].attrib['applicPropertyIdent'])
        if product[i].attrib['applicPropertyIdent'] == req:
            product[i].set('applicPropertyValues', change)
tree.write('data_test.xml')