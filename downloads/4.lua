function move(j1,j2,j3,j4,enable)
    modelBase=sim.getObjectAssociatedWithScript(sim.handle_self)
    modelName=sim.getObjectName(modelBase)
    jointHandle={}
    j={j1*math.pi/180,j2*math.pi/180,j3*math.pi/180,j4*math.pi/180}
    for i=1,4,1 do
        jointHandle[i]=sim.getObjectHandle('MTB_axis'..i)
        sim.wait(1)
    end
    for i=1,4,1 do
        sim.setJointPosition(jointHandle[i],j[i])
        sim.wait(1)
    end
    
    if enable then
        sim.setIntegerSignal(modelName .."activity",1)
    else
        sim.setIntegerSignal(modelName .."activity",0)
    end
end

function sysCall_threadmain()
    move(0,0,0,0,false)
    move(0,0,1.9,0,true)
    move(0,0,0,0,true)
    move(43.79,-66.2053,0,0,false)
    move(0,0,0,0,0)
    move(43.79,-66.2053,0,0,false)
    move(43.79,-66.2053,1.9,0,true)
    move(43.79,-66.2053,0,0,true)
    move(-158.2529,-87.7894,0,0,false)
    move(0,0,0,0,false)
    move(-158.2529,-87.7894,0,0,false)
    move(-158.2529,-87.7894,1.9,0,true)
    move(-158.2529,-87.7894,0,0,true)
    move(0,0,0,0,false)
end