# NODE-PARSERAPI

## Steps to run this application

1. Install Node ref: https://nodejs.org/en/download/
2. Get the parser API code  
    a. Download from https://github.com/bharatdanny13/NODE-PARSERAPI/archive/master.zip
       unzip the .zip folder and navigate to NODE-PARSERAPI-master folder.
    b. Clone from https://github.com/bharatdanny13/NODE-PARSERAPI.git
4. Open node console navigate to the project folder and Run below commands
    a. npm install
    b. npm run start

## Postman client for validating the APIS

Download postman client ref: https://www.postman.com/downloads/


## Test Node Parser API - /api/v1/parse

Select POST and type in http://localhost:5000/api/v1/parse
select Headers Content-Type: application/json
select Body- raw
{ 
    "data" : "JOHN0000MICHAEL0009994567"
}

Response Will be 
{
    "firstName": "JOHN0000",
    "lastName": "MICHAEL000",
    "clientId": "999-4567"
}

## Test Node Parser API - /api/v2/parse

Select POST and type in http://localhost:5000/api/v2/parse
select Headers Content-Type: application/json
select Body- raw
{ 
    "data" : "JOHN0000MICHAEL0009994567"
}

Response Will be 
{
    "firstName": "JOHN",
    "lastName": "MICHAEL",
    "clientId": "9994567"
}
