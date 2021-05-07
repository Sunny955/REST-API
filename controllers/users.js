import { v4 as uuidv4 } from 'uuid';
let users = [];

export const getUser = (req,res) =>{ 
    res.send(users);
};

export const createUser = (req,res)=> {
   
    const user = req.body;
    const userId = uuidv4();
    const userWithId= {...user , id:userId};

    users.push(userWithId);
    res.send(`User with name: ${user.firstName} ${user.lastName} and age: ${user.age} is added`)
};

export const get_user_with_id = (req,res)=> {
    const {id} = req.params;
    const founfUsers=users.find((user) => user.id===id);
    res.send(founfUsers);
};

export const delete_user = (req,res)=> {
    const {id} = req.params;

    users = users.filter((user) => user.id!==id);
    res.send('user with the given id is deleted!!');
};

export const update_user = (req,res)=> {
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;

    const user=users.find((user) => user.id===id);

    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;

    res.send(`User with ${id} is updated successfully!!`);
};