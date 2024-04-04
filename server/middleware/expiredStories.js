const stories = require("../model/storiesModel");

const deleteExpiredStories = async (req, res, next) => {
  try {
    const expiredStories = await stories.find({
      remove_date: { $lt: Date.now() },
    });
    for (const story of expiredStories) {
      await story.remove();
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { deleteExpiredStories };