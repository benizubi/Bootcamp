// Intro To AJAX //
// AJAX stands for Asynchronous Javascript and xml
// Making request and the  system interacting behind the scene, so when you click or perform an action, there's a ajax request behind being made to the network server sending back the information needed.

// intro to APIS//
//  Application Programming Interface, allows interactions between softwares, from one software to another and nothing to do with web,

//  web API are web based, they expose certain end points, by highlighting the only info needed and act as a accessing portal to things such as web datasets, and more..
// web APIS allows data to be in a json format
// there are many different type of APIs you gotta find the one that much the project u working on like weather api would be diff than the rest
// API basically just allows us to request or see the data or allow us to create API to auto comment on ig comments or different stuff

const data = { "firstName": "John", "lastName": "Doe" }
                                // JSON // Java Script Object Notation
// JSON is often used when data is sent from a server to a web page
// it's just a format for sending information from one system to another sending requests.
// when u request information, what u get back in return is a giant string of data known as Json  
// when we recieve from a request, the data gets send into a json string and we have to transform it from a Json string into an javascript Object we can manipulate
// JSON.parse() allow us to transform the pull request data into a readable type

// JSON.stringify() allows us to send data as we cant send data as a javascript object so we use this to transform the data first before sending requests 


                                        // Using PostMan//


// Using Query Strings and Headers.
                                    // Query strings //
// are just information we can provide to any url and is usually going to impact what the info we get back as a json information.
// URL: this is the search api for this tv show website api,  /singlesearch/shows?q=:query    
// the query string is the '?q=:query' from the question mark to the end 
// ?q= is what you will need to focus on something so for the search one it will be like '?q=food so the food is going to look for food 
                                     // headers//
// Headers is basically the content type so for eg. content-type =  application/json 
// The header key = Accept  and the value = application/json         
// So content type is the header
// and also the header refer to the first starting part of a url link

