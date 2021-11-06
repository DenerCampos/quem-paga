import { getDataBase } from '../database/data'

async function dataBase() {
    return await getDataBase();
}

async function findAll() {
    let database = await dataBase();
    members = database.members;
    return members;
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

export const paymentsReposittory = {
    findAll,
    find,
    save,
    update,
    del
}
