Project Title : EXERCISE 6 -  User Management using Express, Mongoose, Needle, and MongoDB compass
Author : Luthelle L. Fernandez
Code Description : 
    - This is a simple user management using Express, Mongoose, Needle, and MongoDB compass. With the main Functions of Adding, Updating, Removing, Viewing Student data in the database
How to use :
    1. Download all modules required. See package.json for versions used.
        - Express  
        - Mongoose  
        - Needle  
    2. Make sure you have downloaded MongoDB with MongoDB compass
        - If not here are the links :
            - Installing MongoDB in Ubuntu : https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
            - Installing MongoDB Compass in Ubuntu : https://www.mongodb.com/docs/compass/current/install/
    3. In your VS Code, Open 3 Terminals (Note: make sure to open the right terminals where you downloaded nodejs, MonggoDB etc.)
        - Terminal 1 : 
                Run 
                    sudo systemctl start mongod
                    sudo mongodb-compass        (if this does not work try : sudo mongodb-compass --no-sandbox)
        - Terminal 2 :
                Run
                    node .
        - Terminal 3 :
                Run
                    node test.js
    4. In Terminal 3, there will be a MENU where you can choose from.
        To visually demonstrate :
            ============= MENU =============
            1 - Add Students
            2 - Update Mary Jane's Last Name
            3 - Remove Specific Student
            4 - Remove All Student Data
            5 - Get Specific User
            6 - Get All Users
            0 - Exit
            ================================
            Choice : 

            * To avoid unwanted possible errors please take note of the ff:
                - Add Students first before using Remove Functions
                    -> The database is initially empty

