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

// for a single course
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse)
})

// course according category
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_courses = courses.filter(course => course.category_id === id)
    res.send(category_courses)

})


app.listen(port, () => {
    console.log(` app running on port ${port}`)
})