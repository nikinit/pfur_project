class Plane():
    def __init__(self, model,
                       minorModel,
                       subModel,
                       registryNbr,
                       operator,
                       electricalDifferences,
                       airCondDifferences,
                       modification = 'Rejected'
                       ):
        self.model = model
        self.minorModel = minorModel
        self.subModel = subModel
        self.registryNbr = registryNbr
        self.lineNbr = '0'
        self.operator = operator
        self.electricalDifferences = electricalDifferences
        self.airCondDifferences = airCondDifferences
        self.modification = modification
        self.summary = self.make_summary() # probably don't need it
    def give_line_number(self, planes_number):
        self.lineNbr = '0' * (4 - len(str(planes_number))) + str(planes_number + 1)
        return self.lineNbr
    def make_summary(self, object_summary = {}):
        object_summary['model'] = self.model
        object_summary['minorModel'] = self.minorModel
        object_summary['subModel'] = self.subModel
        object_summary['registryNbr'] = self.registryNbr
        object_summary['lineNbr'] = self.lineNbr
        object_summary['operator'] = self.operator
        object_summary['electricalDifferences'] = self.electricalDifferences
        object_summary['airCondDifferences'] = self.airCondDifferences
        object_summary['modification'] = self.modification
        return object_summary