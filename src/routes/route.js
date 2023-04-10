const express = require('express')
const router = express.Router()
const authorController= require("../Controller/authorController.js")
const blogController= require("../Controller/blogController.js")
const auth = require("../middleware/auth.js")

router.post("/authors", authorController.createAuthor)
router.post("/login", authorController.logIn)
router.get("/logout",authorController.logout)

router.post("/blogs", auth.authentication, blogController.createBlog)
router.get("/blogs", blogController.getBlogs)
router.get("/blog/:blogId" , blogController.getById)
router.get("/myblogs" , auth.authentication,blogController.getMyBlogs)
router.put("/blog/:blogId", auth.authentication, blogController.updateBlog)
router.delete("/blogs/:blogId", auth.authentication,blogController.deleteById)
router.delete("/blogs", auth.authentication, blogController.deleteByQuery)

module.exports = router