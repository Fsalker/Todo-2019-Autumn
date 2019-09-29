# Environment

You may create a `.env` file in the root folder and change the following environment variables:

```
MONGODB_PORT - your mongodb server's port (defaults to 27017)
MONGODB_HOST - your mongodb server's host 
PORT - the port that the node server runs on
```

# Authentication

Use the JWT received from back-end-main when you `/login` or `/register` by adding an `auth` request header like this: `{ auth: "Bearer (jwt)" }`.

The information stored in the token can be found in back-end-main's readme.

# Routes

### **GET /colors** - Gets color of the day
Output:
```
{
    colorId: String (ObjectId)
    value: String // hexadecimal 6-digit string containing the color's RGB values
    likes: Number
}
```
### **POST /userToColor/:colorId** - Like a color

# Possible improvements
- Returning 400 instead of 500 when requests do not match Mongoose models
- Testing automatically on a different database altogether