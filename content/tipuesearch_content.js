var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'NFU-MDE-40823108-KAO,YU-CHE \n 20201/2/25--> Page creation \n ⚡ \n \xa0 This is my Github:\xa0 NFU-MDE-40823108-KAO,YU-CHE \n \xa0 \xa0 Collaborative product design internship for cd2021 \n \xa0 \xa0 \xa0\xa0 Warehouse: \xa0\xa0 cd 2021 Warehouse \n \xa0 \xa0 \xa0 Website: \xa0  cd 2021 Website \n \xa0 \xa0 \xa0\xa0 Group warehouse :\xa0 -- \n \xa0 \xa0 \xa0 Group website: -- \n \n ⚡ \n \xa0 This is a personal website:\xa0 \xa0 Godfather-Adolphe50-2021 \n \xa0 \xa0\xa0 Warehouse:\xa0 Godfather-Adolphe50-2021 Warehouse \n \xa0 \xa0\xa0 Website: \xa0 Godfather-Adolphe50-2021 Website \n \xa0 \xa0\xa0 Youtube: \xa0 Godfather Adolphe 50 \n ⚡ \n \xa0 An introduction to computer programs for the first course:\xa0 \xa0 cp2019 \n \xa0 \xa0 Warehouse:\xa0 cp 2019 Warehouse \xa0 \n \xa0 \xa0 Website:\xa0 c p 2019 Website \n \xa0 \xa0 \xa0 Group warehouse :\xa0 cp 2019ag5 Warehouse \n \xa0 \xa0\xa0 Group website:\xa0 cp 2019ag5 website \n ⚡ \n \xa0 Internet content management for the following courses:\xa0 \xa0 wcm2020 \n \xa0 \xa0 Warehouse:\xa0 wcm 2020 Warehouse \n \xa0 \xa0\xa0 Website:\xa0 wcm 2020 Website \n ⚡ \n \xa0 The second course computer-aided design practice:\xa0 \xa0 cad2020 \n \xa0 \xa0 Warehouse:\xa0 cad 2020 Warehouse \n \xa0 \xa0\xa0 Website:\xa0 cad 2020 Website \n \xa0 \xa0\xa0 Group warehouse : \xa0 cad 2020ag4 Warehouse \n \xa0 \xa0\xa0 Group website: \xa0 cad 2020ag4 website \n ⚡ \n \xa0 The second course collaborative product design practice:\xa0 \xa0 cd2021 \n \xa0 \xa0\xa0 Warehouse: \xa0\xa0 cd 2021 Warehouse \n \xa0 \xa0 Website: \xa0 \xa0 cd 2021 Website \n \xa0 \xa0\xa0 Group warehouse :\xa0 -- \n \xa0 \xa0 Group website: -- \n \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'KMOLab basis', 'text': 'About: \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n \n', 'tags': '', 'url': 'KMOLab basis.html'}, {'title': 'Cmsimde create', 'text': 'Step1: \n \xa0  Go to \xa0 2021 可攜程式系統 First download the\xa0 下載 kmol2021_spring_v2.7z \xa0compressed file, and extract the file to the\xa0 \xa0 flash drive. \n Step2: \n \xa0\xa0 Set gitconfig and save this file in the home directory. First go to home and select the .config file. \n \n \n Step3: \n \xa0\xa0Drag the  .config file  to\xa0 (Untitled)-SciTE, modify the name and mailbox to your student ID. \n \n Step4: \n \xa0 Go to\xa0 https://github.com/mdecourse/cmstemplate , And click on the red box below. \n \n Step5: \n \xa0\xa0Establish cd2021 warehouse. \n \n Step6: \n \xa0\xa0After completing the cd 2021 storage, click the settings below. \n \n Step7: \n \xa0\xa0Slide to the GitHub Pages below to create GitHub Pages. \n \n Step8: \n \xa0\xa0Open cmd, and enter cd tmp Re-enter: git clone --recurse-submodules  https://github.com/40823108/cd2021.git \n \n Step9: \n \xa0\xa0Test whether the website is established. \n Y:\\tmp\\cd2021\\cmsimde>python wsgi.py \n \n Step10: \n \xa0\xa0Open the browser and enter https://localhost:9443, click Advanced. \n \n Step11: \n \xa0\xa0Click to continue. \n \n Step12: \n \xa0\xa0Click login. \n \n Step13: \n \xa0\xa0enter password. \n \n Step14: \n \xa0\xa0Can start editing the website. \n \n Step15: \n \xa0 Upload the file to github. \n Y:\\tmp\\cd2021>git add . \n \n Step16: \n \xa0\xa0 Y:\\tmp\\cd2021>git commit -m "add" \n \n Step17: \n \xa0\xa0\xa0\xa0 Y:\\tmp\\cd2021>git push \n \n Step18: \n \xa0\xa0Successfully established a website. \n \n \xa0 \n', 'tags': '', 'url': 'Cmsimde create.html'}, {'title': 'Python program', 'text': 'Python program: \n import csv\n   \n# read student list\nfilename = \'D:/1a/1alist.txt\'\nwith open(filename, encoding="utf-8") as f:\n    content = f.readlines()\n    student = [x.strip() for x in content]\n#print(content)\n#print(student)\n   \n# Timestamp, email, ????, url, score, desp, memo\n# 0, 1, 2, 3, 4, 5, 6\n#total = 0\n  \nall = {}\nwith open(\'D:/1a/1a.csv\', encoding="utf-8") as csv_file:\n    csv_reader = csv.reader(csv_file, delimiter=\',\')\n       \n    line_count = 0\n    for row in csv_reader:\n        if line_count == 0:\n            #print(f\'Column names are {", ".join(row)}\')\n            line_count += 1\n        else:\n            student_num = row[1].split("@")[0]\n            #print(student_num)\n            student_score = row[4]\n            #print(student_score)\n            try:\n                all.update({student_num: student_score})\n            except:\n                all.update({student_num: "error"})\n            #print(f\'\\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.\')\n            #print(f\'\\t{row[4]}\')\n            #total += int(row[4])\n            line_count += 1\n#print(all)\n#print(student)\n  \nfor i in student:\n       \n    #if i in all:\n        #pass\n    #else:\n        #print(str(i))\n       \n    try:\n        print(i + "\\t" + all[i])\n    except:\n        print(i + "\\t60")\n  \n   \n    #print(f\'Processed {line_count} lines.\')\n    #print("??=" + str(total/line_count)) \n Flask program: \n from flask import Flask\n   \napp = Flask(__name__)\n   \n@app.route(\'/\') \ndef hello_world():\n    return \'Hello, From Flask!\'\n   \nif __name__== \'__main__\': \n    app.run()\n \n', 'tags': '', 'url': 'Python program.html'}, {'title': 'SSH key produce', 'text': 'Open: \n \xa0 Y:/PuTTY-->puttygen.exe \n \n \xa0 Use puttygen to import the private key (id_rsa) and convert it into a format (.ppk) file that putty can understand. \n \xa0 After saving the (.ppk) file. \n \n \xa0 Use scite to open the public key (id_rsa.pub), go to the toolbar and find Options-->Wrap to see the complete file content. \n \n \xa0 The full content is as follows: \n \n \xa0 Go to storage-->seeting-->SSH and GPG keys, click New SSH key, paste the copied content and save it for use. \n \n', 'tags': '', 'url': 'SSH key produce.html'}, {'title': 'SSH putty settings', 'text': '\xa0 SSH Putty settings: \n \n \xa0 Please select the .ppk file for the line drawing. \n \n \xa0 Go back to the Session directory and press save to save. \n \n \xa0 Enter the folder you want to Push, then enter the \\tmp\\cd2021\\.git directory, modify the config file, and modify the string  url=https:\\\\github.com:40823108/cd2021.git \n \xa0 Modified to:  url=git@github.com:40823108/cd2021.git \n \n \xa0 The following is a record of successful use of SSH without password push. \n \n \n', 'tags': '', 'url': 'SSH putty settings.html'}, {'title': 'Leo Edit Blog', 'text': 'Step1: \n \xa0\xa0Open leo\xa0 ➜ Y:/tmp>leo \n \n Step2: \n \xa0\xa0After opening leo, search Disqus in the browser and add a forum. \n \n Step3: \n \xa0\xa0Click File\xa0 ➜ Open-Outline \n \n Step4: \n \xa0\xa0Y:\\tmp\\cd2021\\config>pelican.leo \n \n \n \n Step5: \n \xa0 Modify the data in the share. \n \n Step6: \n \xa0\xa0Modify the data in the remote. \n \n Step7: \n \xa0\xa0Edit template  ➜\xa0 @edit base.html \n \n Step8: \n \xa0\xa0Modify markdown. \n \n \n', 'tags': '', 'url': 'Leo Edit Blog.html'}, {'title': 'Leo Edit Reveal', 'text': 'Step1: \n \xa0\xa0Open leo\xa0 ➜ Y:/tmp>leo \n \n Step2: \n \xa0\xa0Click File\xa0 ➜ Open-Outline \n \n Step3: \n \xa0\xa0Y:\\tmp\\cd2021\\config>reveal.leo \n \n \n \n Step4: \n \xa0\xa0 You can start editing Reveal. \n \n', 'tags': '', 'url': 'Leo Edit Reveal.html'}, {'title': 'Midterm', 'text': '', 'tags': '', 'url': 'Midterm.html'}, {'title': 'W1', 'text': 'The first stage of group collaborative internship: \n \xa0\xa0The weekly group report must include html, pdf and Youtube videos: \n \xa0 \xa0\xa0Thematic topic: \n \xa0 \xa0 \xa0\xa0Student ID of the first group member:  40823145 \n \xa0 \xa0 \xa0\xa0Student ID of the second group member:  40823108 \n \xa0 \xa0 \xa0\xa0Student ID of other group members: \n Internship tasks of each group: \n \xa0 1.The group leader’s Github account has established the group website for each group. However, in the process of ordering each class in W1, it is found that even if Ethercalc is used to synchronize the Internet collaboration method to allow the optional group members of each class to fill in the student ID of the group of two or two, but still If there is a lack of manual labor or an effective plan for automatically determining the order of each team, I hereby instruct each group to carry out their own collaborative product development project (W2-W4), this topic is listed as one of the mandatory topics, and each group is explained in detail The first stage that is considered the most efficient and the method and process of setting the order. \n \xa0 2.In addition, in order to allow each group to collaborate in the internship process at stage1, the team members can publish their work and experience reports during the W2-W4 process through the blog, indicating that Leo Editor can be used to assist Pelican in CMSiMDE to publish collaborative blogs. The purpose is to enable each group to fully display the blog records left by each stage during the collaboration period. However, this method must be familiar with the operation of Leo Editor, so the creation of a collaborative blog through Pelican, in addition to using Leo Editor to assist in setting and In addition to creating a pelican blog, this topic is also listed as the second of the mandatory topics for each group in the Stage1 collaborative product design process. Please explain in detail for each group when using or not using Leo Editor, each group member is setting and creating Problems and solutions that may be encountered or produced in the process of collaborative blogging. \n \n W1 completion items: \n \xa0\xa0Use cmstemplate to create a website, install Leo Editor, set the Pelican blog in CMSiMDE, and use the button command to convert the Pelican Markdown file, and save the blog super file into the blog directory. \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '\xa0 Project production started this week, and the subject of production was discussed with the team members. \n The following picture is the project that the group wants to do, the gripper of the robotic arm. \n \n We will use  Webots  to simulate the movement of the gripper. \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}]};