class Plane():
    def __init__(self, model,
                       minorModel,
                       subModel,
                       registryNbr,
                       lineNbr,
                       operator,
                       electricalDifferences,
                       airCondDifferences,
                       modification = 'Rejected'
                       ):
        self.model = model
        self.minorModel = minorModel
        self.subModel = subModel
        self.registryNbr = registryNbr
        self.lineNbr = lineNbr
        self.operator = operator
        self.electricalDifferences = electricalDifferences
        self.airCondDifferences = airCondDifferences
        self.modification = modification
        self.summary = self.make_summary()
    def make_summary(self):
        return {
            'model': self.model,
            'minorModel': self.minorModel,
            'subModel': self.subModel,
            'registryNbr': self.registryNbr,
            'lineNbr': self.lineNbr,
            'operator': self.operator,
            'electricalDifferences': self.electricalDifferences,
            'airCondDifferences': self.airCondDifferences,
            'modification': self.modification
        }