// create new project
import connectDb from "@/lib/connectDb";
import Project from "@/models/Project";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { title, userId } = req.body;

  if (!title || !userId) {
    return res
      .status(400)
      .json({ success: false, message: "title and userId are required" });
  }

  await connectDb("auth");

  try {
    const project = new Project({
      title,
      userId,
    });
    await project.save();
    res.status(201).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}
