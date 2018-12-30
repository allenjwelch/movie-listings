const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the Vue app
// router.use(function(req, res) {
//   console.log('in routes/index.js');
//   res.sendFile(path.join(__dirname, "../dist", "index.html"));
// });

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Home page')
  // res.sendFile(path.join(__dirname, "../dist", "index.html"));
  // res.sendFile(path.join(__dirname, "../public", "/index.html"));
  // res.sendFile('./public/index.html')

})

module.exports = router;
