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

app.get("/", (request, response) => {
    // response.send("This is a GET request at /");
    response.json(data);
});

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