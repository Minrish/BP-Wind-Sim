from curses.ascii import ETB
import py_wake
from py_wake.wind_turbines import WindTurbine
from py_wake.wind_turbines.power_ct_functions import PowerCtTabular
class turbine:
    def __init__(self, name, diameter, hubheight, powerFunc):
        self.name = name
        self.diameter = diameter
        self.hunheight = hubheight
        self.power = powerFunc
        self.turbine = WindTurbine(name, diameter, hubheight, powerFunc)

class WindFarm:
    def __init__(self) -> None:
        pass
    pass


