function sysCall_init()
    modelBase=sim.getObjectHandle(sim.handle_self)
    robotBase=modelBase
    while true do
        robotBase=sim.getObjectParent(robotBase)
        if robotBase==-1 then
            robotName='MTB_Robot'
            break
        end
        robotName=sim.getObjectName(robotBase)
        suffix,suffixlessName=sim.getNameSuffix(robotName)
        if suffixlessName=='MTB_Robot' then
            break
        end
    end
    
    s=sim.getObjectHandle('suctionPadSensor')
    l=sim.getObjectHandle('suctionPadLoopClosureDummy1')
    l2=sim.getObjectHandle('suctionPadLoopClosureDummy2')
    b=sim.getObjectHandle('suctionPadBody')
    sim.setLinkDummy(l,-1)
    sim.setObjectParent(l,b,true)
    m=sim.getObjectMatrix(l2,-1)
    sim.setObjectMatrix(l,-1,m)
    suctionPadLink=sim.getObjectHandle('suctionPadLink')
    local gripperBase=sim.getObjectHandle(sim.handle_self)
    infiniteStrength=true
    maxPullForce=3
    maxShearForce=1
    maxPeelTorque=0.1

end

function sysCall_cleanup() 
    sim.setLinkDummy(l,-1)
    sim.setObjectParent(l,b,true)
    m=sim.getObjectMatrix(l2,-1)
    sim.setObjectMatrix(l,-1,m)
end 

function sysCall_sensing() 
    parent=sim.getObjectParent(l)
    local sig=sim.getIntegerSignal(robotName .."activity")
    if (not sig) or (sig==0) then
        if (parent~=b) then
            sim.setLinkDummy(l,-1)
            sim.setObjectParent(l,b,true)
            m=sim.getObjectMatrix(l2,-1)
            sim.setObjectMatrix(l,-1,m)
        end
    else
        if (parent==b) then
            index=0
            while true do
                shape=sim.getObjects(index,sim.object_shape_type)
                if (shape==-1) then
                    break
                end
                local res,val=sim.getObjectInt32Parameter(shape,sim.shapeintparam_respondable)
                if (shape~=b) and (val~=0) and (sim.checkProximitySensor(s,shape)==1) then
                    -- Ok, we found a respondable shape that was detected
                    -- We connect to that shape:
                    -- Make sure the two dummies are initially coincident:
                    sim.setObjectParent(l,b,true)
                    m=sim.getObjectMatrix(l2,-1)
                    sim.setObjectMatrix(l,-1,m)
                    -- Do the connection:
                    sim.setObjectParent(l,shape,true)
                    sim.setLinkDummy(l,l2)
                    break
                end
                index=index+1
            end
        else
            -- Here we have an object attached
            if (infiniteStrength==false) then
                -- We might have to conditionally beak it apart!
                result,force,torque=sim.readForceSensor(suctionPadLink) -- Here we read the median value out of 5 values (check the force sensor prop. dialog)
                if (result>0) then
                    breakIt=false
                    if (force[3]>maxPullForce) then breakIt=true end
                    sf=math.sqrt(force[1]*force[1]+force[2]*force[2])
                    if (sf>maxShearForce) then breakIt=true end
                    if (torque[1]>maxPeelTorque) then breakIt=true end
                    if (torque[2]>maxPeelTorque) then breakIt=true end
                    if (breakIt) then
                        -- We break the link:
                        sim.setLinkDummy(l,-1)
                        sim.setObjectParent(l,b,true)
                        m=sim.getObjectMatrix(l2,-1)
                        sim.setObjectMatrix(l,-1,m)
                    end
                end
            end
        end
    end
end 
