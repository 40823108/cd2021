import sim as vrep
import sys
import time
import math

vrep.simxFinish(-1)
clientID = vrep.simxStart('127.0.0.1', 19997, True, True, 5000, 5)

if clientID!= -1:
    print("Connected to remote server")
else:
    print('Connection not successful')
    
    vrep.simxStartSimulation(clientID, vrep.simx_opmode_oneshot)

def move(j1,j2,j3):
    ret,joint1=vrep.simxGetObjectHandle(clientID,"joint1",vrep.simx_opmode_blocking)
    ret,joint2=vrep.simxGetObjectHandle(clientID,"joint2",vrep.simx_opmode_blocking)
    ret,joint3=vrep.simxGetObjectHandle(clientID,"joint3",vrep.simx_opmode_blocking)
    jointHandle=[joint1,joint2,joint3]
    j=[j1*math.pi/180,j2*math.pi/180,j3*math.pi/180]
    for i in range(3):
        vrep.simxSetJointPosition(clientID,jointHandle[i],j[i],vrep.simx_opmode_oneshot)
        time.sleep(0.5)
def suck():
    vrep.simxSetIntegerSignal(clientID,"activity",1,vrep.simx_opmode_oneshot_wait)
def quit():
    vrep.simxSetIntegerSignal(clientID,"activity",0,vrep.simx_opmode_oneshot_wait)



while True:
    move(0,0,0)
    quit()
    move(0,0,1.75)
    suck()
    move(0,0,0)
    move(43.79,-66.2053,0)
    quit()
    move(0,0,0)
    move(43.79,-66.2053,0)
    move(43.79,-66.2053,1.75)
    suck()
    move(43.79,-66.2053,0)
    move(0,0,0)
    move(-158.2529,-87.7894,0)
    quit()
    move(0,0,0)
    move(-158.2529,-87.7894,0)
    move(-158.2529,-87.7894,1.75)
    suck()
    move(-158.2529,-87.7894,0)

