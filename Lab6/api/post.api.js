const UUID = require('uuid');
const {getAll, getById, removeById, save, update} =
    require('../dal/posts.dao');
const createPost = async ({name, description}) => {
    const post = {
        id: UUID.v4(),
        name,
        description,
        postedDate: new Date()
    }
    return await save(post);
}