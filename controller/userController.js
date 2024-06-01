// resolver methods for grapql queries , mutations 
const User  =  require('../model/userModel')
 
const getUser = async ( { id } ) => {
    const user  = await User.findById(id);
    return user;
}

const getUsers = async () => {
    const users  = await User.find();
    return users;
}

const createUser = async ({ name , email , password }) => {
    const user  =  new User ({ name , email , password });
    await user.save();
    return user;
}

const updateUser  = async ({ id , name , email , password }) => {
    const user  = await User.findByIdAndUpdate(id, { name , email , password});
    return user;
}

const deleteUser  = async ({ id }) => {
    const user  =  await User.findByIdAndDelete(id);
    return user;
}

module.exports  = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}