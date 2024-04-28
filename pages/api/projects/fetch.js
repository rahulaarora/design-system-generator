// fetch all user's project
import connectDb from "@/lib/connectDb";
import Project from "@/models/Project";

export default async function handler(req, res) {
  if (!req.method === "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { userId } = req.body;

  if (!userId) {
    return res
      .status(400)
      .json({ success: false, message: "userId is required" });
  }

  await connectDb("auth");

  try {
    const projects = await Project.find({ userId });
    res.status(200).json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}
