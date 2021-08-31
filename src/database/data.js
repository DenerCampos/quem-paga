import fs from 'fs'
import path from 'path'


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

function DataException(message) {
    this.message = message;
    this.name = "DataException";
 }

const getDataFile = async (directory, file) => {
    let dir
    let fileContent

    try {
        dir = path.resolve('./' + directory)
        // console.log(path.join(dir, file))
        fileContent = fs.readFileSync(path.join(dir, file), 'utf8')    
    } catch (error) {
        throw new DataException('Não foi possivel abrir o arquivo ' + path.join(dir, file))
    }

    return fileContent
}

export async function getDataBase() {
    let dataBaseContent = await getDataFile('src/database', 'database.json')
    dataBaseContent = await JSON.parse(dataBaseContent)

    return dataBaseContent
}

export async function getMembers() {
    let members = await getDataFile('config', 'config.json')
    members = await JSON.parse(members).members
    
    return members
}

export async function getconfig() {
    let payDay = await getDataFile('config', 'config.json')
    payDay = await JSON.parse(payDay).pay_day
    
    return payDay
}

export async function getWhoPays() {
    const config = await getDataFile('config', 'config.json')
    const members = await JSON.parse(config).members
    const payDay = await JSON.parse(config).pay_day
    // const startMonth = await JSON.parse(config).start_month
    let whoPays = {}
    let date = new Date()
    let membersMonth = []
    let month = date.getMonth()

    //remove os não ativos
    const activeMembers = members.map( (member) => {
        return (member.active) ? member : null
    })
    
    let max = Math.ceil(12/activeMembers.length)    
    for (let index = 0; index <= max; index++) {
        membersMonth = membersMonth.concat(activeMembers);        
    }

    whoPays = {
        month: months[month],
        dueDate: payDay,
        member: membersMonth[month],
        nextMember: membersMonth[month+1],
    }

    return whoPays
}
