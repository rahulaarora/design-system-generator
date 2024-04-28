// save project API
import connectDb from "@/lib/connectDb";
import Project from "@/models/Project";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { id: projectId, data } = req.body;

  if (!projectId || !data) {
    return res
      .status(400)
      .json({ success: false, message: "projectId or data missing" });
  }

  await connectDb("auth");

  try {
    const project = await Project.findOneAndUpdate(
      { _id: projectId },
      { data },
      { new: true }
    );
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}
