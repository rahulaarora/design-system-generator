// fetch all user's project
import connectDb from "@/lib/connectDb";
import Project from "@/models/Project";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { id: projectId } = req.query;

  console.log(req.query);

  if (!projectId) {
    return res
      .status(400)
      .json({ success: false, message: "projectId is required" });
  }

  await connectDb("auth");

  try {
    const project = await Project.findById({ _id: projectId });
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}
