const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
const courses = require('./data/Courses/courses.json')
const categories = require('./data/Categories/Categories.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// all categories
app.get('/course-categories', (req, res) => {
    res.send(categories)
})
// all courses
app.get('/courses', (req, res) => {
    res.send(courses)
})



app.listen(port, () => {
    console.log(` app running on port ${port}`)
})