# 📘 Day 6 & 7 – *6th & 7th July, 2025*

---

## 📸 Proof of Work  
| Screenshot 1 | Screenshot 2 | Screenshot 3 | Screenshot 4 |
|--------------|--------------|--------------|--------------|
| ![Image 1]() | ![Image 2]() | ![Image 3]() | ![Image 4]() |

---

## 🧠 Summary of the Day(s)

### ✅ What I learnt

#### 🛠️ Middleware Tutorial Page + Backend (Mini Project)
- Developed a hands-on **HTML tutorial page** using Ai explaining middleware concepts.
- Added `<textarea>` elements for simulating interactive code practice.
- Built an **Express.js server** that:
  - Serves the tutorial page using `res.sendFile`.
  - Prepares for form submission with `express.urlencoded()` middleware.
  - Structures middleware for request logging, security, and headers.

---

### 🧱 Middlewares Written

1. **Request Logger**  
   Logs HTTP method and URL.

2. **isAuthenticated**  
   Blocks requests missing `Authorization` headers.

3. **addTimestampHeader**  
   Adds `X-Request-Time` to the response headers.

---

###  What I Learned

- Middleware chaining is the backbone of scalable backend systems.
- Middlewares function as **guardians**, **filters**, and **enhancers** in the request–response cycle.
- Adopted the habit of structuring code into **logical layers**.
- Learned how to inject dynamic behavior (like timestamps) into headers.
- Better understood `__dirname` and how file serving works under Express.

> “The frontend is a pitch. The backend is the system. Middleware is my protocol for power.”  
> — HENNEiY

---

### ⚠️ Challenges Faced
- Spent a long time reading docs that i forgot to post on X
- Encountered issues with `res.sendFile` pathing — fixed using `path.join(__dirname, ...)`.
- Mixed `app.use()` with `app.get()` during initial middleware chaining.
- Headers were not visible until I corrected the order of response and header-setting.
- Almost over-engineered the project — had to return to basics for clarity.

---

### 🚀 Key Takeaways

- Middleware = backend control flow.
- I now understand Express middleware well enough to write, chain, and organize them.
- Confident working with headers, logs, and route protection.
- Developed the muscle to debug backend logic without visual clues.

---
