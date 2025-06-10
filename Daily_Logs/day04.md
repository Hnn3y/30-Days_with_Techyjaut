# 📘 Day 4 – *4th July, 2025*

---

## 📸 Proof of Work
| Screenshot 1 | Screenshot 2 | Screenshot 3 | Screenshot4 |
|--------------|--------------|--------------|-------------|
| ![Image 1](../Images/Screenshot%20(313).png) | ![Image 2](../Images/Screenshot%20(314).png) | ![Image 3](../Images/Screenshot%20(315).png) |  ![Image 1](../Images/Screenshot%20(317).png) |

---

## 🧠 Summary of the Day

### ✅ What I Learned
####  Middleware uisng express 
-  Middleware is program or function that is going to run between the time that the server gets the request and the time that the server sends the request to the client.
- Middleware in Express.js are functions that have access to the request (req), response (res), and the next function in the request-response cycle.

They are used for:

Logging requests,

Parsing request bodies,

Authenticating users,

Handling errors,

Serving static files

#### Structure of middleware:

``` js
Copy 
function myMiddleware(req, res, next) {
  // Do something (e.g. log, auth, edit req/res)
  next(); // Pass control to the next middleware/route
}
```
- Middleware to parse form data (x-www-form-urlencoded) so you can access req.body.
```js
app.use(express.urlencoded({ extended: true }));
```
- Reads the form input values
```js
app.post('/submit', (req, res) => {
  const street = req.body.street;
  const pet = req.body.pet;
  const bandName = `${street} ${pet}`;
  res.send(`<h1>Your Band Name is: ${bandName}</h1>`);
});
```
- Reads the second form input
``` js
app.post('/fullname', (req, res) => {
  const first = req.body.firstname;
  const last = req.body.lastname;
  res.send(`<h2>Your Full Name is: ${first} ${last}</h2>`);
});

```
### ⚠️ Challenges Faced
- Learning about middlewares and testing was different from regular frontend tasks.

- Understanding how middleware works in the request-response cycle took time.

- Faced errors related to missing files when using res.sendFile() or express.static().

- Needed to understand how to structure logic and when to use global vs. route-specific middleware.

- Initially struggled with debugging user role logic and banned user filters. 

---

## 🚀 Key Takeaways
- Learned how to write global middleware for logging, user tracking, and access control.

- Built a role-based access system using custom middleware, enhancing backend security.

- Gained hands-on experience handling file paths, errors, and static file serving in Express.
- Understood how to separate concerns in backend architecture

---

