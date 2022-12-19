import fetchLegislations from "../../../services/fetchLegislations";

export default async function handler(req, res) {
  const result = await fetchLegislations.list();
  res.status(200).json(result);
}
