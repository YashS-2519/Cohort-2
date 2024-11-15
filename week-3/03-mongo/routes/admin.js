const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  Admin.create({ username, password })
    .then(() => {
      res.status(201).json({ message: "Admin created successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  Course.create({ title, description, price, imageLink }).then(() => {
    res.status(201).json({ message: "Course created successfully" });
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((course) => {
    res.status(200).json({ course });
  });
});

module.exports = router;
