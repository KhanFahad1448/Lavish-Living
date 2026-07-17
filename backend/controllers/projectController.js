import Project from "../models/Project.js";

// =======================
// GET ALL PROJECTS
// =======================
export const getProjects = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const totalProjects = await Project.countDocuments();

    const projects = await Project.find()
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(
      totalProjects / limit
    );

    res.status(200).json({
      success: true,

      projects,

      pagination: {
        currentPage: page,
        totalPages,
        totalProjects,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// =======================
// CREATE PROJECT
// =======================
export const createProject = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      location,
      featured,
    } = req.body;

const images =
  req.files?.images?.map((file) => file.path) || [];

const beforeImage =
  req.files?.beforeImage?.[0]?.path || "";

const afterImage =
  req.files?.afterImage?.[0]?.path || "";

  console.log("========== CREATE PROJECT ==========");
  console.log("BODY:", req.body);
  console.log("FILES:", req.files);
  console.log("IMAGES:", images);

const project = await Project.create({
  title,
  category,
  description,
  location,
  featured: featured === "true",

  beforeImage,
  afterImage,

  images,
});

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// UPDATE PROJECT
// =======================
export const updateProject = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const {
      title,
      category,
      description,
      location,
      featured,
      keepImages,
    } = req.body;

    let images = [];

    // Existing images user decided to keep
    if (keepImages) {
      images = JSON.parse(keepImages);
    }

    // Newly uploaded gallery images
   if (req.files?.images?.length > 0) {
      images.push(
    ...req.files.images.map((file) => file.path)
     );
    }

    project.title = title;
    // Update Before Image
   if (req.files?.beforeImage?.length > 0) {
    project.beforeImage =
    req.files.beforeImage[0].path;
    }

    // Update After Image
   if (req.files?.afterImage?.length > 0) {
    project.afterImage =
    req.files.afterImage[0].path;
    }
    project.category = category;
    project.description = description;
    project.location = location;
    project.featured = featured === "true";
    project.images = images;

    await project.save();

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =======================
// TOGGLE FEATURED
// =======================
export const toggleFeatured = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    project.featured = !project.featured;

    await project.save();

    res.status(200).json({
      success: true,
      message: project.featured
        ? "Project marked as Featured"
        : "Project removed from Featured",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =======================
// DELETE PROJECT
// =======================
export const deleteProject = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};