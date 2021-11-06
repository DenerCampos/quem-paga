import { membersService } from '../../services/membersService'

export default async function handler(req, res) {
  try {
    const data = await membersService.getAllMembers();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
