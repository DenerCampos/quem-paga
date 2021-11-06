import { membersReposittory } from '../repositories/membersRepository';
import { configReposittory } from '../repositories/configRepository';

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto', 
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]

async function getAllMembers() {
    let members = await membersReposittory.findAll();
    return members;
}

async function getConfig() {
  let config = await configReposittory.findAll();
  return config;
}

async function whopay() {
  const config = await getConfig();
  const members = await getAllMembers();

  const whoPays = {};
  const date = new Date();
  const membersMonth = [];
  const month = date.getMonth();
  
}

export const whopaysService = {
  whopay,
}
