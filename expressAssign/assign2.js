const exp = require('express');
const parsebody = require('body-parser');
const app = exp();

app.use(parsebody.urlencoded({extended: true}));

app.post('/users', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

app.use('/add-user', (req, res, next) => {
    res.send('<form action="/users" method="POST"><input type="text" name="entername"> <button type="submit">Enter User</button></form>');
});


app.use('/', (req, res, next) => {
res.send('<h1>Hello from assign2</h1>');
});
app.listen(3000);