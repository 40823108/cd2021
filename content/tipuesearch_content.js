var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'NFU-MDE-40823108-KAO,YU-CHE \n 20201/2/25--> Page creation \n ⚡ \n \xa0 This is my Github:\xa0 NFU-MDE-40823108-KAO,YU-CHE \n \xa0 \xa0 Collaborative product design internship for cd2021 \n \xa0 \xa0 \xa0\xa0 Warehouse: \xa0\xa0 cd 2021 Warehouse \n \xa0 \xa0 \xa0 Website: \xa0  cd 2021 Website \n \xa0 \xa0 \xa0\xa0 Group warehouse :\xa0 -- \n \xa0 \xa0 \xa0 Group website: -- \n \n ⚡ \n \xa0 This is a personal website:\xa0 \xa0 Godfather-Adolphe50-2021 \n \xa0 \xa0\xa0 Warehouse:\xa0 Godfather-Adolphe50-2021 Warehouse \n \xa0 \xa0\xa0 Website: \xa0 Godfather-Adolphe50-2021 Website \n \xa0 \xa0\xa0 Youtube: \xa0 Godfather Adolphe 50 \n ⚡ \n \xa0 An introduction to computer programs for the first course:\xa0 \xa0 cp2019 \n \xa0 \xa0 Warehouse:\xa0 cp 2019 Warehouse \xa0 \n \xa0 \xa0 Website:\xa0 c p 2019 Website \n \xa0 \xa0 \xa0 Group warehouse :\xa0 cp 2019ag5 Warehouse \n \xa0 \xa0\xa0 Group website:\xa0 cp 2019ag5 website \n ⚡ \n \xa0 Internet content management for the following courses:\xa0 \xa0 wcm2020 \n \xa0 \xa0 Warehouse:\xa0 wcm 2020 Warehouse \n \xa0 \xa0\xa0 Website:\xa0 wcm 2020 Website \n ⚡ \n \xa0 The second course computer-aided design practice:\xa0 \xa0 cad2020 \n \xa0 \xa0 Warehouse:\xa0 cad 2020 Warehouse \n \xa0 \xa0\xa0 Website:\xa0 cad 2020 Website \n \xa0 \xa0\xa0 Group warehouse : \xa0 cad 2020ag4 Warehouse \n \xa0 \xa0\xa0 Group website: \xa0 cad 2020ag4 website \n ⚡ \n \xa0 The second course collaborative product design practice:\xa0 \xa0 cd2021 \n \xa0 \xa0\xa0 Warehouse: \xa0\xa0 cd 2021 Warehouse \n \xa0 \xa0 Website: \xa0 \xa0 cd 2021 Website \n \xa0 \xa0\xa0 Group warehouse :\xa0 -- \n \xa0 \xa0 Group website: -- \n \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'KMOLab basis', 'text': 'About: \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n \n', 'tags': '', 'url': 'KMOLab basis.html'}, {'title': 'Cmsimde create', 'text': 'Step1: \n \xa0  Go to \xa0 2021 可攜程式系統 First download the\xa0 下載 kmol2021_spring_v2.7z \xa0compressed file, and extract the file to the\xa0 \xa0 flash drive. \n Step2: \n \xa0\xa0 Set gitconfig and save this file in the home directory. First go to home and select the .config file. \n \n \n Step3: \n \xa0\xa0Drag the  .config file  to\xa0 (Untitled)-SciTE, modify the name and mailbox to your student ID. \n \n Step4: \n \xa0 Go to\xa0 https://github.com/mdecourse/cmstemplate , And click on the red box below. \n \n Step5: \n \xa0\xa0Establish cd2021 warehouse. \n \n Step6: \n \xa0\xa0After completing the cd 2021 storage, click the settings below. \n \n Step7: \n \xa0\xa0Slide to the GitHub Pages below to create GitHub Pages. \n \n Step8: \n \xa0\xa0Open cmd, and enter cd tmp Re-enter: git clone --recurse-submodules  https://github.com/40823108/cd2021.git \n \n Step9: \n \xa0\xa0Test whether the website is established. \n Y:\\tmp\\cd2021\\cmsimde>python wsgi.py \n \n Step10: \n \xa0\xa0Open the browser and enter https://localhost:9443, click Advanced. \n \n Step11: \n \xa0\xa0Click to continue. \n \n Step12: \n \xa0\xa0Click login. \n \n Step13: \n \xa0\xa0enter password. \n \n Step14: \n \xa0\xa0Can start editing the website. \n \n Step15: \n \xa0 Upload the file to github. \n Y:\\tmp\\cd2021>git add . \n \n Step16: \n \xa0\xa0 Y:\\tmp\\cd2021>git commit -m "add" \n \n Step17: \n \xa0\xa0\xa0\xa0 Y:\\tmp\\cd2021>git push \n \n Step18: \n \xa0\xa0Successfully established a website. \n \n \xa0 \n', 'tags': '', 'url': 'Cmsimde create.html'}, {'title': 'Python program', 'text': 'Python program: \n import csv\n   \n# read student list\nfilename = \'D:/1a/1alist.txt\'\nwith open(filename, encoding="utf-8") as f:\n    content = f.readlines()\n    student = [x.strip() for x in content]\n#print(content)\n#print(student)\n   \n# Timestamp, email, ????, url, score, desp, memo\n# 0, 1, 2, 3, 4, 5, 6\n#total = 0\n  \nall = {}\nwith open(\'D:/1a/1a.csv\', encoding="utf-8") as csv_file:\n    csv_reader = csv.reader(csv_file, delimiter=\',\')\n       \n    line_count = 0\n    for row in csv_reader:\n        if line_count == 0:\n            #print(f\'Column names are {", ".join(row)}\')\n            line_count += 1\n        else:\n            student_num = row[1].split("@")[0]\n            #print(student_num)\n            student_score = row[4]\n            #print(student_score)\n            try:\n                all.update({student_num: student_score})\n            except:\n                all.update({student_num: "error"})\n            #print(f\'\\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.\')\n            #print(f\'\\t{row[4]}\')\n            #total += int(row[4])\n            line_count += 1\n#print(all)\n#print(student)\n  \nfor i in student:\n       \n    #if i in all:\n        #pass\n    #else:\n        #print(str(i))\n       \n    try:\n        print(i + "\\t" + all[i])\n    except:\n        print(i + "\\t60")\n  \n   \n    #print(f\'Processed {line_count} lines.\')\n    #print("??=" + str(total/line_count)) \n Flask program: \n from flask import Flask\n   \napp = Flask(__name__)\n   \n@app.route(\'/\') \ndef hello_world():\n    return \'Hello, From Flask!\'\n   \nif __name__== \'__main__\': \n    app.run()\n \n', 'tags': '', 'url': 'Python program.html'}, {'title': 'SSH key produce', 'text': 'Open: \n \xa0 Y:/PuTTY-->puttygen.exe \n \n \xa0 Use puttygen to import the private key (id_rsa) and convert it into a format (.ppk) file that putty can understand. \n \xa0 After saving the (.ppk) file. \n \n \xa0 Use scite to open the public key (id_rsa.pub), go to the toolbar and find Options-->Wrap to see the complete file content. \n \n \xa0 The full content is as follows: \n \n \xa0 Go to storage-->seeting-->SSH and GPG keys, click New SSH key, paste the copied content and save it for use. \n \n', 'tags': '', 'url': 'SSH key produce.html'}, {'title': 'SSH putty settings', 'text': '\xa0 SSH Putty settings: \n \n \xa0 Please select the .ppk file for the line drawing. \n \n \xa0 Go back to the Session directory and press save to save. \n \n \xa0 Enter the folder you want to Push, then enter the \\tmp\\cd2021\\.git directory, modify the config file, and modify the string  url=https:\\\\github.com:40823108/cd2021.git \n \xa0 Modified to:  url=git@github.com:40823108/cd2021.git \n \n \xa0 The following is a record of successful use of SSH without password push. \n \n \n', 'tags': '', 'url': 'SSH putty settings.html'}, {'title': 'Leo Edit Blog', 'text': 'Step1: \n \xa0\xa0Open leo\xa0 ➜ Y:/tmp>leo \n \n Step2: \n \xa0\xa0After opening leo, search Disqus in the browser and add a forum. \n \n Step3: \n \xa0\xa0Click File\xa0 ➜ Open-Outline \n \n Step4: \n \xa0\xa0Y:\\tmp\\cd2021\\config>pelican.leo \n \n \n \n Step5: \n \xa0 Modify the data in the share. \n \n Step6: \n \xa0\xa0Modify the data in the remote. \n \n Step7: \n \xa0\xa0Edit template  ➜\xa0 @edit base.html \n \n Step8: \n \xa0\xa0Modify markdown. \n \n \n', 'tags': '', 'url': 'Leo Edit Blog.html'}, {'title': 'Leo Edit Reveal', 'text': 'Step1: \n \xa0\xa0Open leo\xa0 ➜ Y:/tmp>leo \n \n Step2: \n \xa0\xa0Click File\xa0 ➜ Open-Outline \n \n Step3: \n \xa0\xa0Y:\\tmp\\cd2021\\config>reveal.leo \n \n \n \n Step4: \n \xa0\xa0 You can start editing Reveal. \n \n', 'tags': '', 'url': 'Leo Edit Reveal.html'}, {'title': 'Synergy', 'text': '協同設計與版次管理能夠有效提升團隊工作效率，降低內容互相覆蓋，最終造成無法辨識是誰更改內容的情況。 \n 因協作者的工作與內容更動皆在獨立分支清清楚楚，責任歸屬的也就一目了然。 \n 分支出來的設計，在本次目標不需要，或許未來的項目可以用上。可以避免掉「當初做過，但改掉了，這次又要重做」這種事情發生。 \n \n 組長在倉儲Setting->Manage access->Invite a collaborato邀請協作者 \n 組員在自己倉儲中Setting->Manage access->Invite a collaborato組長(組員不用互邀) \n git clone --recurse-submodules https://github.com/a40823112/stage2-ag1.git stage2-ag1 (clone組長倉儲)\ncd stage2-ag1\ngit pull\ngit remote add 40823108 https://github.com/40823108/stage2-ag1.git (add自己倉儲)\ngit commit -m "test"\ngit push 40823108 (先推送至自己倉儲)\n//如果沒問題再推送至組倉儲\ngit push (推送至分組倉儲: https://github.com/a40823112/stage2-ag1.git)\n\n//***更改協同分組網站之前一定都要先git pull，如果直接更改會造成資料錯亂*** \n Step1: \n 先建立一個空倉儲 \n \n Step2: \n git clone --recurse-submodules\xa0 https://github.com/a40823112/stage2-ag1.git \n \n Step3: \n 點選倉儲中的Settings \n \n Step4: \n 點選左方列表中的Manage access \n \n Step5: \n 點選 Invite a collaboratot後邀請組長。 \n \n Step6: \n 創建Git Hub Page \n \n Step7: \n cd\xa0 stage2-ag1 \n git pull \n git remote add 40823108\xa0 https://github.com/40823108/stage2-ag1.git \xa0(add自己倉儲) \n git commit -m "test" \n git push 40823108 (先推送至自己倉儲) \n 如果沒問題再推送至分組倉儲 \n git push (推送至分組倉儲: https://github.com/a40823112/stage2-ag1.git) \n ***更改協同分組網站之前一定都要先git pull，如果直接更改會造成資料錯亂* \n \n', 'tags': '', 'url': 'Synergy.html'}, {'title': 'Coppeliasim basic', 'text': 'Coppeliasim裡有很多機械手臂、輪子之類的零件，可以提供我們搭建自己需要仿真的物體。 可以用lua函數或界面操作joint關節（即電機）運動，我們可以做正逆運動，軌跡規劃。 同時，它方便我們在其他地方調用api，支持跨平台運行，例如matlab、visual等，所以很適合用來驗證算法邏輯有沒有問題。 \n \n \n', 'tags': '', 'url': 'Coppeliasim basic.html'}, {'title': 'Import objects', 'text': 'Step1: \n \xa0 利用3D繪圖軟體(Autodesk Inventor Professional 2021),繪製所需物件。 \n \n Step2: \n \xa0\xa0並將其匯出成STL檔案, 可先將座標位置定好再做匯出(Z軸向上為佳) 以Inventor為例匯出STL檔案時須以另存成副本的方式,才能成功匯出STL檔案 步驟為:開啟Inventor-->開啟零件檔或組合檔-->檔案-->另存-->將副本儲存成... \n \n 將所需之STL檔案儲存至專案資料夾中。 \n \n Step3: \n \xa0\xa0開啟coppeliasim匯入物件,步驟為: File-->import-->Mesh... \n \n 匯入物件設定視窗。 \n \n 下圖為匯入選項之翻譯。 \n \n Step4: \n \xa0 匯入方法與設定操作。 \n \n \n', 'tags': '', 'url': 'Import objects.html'}, {'title': 'Divide object', 'text': '1.因匯入的STL檔案為單一物件,如果為組合圖所有零件匯以同一物件做匯入,必須將其作分解,使能得到所需零件數量。 \n \n 2.分解物件步驟為:\xa0 Edit-->Grouping/Merging-->Divide selected shapes : \n \n 下圖為分解物件功能區翻譯: \n \n 分解後可以得到下圖黃色區域的部分,將整個STL檔案切割出個別零件: \n \n 3.因匯入後軸向不同,為了方便之後放置joint需先將零件分解出來後再做軸向轉換 下圖為軸向轉換功能展示: \n \n 下圖為轉換後與coppeliasim軸向相同示意圖: \n \n 4.以下為操作展示: \n \n \n', 'tags': '', 'url': 'Divide object.html'}, {'title': 'Appearance setting', 'text': '1.可使用內部彈出視窗(Scene Object Properties)修改每個物件的顏色,需先選中需染色之物件在點選左方工具列中放大鏡的圖示即可使用內部彈出視窗 \n 2.修改顏色步驟為:\xa0 選中之物件--> Scene Object Properties-->shape-->Adjust color-->Ambient/diffuse component-->RGB\xa0 or\xa0 HSL-->Apply to selection \n 下圖為修改顏色視窗: \n \n 銳化屬性對話框: \n \n 一般屬性對話框: \n \n', 'tags': '', 'url': 'Appearance setting.html'}, {'title': 'Joint settings', 'text': '1.為了讓物件可以旋轉,所以需要加入joint. \n 2.點選左上的 Add-->joint-->Revolute 這樣就能叫出一個圓柱狀的軸，並生成在座標 0.0.0. 上。 \n 3.加入joint步驟為:\xa0 空白處滑鼠右鍵--> Add-->joint-->Revolute. \n 4.可使用物件彈出視窗修改joint之長度與直徑,還有一班屬性與動態屬性。 \n 5.新增完joint後,因物件與其無關聯所以須使用上方工具欄中Object/ltem Translation/Position--> Position(移動)指令,使物件與馬達位置相同後,再使用Object/ltem Translation/Position--> Position(旋轉)指令使馬達與物件軸向相同。 \n 下圖為Joint屬性對話框: \n \n 下圖為組裝測試圖: \n \n \n', 'tags': '', 'url': 'Joint settings.html'}, {'title': 'Orchestration objects', 'text': '1.在匯入的STL檔案中,將物件做分割後每個物件之間是毫無關聯的,所以如果為轉軸或關節處匯無法轉動 \n 2.在左方模型瀏覽器中,將所需之物件拖拉編排,相關連之物件需為同一數列,依裝配之順序將物件做排列,無關聯之物件無需做排列,只需依需求打開動態屬性 \n 3.排列方式用下方圖片做參考: \n \n \n', 'tags': '', 'url': 'Orchestration objects.html'}, {'title': 'Proximity sensor', 'text': 'Proximity sensor 為coppeliasim中的內建感測器(接近傳感器)。 \n 1.添加 Proximity sensor步驟為:Menu bar --> Add --> Proximity sensor --> Cone type \n 2.因匯入方向不同所以要使用移動指令與旋轉指令將接近傳感器調整至所需位置。 \n 3.修改 Proximity sensor(接近傳感器)的參數。 \n 4.最後再將 Proximity sensor(接近傳感器)放置到所需之物件下編排樹狀圖即可。 \n 下圖為添加畫面: \n \n 下圖為修改參數屬性對話框: \n \n 下圖為排列樹狀圖示意圖: \n \n', 'tags': '', 'url': 'Proximity sensor.html'}, {'title': 'Midterm', 'text': '以下頁籤為開學第一週(W1)~第九週(W9)之內容 \n', 'tags': '', 'url': 'Midterm.html'}, {'title': 'W1', 'text': 'The first stage of group collaborative internship: \n \xa0\xa0The weekly group report must include html, pdf and Youtube videos: \n \xa0 \xa0\xa0Thematic topic: \n \xa0 \xa0 \xa0\xa0Student ID of the first group member:  40823145 \n \xa0 \xa0 \xa0\xa0Student ID of the second group member:  40823108 \n \xa0 \xa0 \xa0\xa0Student ID of other group members: \n Internship tasks of each group: \n \xa0 1.The group leader’s Github account has established the group website for each group. However, in the process of ordering each class in W1, it is found that even if Ethercalc is used to synchronize the Internet collaboration method to allow the optional group members of each class to fill in the student ID of the group of two or two, but still If there is a lack of manual labor or an effective plan for automatically determining the order of each team, I hereby instruct each group to carry out their own collaborative product development project (W2-W4), this topic is listed as one of the mandatory topics, and each group is explained in detail The first stage that is considered the most efficient and the method and process of setting the order. \n \xa0 2.In addition, in order to allow each group to collaborate in the internship process at stage1, the team members can publish their work and experience reports during the W2-W4 process through the blog, indicating that Leo Editor can be used to assist Pelican in CMSiMDE to publish collaborative blogs. The purpose is to enable each group to fully display the blog records left by each stage during the collaboration period. However, this method must be familiar with the operation of Leo Editor, so the creation of a collaborative blog through Pelican, in addition to using Leo Editor to assist in setting and In addition to creating a pelican blog, this topic is also listed as the second of the mandatory topics for each group in the Stage1 collaborative product design process. Please explain in detail for each group when using or not using Leo Editor, each group member is setting and creating Problems and solutions that may be encountered or produced in the process of collaborative blogging. \n \n W1 completion items: \n \xa0\xa0Use cmstemplate to create a website, install Leo Editor, set the Pelican blog in CMSiMDE, and use the button command to convert the Pelican Markdown file, and save the blog super file into the blog directory. \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '\xa0 Project production started this week, and the subject of production was discussed with the team members. \n The following picture is the project that the group wants to do, the gripper of the robotic arm. \n \n We will use  Webots  to simulate the movement of the gripper. \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'Webots', 'text': 'Continuous research \n', 'tags': '', 'url': 'Webots.html'}, {'title': 'W3', 'text': 'Due to the complexity of the gripper of the robotic arm, we revised the direction of the question. \n The new title is: Lego-EV3 \xa0\xa0Through the connection between the building blocks, a variety of different institutions are made. This time, the car is the direction. \n The picture below is our ideal design: \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'work', 'text': 'The picture below is our ideal design: \n \n 2021/3/8 \n Draw the body \n \n 2021/3/9 \n Draw the match between the motor and the body \n \n 2021/3/11 \n Draw the connecting rod and the motor-body fit \n \n 2021/3/12 \n Complete picture \n \n \n \n', 'tags': '', 'url': 'work.html'}, {'title': 'W4', 'text': 'Group briefing \n Design Tools: Autodesk Inventor Proffessional 2021 \n Design motivation:\xa0Because I took a course in the last semester-Introduction to Electromechanical Optical System, I found it very interesting to play with this institution. I want to do additional design through computer simulation. \n 2D engineering drawing: \n \n 3D exploded view, BOM: \n \n 3D model: \n \n Simulation: \n \n \n \n Collaborative design method and process:\xa0Use google meet screen sharing for discussion and design. \n \n Design result:\xa0Because the size is customized, the scale is a big problem. In the simulation, the parts are too complicated, which leads to the need for simplification. \n Self-evaluation: 65 \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': "第五週分組專案開始，分組以第一次分組兩兩合併為主。 \n 組別為:stage2-ag1 \n 組員: \n 40823108-cd2021 \n 40823109 -cd2021 \n 40823112 -cd2021 \n 40823145 -cd2021 \n 本次專案沿用stage1-ag1之專案，為了讓模型能夠按照我們的意思做動，我們嘗試編寫Lua程式並以方向鍵進行控制。 \n 下方為第一次測試程式與模擬圖 \n \n Lua程式: \n threadFunction=function()\n    -- put your actuation code here\n while sim.getSimulationState()~=sim.simulation_advancing_abouttostop do\n    -- Read the keyboard messages (make sure the focus is on the main window, scene view):\n        message,auxiliaryData=sim.getSimulatorMessage()\n        while message~=-1 do\n            if (message==sim.message_keypress) then\nif (auxiliaryData[1]==2007) then\n                -- up key\n                velocity=1000\n                torque=10000\n                Shape4 = 1000\n                Shape7 = 1000\n            end\n            if (auxiliaryData[1]==2008) then\n                -- down key\n                velocity=1000\n                torque=10000\n                Shape4 = 1000\n                Shape7 = 1000\n            end\n            if (auxiliaryData[1]==2009) then\n                -- left key\n                velocity=1000\n                torque=10000\n                Shape4 = 1000\n                Shape7 = 1000\n            end\n            if (auxiliaryData[1]==2010) then\n                -- right key\n                velocity=1000\n                torque=10000\n                Shape4 = 1000\n                Shape7 = 1000\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    if Shape4 == 1\n        then sim.setJointPosition(joint_1, 1000, orientation)\n    if Shape7 == 1\n        then sim.setJointPosition(joint_2, 1000, orientation)\n    end\n        sim.setJointTargetVelocity(joint,velocity)\n    end\n        joint_1=sim.getObjectHandle('joint_1')\n        joint_2=sim.getObjectHandle('joint_2')\n        Shape4=sim.getObjectHandle('Shape4')\n        Shape7=sim.getObjectHandle('Shape7')\n        velocity=0\n        torque=0\n        Shape4 = 0\n        Shape7 = 0\nend \n 因部分語法有誤，日後待除錯。 \n", 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': "經過一週的時間，我們將程式進行了修改，但還是有錯誤，無法讓機構以上下左右鍵的方式進行控制。 \n 下方為模擬圖: \n \n 第二次Lua程式測試: \n function sysCall_init()\n    -- do some initialization here\n    left_front_handle= sim.getObjectHandle('left_front')\n    left_back_handle= sim.getObjectHandle('left_back')\n    right_back_handle= sim.getObjectHandle('right_back')\n    right_front_handle= sim.getObjectHandle('right_front')\n    \n    joint_1_handle= sim.getObjectHandle('joint_1')\n    \n    joint_2_handle= sim.getObjectHandle('joint_2')\n    MaxVel=10\n    leftvelocity=0\n    rightvelocity=0\n    dVel=0.5;\n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\nend\n\nfunction sysCall_actuation()\n    -- put your actuation code here\n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                -- right key\n                leftvelocity=0\n                rightvelocity=0\n                sim.setJointForce(left_front_handle, 0)\n                sim.setJointForce(left_back_handle, 0)\n                sim.setJointForce(right_back_handle, 0)\n                sim.setJointForce(right_front_handle, 0)\n                \n                \n                sim.setJointForce(joint_1_handle, 1000)\n                \n                sim.setJointForce(joint_2_handle, 1000)\n                break\n            else\n            --sim.setJointForce(left_front_handle, 10000)\n            sim.setJointForce(left_back_handle, 10000)\n            sim.setJointForce(right_back_handle, 10000)\n            --sim.setJointForce(right_front_handle, 10000)\n            \n            sim.setJointForce(joint_1_handle, 0)\n            \n            sim.setJointForce(joint_2_handle, 0)\n            end\n            if (auxiliaryData[1]==2007) then\n                -- up key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2008) then\n                -- down key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==2009) then\n                -- left key\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2010) then\n                -- right key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    \n    if leftvelocity>MaxVel then\n        leftvelocity=MaxVel\n    end\n    if leftvelocity<-MaxVel then\n        leftvelocity=-MaxVel\n    end\n    \n    if rightvelocity>MaxVel then\n                rightvelocity=MaxVel\n    end\n    if rightvelocity<-MaxVel then\n                rightvelocity=-MaxVel\n    end\n    \n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\n    \nend\n\nfunction sysCall_sensing()\n    -- put your sensing code here\nend\n\nfunction sysCall_cleanup()\n    -- do some clean-up here\nend\n\n-- See the user manual or the available code snippets for additional callback functions and details \n 第二次程式失敗，日後將持續進除錯。 \n \n", 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': "經過前兩次的修改，最終我們成功完模擬，可以使用鍵盤的方向鍵對模型進行控制。 \n 下圖為模擬圖 \n \n 第三次Lua程式(成功) \n function sysCall_init() \n    left_front_handle= sim.getObjectHandle('left_m')\n    left_back_handle= sim.getObjectHandle('left_m')\n    right_back_handle= sim.getObjectHandle('right_m')\n    right_front_handle= sim.getObjectHandle('right_m')\n    MaxVel=2\n    leftvelocity=0\n    rightvelocity=0\n    dVel=0.5;\n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\nend\n\nfunction sysCall_actuation() \n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                -- right key\n                leftvelocity=0\n                rightvelocity=0\n                sim.setJointForce(left_front_handle, 0)\n                sim.setJointForce(left_back_handle, 0)\n                sim.setJointForce(right_back_handle, 0)\n                sim.setJointForce(right_front_handle, 0)\n                break\n            else\n                --sim.setJointForce(left_front_handle, 10000)\n                sim.setJointForce(left_back_handle, 10000)\n                sim.setJointForce(right_back_handle, 10000)\n                --sim.setJointForce(right_front_handle, 10000)\n            end\n            if (auxiliaryData[1]==2007) then\n                -- up key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2008) then\n                -- down key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==2009) then\n                -- left key\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2010) then\n                -- right key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    \n    if leftvelocity>MaxVel then\n        leftvelocity=MaxVel\n    end\n    if leftvelocity<-MaxVel then\n        leftvelocity=-MaxVel\n    end\n    \n    if rightvelocity>MaxVel then\n                rightvelocity=MaxVel\n    end\n    if rightvelocity<-MaxVel then\n                rightvelocity=-MaxVel\n    end\n    \n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\n    \nend  \n 成功使用方向鍵控制模型，下週將會加入視覺傳感器與力傳感器，讓模型在遇到物體時可以自動避開。 \n \n", 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '本週我們加入了力傳感器、視覺傳感器，讓模型在碰觸障礙物時，可以自行避開並選擇路徑上無障礙物之路線進行移動。 \n 下圖為模擬圖: \n \n 模型Lua: \n function sysCall_init()\n    \n    \nend\n\nfunction sysCall_actuation()\n    \nend\n\nfunction sysCall_sensing()\n    \nend\n\nfunction sysCall_cleanup()\n    \nend\n\n\n\nfunction sysCall_afterDelete(inData)\n    for key,value in pairs(inData.objectHandles) do\n        print("Object with handle "..key.." was deleted")\n    end\n    \nend\n\nfunction sysCall_afterCreate(inData)\n    for key,value in pairs(inData.objectHandles) do\n        print("Object with handle "..value.." was created")\n    end\nend\n--]]\nfunction speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    \n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self) \n    leftMotor=sim.getObjectHandle("bubbleRob_leftMotor") \n    rightMotor=sim.getObjectHandle("bubbleRob_rightMotor") \n    noseSensor=sim.getObjectHandle("bubbleRob_sensingNose") \n    minMaxSpeed={120*math.pi/180,300*math.pi/180} \n    backUntilTime=-1 \n   \n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.create(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*1\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(noseSensor) \n    \n    if (result>0) then backUntilTime=sim.getSimulationTime()+4 end \n\n    if (backUntilTime<sim.getSimulationTime()) then\n        \n        sim.setJointTargetVelocity(leftMotor,speed)\n        sim.setJointTargetVelocity(rightMotor,speed)\n    else\n        \n        sim.setJointTargetVelocity(leftMotor,-speed/5)\n        sim.setJointTargetVelocity(rightMotor,-speed/200)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui)\nend \n 路徑Lua: \n require(\'graph_customization\') \n 力傳感器Lua: \n function sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend\n\nfunction sysCall_init()\nend\n\nfunction sysCall_trigger(inData)\n    -- callback function automatically added for backward compatibility\n    sim.breakForceSensor(inData.handle)\nend \n 視覺傳感器Lua: \n function sysCall_init()\nend\n\nfunction sysCall_vision(inData)\n    -- callback function automatically added for backward compatibility\n    -- (vision sensor have no filters anymore, but rather a callback function where image processing can be performed)\n    local retVal={}\n    retVal.trigger=false\n    retVal.packedPackets={}\n    simVision.sensorImgToWorkImg(inData.handle)\n    simVision.edgeDetectionOnWorkImg(inData.handle,0.200000)\n    simVision.workImgToSensorImg(inData.handle,false)\n    return retVal\nend\n \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '期中考週，各分組進行 5-10 分鐘的網際 stage2 分組專案報告, 並透過 ShareX 錄製簡報影片 (簡報前後按下 Shift + PrintScreen, 並採全畫面錄影), 之後會將各組簡報影片送到 GDrive 公開展示, W15 之前將要求各組針對 stage1 與 stage2 的其他組別專案進行互評, 以供實際評分參考。 \n Group r epository :\xa0 stage2-ag1 \n Group website :\xa0 stage2-ag1 \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'Final', 'text': '以下頁籤為開學第十週(W10)~第十八週(W18)之內容 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'W10-task1', 'text': '利用國立虎尾科技科技大學機械設計工程系cd2021下的task1進行作業。 \n 讀取 stage3_2a.txt, 建立 Stage3 的分組倉儲, 分組網頁, 以及各組員倉儲及網頁連結. \n 已知 \xa0 stage3_2a.txt 內容, 以及初步資料讀取程式: \xa0 \n # open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2a.txt") as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n#print(len(data))\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    print(待補) \n 列出各分組倉儲, 分組網站與學員倉儲及學員網站連結: \n (待補) \n', 'tags': '', 'url': 'W10-task1.html'}, {'title': 'W11-task2', 'text': '執行Task2， stage1 與 stage2 所完成的 coppeliasim 場景, 採 Python remote API 進行操控, 並將過程拍成影片。 \n CoppeliaSim 使用\xa0 4.2.0 版 . \n 將stage1 與 stage2 所完成的coppeliasim場景, 使用 Python remote API 進行操控: \n \n \xa0CoppeliaSim 場景進行操控: \n 首先將下方紅框處的3個檔案與要執行的.ttt檔案放在同一個資寮夾。 \n \n 接下來將.Py檔放入(Untitled)-SciTE，並修改第一行為: sim as vrep，再將下方馬達換成對應名稱 \n \n 接下來將逞景整體加入腳本 \n \n 第一個腳本 \n \n simRemoteApi.start(19999) \n 第二個腳本 \n \n threadFunction=function()\n\t-- Put your thread code here (initialization and clean-up code should not be in here)\n\n\t\n\t-- Some EXTERNAL commands (e.g. socket commands provided by Lua libraries)\n\t-- might appear as blocking to the simulator. In that case, you can define\n\t-- a non-blocking section as following example shows:\n\t--\n\t-- sim.setThreadIsFree(true) -- Start of the non-blocking section\n\t--\n\t-- Following 2 lines are meant as an example of EXTERNAL blocking commands:\n\t-- http = require("socket.http")\n\t-- print(http.request("http://www.google.com"))\n\t--\n\t-- sim.setThreadIsFree(false) -- End of the non-blocking section\n\t--\n\t-- While in a non-blocking section, try to avoid calling sim-functions. Also\n\t-- never forget to close the blocking section, otherwise V-REP will hang.\n\t-- Make sure you read the information related to the sim.setThreadIsFree\n\t-- API function in V-REP\'s documentation.\n\n\n\t-- If you wish to synchronize a threaded loop with each simulation pass,\n\t-- set the thread switch timing in the initialization phase of this script\n\t-- to the maximum (200), and manually switch thread here with the\n\t-- sim.switchThread() command. \n\t-- ( sim.switchThread() will suspend this script\'s execution until next\n\t-- simulation pass, i.e. until the simulation time has changed )\n\t--\n\t-- Following example illustrates this:\n\t-- \n\t-- while true do\n\t--     local p=sim.getObjectPosition(objHandle,-1)\n\t--     p[1]=p[1]+0.001\n\t--     sim.setObjectPosition(objHandle,-1,p)\n\t--     sim.switchThread()\n\t-- end\nend\n\n-- Put some initialization code here:\nsim.setThreadSwitchTiming(2) -- Default timing for automatic thread switching\n\n-- Here we execute the regular thread code:\nres,err=xpcall(threadFunction,function(err) return debug.traceback(err) end)\nif not res then\n\tsim.addStatusbarMessage(\'Lua runtime error: \'..err)\nend\n\n-- Put some clean-up code here:\nsimRemoteApi.start(19999) \n 成功執行畫面 \n \n import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,left_motor_handle=vrep.simxGetObjectHandle(clientID,\'left_m\',vrep.simx_opmode_oneshot_wait)\n \nerrorCode,right_motor_handle=vrep.simxGetObjectHandle(clientID,\'right_m\',vrep.simx_opmode_oneshot_wait)\n \nif errorCode == -1:\n    print(\'Can not find left or right motor\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,left_motor_handle,0, vrep.simx_opmode_oneshot_wait)\nerrorCode=vrep.simxSetJointTargetVelocity(clientID,right_motor_handle,2, vrep.simx_opmode_oneshot_wait) \n \n', 'tags': '', 'url': 'W11-task2.html'}, {'title': 'W12-task3', 'text': '下載\xa0 OBS \xa0並使用\xa0 Youtube \xa0進行直播， 每週各組按照組員順序, 於每堂課程時段, 輪流由 2-3 名同學開啟， 因帳號第一次直播需要24小時後才能開播，須臾下次上課前準備好此功能。 \n 下圖為鎖定頁面: \n \n 下載\xa0 OBS \xa0，OBS軟體在擷取顯示器時是使用內顯，現在大部分筆電都有獨顯，所以在安裝玩OBS要擷取顯示器時會出現無法擷取顯示器的問題。 \n 以下講解如何解決顯示器無法擷取問題: \n Step1: \n \xa0 開啟顯示設定 \n \n Step2: \n \xa0 點選下方圖形設定 \n \n Step3: \n \xa0 點選瀏覽 \n \n Step4: \n \xa0 選取obs64.exe，因使用者不同路徑有所變化，個人之路徑為: \n \n Step5: \n \xa0 選完應用程式後，點選程式欄位下方選項的位置 \n \n Step6: \n \xa0 這時圖形偏好設定對話框會跳出此時點選省電模式並按下儲存，OBS就能擷取到顯示器。 \n 圖形偏好設定對話框有三個選項: \n 1.讓Windoes決定: 預設使用獨顯 \n 2.省電: 下方有標記是內顯 \n 3.高效能:\xa0 下方有標記是獨顯 \n 因 OBS軟體在擷取顯示器時是使用內顯，所以選取省電模式 \n \n Step7: \n \xa0 成功擷取 \n', 'tags': '', 'url': 'W12-task3.html'}]};