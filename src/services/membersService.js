import { membersReposittory } from '../repositories/membersRepository'

async function getAllMembers() {
    let members = await membersReposittory.findAll();
    return members;
}

export const membersService = {
  getAllMembers,
}
