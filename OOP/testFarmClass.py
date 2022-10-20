import WindSim
from py_wake.wind_turbines.power_ct_functions import PowerCtTabular
from py_wake.examples.data.hornsrev1 import Hornsrev1Site, V80

u = [0,3,12,25,30]
ct = [0,8/9,8/9,.3, 0]
power = [0,0,2000,2000,0]


site = Hornsrev1Site()
x, y = site.initial_position.T

turbine = WindSim.turbine(name = "test", diameter = 123, hubheight= 321, powerFunc=PowerCtTabular(u, power, 'KW', ct))

t = V80()

farmRes = WindSim.WindFarm( model = 1,site = site,x_coor=x,y_coor=y,height = None, turbineType=t, wd = None, ws = None)

print(farmRes.sim_res_array())