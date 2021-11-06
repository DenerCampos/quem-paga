import { getPayDay } from '../../database/data'

export default async function handler(req, res) {
  try {
    const data = await getPayDay();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
