const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const {
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/userController");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/user"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.post("/register", upload.single("avatar"), createUser);
router.post("/login", loginUser);
router.get("/all", getAllUsers);

module.exports = router;
