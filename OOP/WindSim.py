from py_wake.wind_turbines import WindTurbine
from py_wake.wind_turbines.power_ct_functions import PowerCtTabular
from py_wake import BastankhahGaussian
from py_wake.site import XRSite


class turbine:
    def __init__(self, name, diameter, hubheight, powerFunc):
        self.name = name
        self.diameter = diameter
        self.hunheight = hubheight
        self.power = powerFunc
        self.turbinetype = WindTurbine(name, diameter, hubheight, powerFunc)
    

class WindFarm: 
    sim_res = None
    def __init__(self, model, site, x_coor,y_coor, height, turbineType, wd, ws ):
        self.model = model
        self.site = site
        self.x_coor = x_coor
        self.y_coor = y_coor
        self.height = height
        self.turbineType = turbineType
        self.wd = wd
        self.ws = ws
        wf_model = BastankhahGaussian(self.site, self.turbineType)
        self.sim_res = wf_model(x = self.x_coor, y = self.y_coor, h = self.height, type = self.turbineType, wd = self.wd, ws = self.ws)
    
    def sim_res_array(self):
        return self.sim_res

    def sim_res_sel(self, turbine, direction):
        return self.sim_res.sel(wt = turbine, wd = direction)