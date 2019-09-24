# Environment

You may create a `.env` file in the root folder and change the following environment variables:

```
MONGODB_ADDRESS - your mongodb server's address
PORT - the port that the node server runs on
```

# Authentication

Authentication is a requirement for all routes except for `/register` and `/login`.

You receive a **JWT** everytime you succesfully `/login` or `/register`.

Simply pass your token in the requests' headers like this: `{ auth: "Bearer (jwt)" }`.

Information stored in the jwt's payload:

```
{
        // Your user id
    userId: String 
    
        // Authorization flags
    canAddComments: Boolean
    canAddUserToProject: Boolean // Can also remove users from projects
    canCreateProjects: Boolean
    canEditProjects: Boolean // Can also delete projects
    canRemoveComments: Boolean
}
```

# Routes

### **POST /auth/register** - Registers a new user

Input
```
{
    username: String,
    password: String
}
```
Output
```
jwt (Bearer authentication token)
```

### **POST /auth/login** - Logs in an existing user

Input
```
{
    username: String,
    password: String
}
```
Output
```
jwt (Bearer authentication token)
```

### **DELETE /user** - deletes your user
### **POST /project** - create a new project
### **PATCH /project** - update an existing project
### **GET /project** - get a list of projects
### **GET /project/:projectId** - get a project's detailed information (if the user is added to the project)
### **DELETE /project/:projectId** - deletes a project

# Upcoming improvements

- Finishing the `Routes`' documentation
- `Deleting` all userToProject `linked data` when a User or a Project is deleted
- `Automated Tests`
- A new microservice for an awesome `Color of the Day` feature :D
- `Docker-compose` integration in the master branch
- Editing the users' own optional data with `GraphQL`

# Possible improvements

- Returning a different http code than 200 when the request is finished OK without doing anything (ie: an user is already added to a specific project)
- Returning 400 instead of 500 when requests do not match Mongoose models
- Authorization rights that are more logically and carefully assigned. They're currently all true except for `canAddComments`, which is only true when your username is longer than 10 characters

# Canceled improvmeents (until further notice)

- Comments for each project