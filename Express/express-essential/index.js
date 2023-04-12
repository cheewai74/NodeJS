import express from "express";
import data from "./data/MOCK.json" assert { type: "json" };

const app = express();

const PORT = 3000;

//Using the public folder at the root of the project
app.use(express.static("public"));

//GET with Routing Parameters
app.get("/class/:id", (request, response)=>{
    console.log(request.params);
    const studentId = Number(request.params.id);
    const student = data.filter((student)=> student.id === studentId);
    response.send(student);

});

app.use("/images", express.static("images"));

// POST - express.json and express.url encoded
app.use(express.json())

app.get("/", (request, response) => {
    // response.send("This is a GET request at /");
    response.json(data);
});

// POST - express.json and express.url encoded
app.post('/item', (request, response) =>{
    console.log(request.body);
    response.send(request.body);
})

app.get("/redirect", (request, response) => {
    response.redirect("https://www.linkedin.com");
});

app.route("/class").get((request, response) => {
    response.send("Retrieve class info");
})
.post((request, response) => {
    response.send("Create class info");
})
.put((request, response) => {
    response.send("Update class info");
});

// app.get("/class", (request, response) => {
//     response.send("Retrieve class info");
// });

// app.post("/class", (request, response) => {
//     response.send("Create class info");
// });

// app.put("/class", (request, response) => {
//     response.send("Update class info");
// });

app.get("/next", (request, response, next) => {
    console.log("The response will be sent by the next function");
    next();
}, (request, response) => {
    response.send("I just set up a route with a second callback.")
}
);

app.post("/create", (request, response) => {
    response.send("This is a POST request at /create");
});

app.put("/edit", (request, response) => {
    response.send("This is a PUT request at /edit");
});

app.delete("/delete", (request, response) => {
    response.send("This is a DELETE request at /delete");
});

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`);
    // console.log(data);

});