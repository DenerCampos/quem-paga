import { getDataBase } from '../database/data'

async function dataBase() {
    return await getDataBase();
}

async function findAll() {
    let database = await dataBase();
    return database.members;
}

async function find(name) {
    let database = await dataBase();
    return database;
}

async function save(data) {
    return true;
}

async function update(data) {
    return true;
}

async function del(data) {
    return true;
}

export const membersReposittory = {
    findAll,
    find,
    save,
    update,
    del
};
