import express from "express";
import UserParser from "../util/userparser";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "<h2>Welcome to node app assessment</h2>" +
      "<p>This server hosts 2 APIS. Please use any client like postman to send the POST request" +
      "<ul>" +
      "<li><h3>/api/v1/parse</h3> - Request Body { data: “JOHN0000MICHAEL0009994567” } || Response Body { statusCode: 200, data: { firstName: “JOHN0000”, lastName: “MICHAEL000”, clientId: “9994567” } }</li>" +
      "<li><h3>/api/v2/parse</h3> - Request Body { data: “JOHN0000MICHAEL0009994567” } || Response Body { statusCode: 200, data: { firstName: “JOHN”, lastName: “MICHAEL”, clientId: “999-4567” } }</i>" +
      "</ul>" +
      "</p>"
  );
});

router.post("/api/v1/parse", (req, res) => {
  res.status(200).send(UserParser.ParseV1(req.body.data));
});

router.post("/api/v2/parse", (req, res) => {
  res.status(200).send(UserParser.ParseV2(req.body.data));
});

export default router;
