module.exports = {  
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "Write Document", // short title.
      description: "Write document for CRUD API", //  desc.
      version: "1.0.0", // version number
    },   
    
    components: {
        schemas: {
          // id model
          id: {
            type: "string", // data type
            description: "ID for each user", // desc
            example: "627c83e2c891d87a58f84216", // example of an id
          },
          // todo model
          User: {
            type: "object", // data type
            properties: {
              id: {
                type: "string", // data-type
                description: "Id", // desc
                required: true,
                example: "627c83e2c891d87a58f84216", // example of an id
              },
              name: {
                type: "string", // data-type
                description: "Username", // desc
                required: true,
                example: "Nguyen Truong Khang", // example of an id
              },
              email: {
                type: "string", // data-type
                description: "email user", // desc
                required: true,
                example: "Khang@gmail.com", // example of a title
              },
              gender: {
                type: "string", // data type
                description: "user gender", // desc
                example: "Male or Female", // example of a completed value
              },
              status: {
                  type: "string", // data type
                  description: "status", // desc
                  example: "Active or Inactive", // example of a completed value
                },
            },
          },
          // Todo input model
          UserInput: {
            type: "object", // data type
            properties: {
              name: {
                  type: "string", // data-type
                  description: "Take name", // desc
                  required: true,
                  example: "", // example of an id
                },
                email: {
                  type: "string", // data-type
                  description: "Take email", // desc
                  required: true,
                  example: "", // example of a title
                },
                gender: {
                  type: "string", // data type
                  description: "Male or Female", // desc
                  example: "", // example of a completed value
                },
                status: {
                    type: "string", // data type
                    description: "Active or Inactive", // desc
                    example: "", // example of a completed value
                  },
            },
          },
          Delete: {
              type: "string", // data type
              description: "delete user by ID ", // desc
              example: "choose ID to delete", // example of an id
            },
  
          },
      },
      paths:{
        '/api/users':{
          get: {
            description: "Show all users in database", // operation's desc.
           
            // expected responses
            responses: {
              // response code
              200: {
                description: "Data inserted Successfully", // response desc.
                content: {
                  // content-type
                  "api/user": {
                    schema: {
                      $ref: "#components/schemas/User", // Todo model
                    },
                  },
                },
              },
            },
          },  
          post: {
            description: "Create New Account", // short desc
            parameters: [], // expected params
            requestBody: {
              // expected request body
              content: {
                // content-type
                "/api/users": {
                  schema: {
                    $ref: "#/components/schemas/UserInput", // todo input data model
                  },
                },
              },
            },
            // expected responses
            responses: {
              // response code
              200: {
                description: "Todo created successfully", // response desc
              },
              // response code
              500: {
                description: "Server error", // response desc
              },
            },
          },  
        },


        '/api/users/{id}':{
          get: {          
            description: "Get ID user", // operation's desc.
           
            parameters: [
              // expected params.
              {
                name: "id", // name of the param
                in: "query", // location of the param
                schema: {
                  $ref: "#/components/schemas/id", // data model of the param
                },
                required: true, // Mandatory param
                description: "A single user id", // param desc.
              },
            ],

            // expected responses
            responses: {
              // response code
              200: {
                description: "User is obtained", // response desc.
                content: {
                  // content-type
                  "/api/users": {
                    schema: {
                      $ref: "#/components/schemas/User", // todo data model
                    },
                  },
                },
              },
              // response code
              500: {
                description: "User is not found", // response desc.
              },
            },
          },

          put: {
            description: "Update User", // short desc
           
            parameters: [
               
              {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                  $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id of User to be updated", // short desc.
              },
            ],
            // expected responses
            responses: {
              // response code
              200: {
                description: "User updated successfully", // response desc.
              },
              // response code
             
              500: {
                description: "Server error", // response desc.
              },
            },
          },

          delete: {
            description: "Deleting a user", // short desc
            
            parameters: [
              
              {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                  $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Deleting a done user", // param desc
              },
            ],
            // expected responses
            responses: {
              // response code
              200: {
                description: "User deleted successfully", // response desc
              },
              // response code
              404: {
                description: "User not found", // response desc
              },
              // response code
              500: {
                description: "Server error", // response desc
              },
            },
          },
        
        }
        
    }
     
}