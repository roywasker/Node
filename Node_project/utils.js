const jf = require('jsonfile');
const File = './actions.json';
const UsersService = require('./Services/UsersService');


const addUserActions = async (userId) => {
    try {
        const user = await UsersService.getUserById(userId);
        if (!user) {
            console.error(`User with ID ${userId} not found.`);
            return;
        }

        const obj = {
            id: user.id,
            maxActions: user.NumOfActions,
            date: user.ActionDate,
            actionAllowed: user.ActionToday
        };
       
        let actionFile = [];
        try {
            actionFile = await jf.readFile(File);
            if (!Array.isArray(actionFile)) {
                actionFile = [];
            }
        } catch (err) {
            console.warn("File read error or file does not exist, initializing new array.");
        }

        actionFile.push(obj);

        await jf.writeFile(File, actionFile, { spaces: 2 });

    } catch (error) {
        console.error("Error in addUserActions:", error);
    }
}

module.exports = { addUserActions }