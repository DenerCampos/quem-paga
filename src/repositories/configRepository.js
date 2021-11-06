import { getDataBase } from '../database/data'

async function dataBase() {
    return await getDataBase();
}

async function findAll() {
    let config = await dataBase();
    return config;
}

async function find(name) {
    let config = await dataBase();
    return config;
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

export const configReposittory = {
    findAll,
    find,
    save,
    update,
    del
};