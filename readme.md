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

### **POST /auth/register** - Register a new user
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
### **POST /auth/login** - Log in an existing user account
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
### **DELETE /user** - delete your user
Note: the user id is fetched from your valid jwt
### **POST /project** - create a new project
Input
```
{
    title: String,
    description: String
}
```
Output
```
{
    _id: String (ObjectId)
    creatorUserId: String (ObjectId)
    title: String
    description: String
}
```
### **PATCH /project/:projectId** - update an existing project
Input
```
{
    title: String,
    description: String
}
```
### **GET /project** - get a list of projects
Output
```
[{
    _id: String (ObjectId)
    title: String
}]
```
### **GET /project/:projectId** - get a project's detailed information (if the user is added to the project)
Output
```
{
  _id: String (ObjectId)
  creatorUserId: String (ObjectId)
  title: String
  description: String
}
```

### **DELETE /project/:projectId** - deletes a project
### **GET /userToProject/:projectId** - get the users in a project
Output:
```
[{
    _id: String (ObjectId) // this is the userToProject's id, not the user's
    username: String
}]
```
### **POST /userToProject/:userId/:projectId** - add user to project
### **DELETE /userToProject/:userId/:projectId** - delete user from project

# Added improvements
- Finishing the `Routes`' documentation
- `Automated Tests`
- `Deleting` all userToProject `linked data` when a User or a Project is deleted

# Upcoming improvements

- A new microservice for an awesome `Color of the Day` feature :D
- `Docker-compose` integration in the master branch
- Editing the users' own optional data with `GraphQL`

# Possible improvements

- Returning a different http code than 200 when the request is finished OK without doing anything (ie: an user is already added to a specific project)
- Returning 400 instead of 500 when requests do not match Mongoose models
- Authorization rights that are more logically and carefully assigned. They're currently all true except for `canAddComments`, which is only true when your username is longer than 10 characters
- Testing automatically on a different database altogether

# Canceled improvmeents (until further notice)

- Comments for each project