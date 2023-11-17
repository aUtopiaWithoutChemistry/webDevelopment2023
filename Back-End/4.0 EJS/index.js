import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const birthday = new Date('August 19, 1975 23:15:30');
var dayNum = birthday.getDay();

var doSomething;
var day;

function logic(req, res, next) {
    if (dayNum === 0 || dayNum === 6) {
        day = "weekend";
        doSomething = "have fun";
    } else {
        day = "weekday";
        doSomething = "work hard";
    }
    console.log(day + doSomething);
    next();
}

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(logic);

app.get("/", (req, res) => {
    res.render("index.ejs",
	{ day: day, doSomething: doSomething }
	);
})

// app.post("/", (req, res) => {
// 	res.render("index.ejs",
// 	{ day: day, doSomething: doSomething }
// 	);
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});