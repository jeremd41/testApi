const express = require("express");
const router = express.Router();
const Post = require("../models/post");
// GET ROUTES

router.get("/", async (req, res) => {
  try{
    // FIND ALL ENTRY
    const posts = await Post.find()
    res.json(posts)
  }catch(err){
    res.json({message: err})
  }
});

router.get("/:postId", async (req, res) => {
  try{
    //FIND A SPECIFIC POST 
    const posts = await Post.findById(req.params.postId)
    res.json(posts)
  }catch(err){
    res.json({message: err})
  }
});

// POST ROUTES
router.post("/", async (req, res) => {
  const post = new Post({
      title: req.body.title,
      content: req.body.content
  })

  try{
    const savedPost = await post.save()
    res.json(savedPost)
  }catch(err){
    res.json({message :err})
  }
});
//PATCH ROUTES
router.patch("/:postId", async (req, res) => {
  try{
    const updatePost = await Post.updateOne({_id: req.params.postId},{
      title: req.body.title,
      content:req.body.content
    })
    res.json(updatePost)
  }catch(err){
    res.json({message :err})
  }
});
// DELETE ROUTES
router.delete('/:postId', async (req,res)=>{
  try{
    const deletePost = await Post.deleteOne({_id: req.params.postId})
    res.json(deletePost)
  }catch(err){
    res.json({message: err})
  }
})

module.exports = router;
