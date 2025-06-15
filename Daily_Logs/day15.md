## Day 15 Summary: API Authentication & Authorization

Today’s lesson covered the fundamentals of API authentication and authorization, focusing on the different ways APIs control access and secure data. Here’s a concise summary of the key concepts and practical steps:

---

### **1. Why Protect APIs?**
- APIs often hold valuable data (like money in a vault).
- Not everyone should have access—protection is needed to prevent unauthorized data access and misuse.

---

### **2. Types of API Authentication & Authorization**

**a. No Authentication**
- Anyone can access the API.
- Example: Public APIs (like the board API) with rate limits to prevent abuse.
- No user identification; just limits based on IP/request count.

**b. Basic Authentication**
- Requires a username and password for access.
- Credentials are sent as a Base64-encoded string in the `Authorization` header.
- Example: Secrets API `/register` endpoint lets you register and then use credentials to access protected routes.
- Tools like Postman or Axios automatically handle encoding and headers for you.

**c. API Key Authorization**
- Use an API key (unique string) as a credential, often passed as a query parameter or header.
- No need to send username/password with every request.
- Example: Google Maps API, or Secrets API’s `/generateApiKey` and `/filter` endpoints.
- Good for usage tracking, limiting, and monetization.

**d. Token (Bearer) Authentication**
- Most secure method; users authenticate once (with username/password), and receive a token (like OAuth).
- The token is used for subsequent requests—no need to send password again.
- Example: OAuth for Google APIs, or Secrets API’s `/getAuthToken` and then using the token to access `/secrets/:id`.

---

### **3. Key Differences**
- **Authentication**: Identifies who you are (login/register).
- **Authorization**: Determines what you can do (are you allowed to use this resource?).
- API keys are mostly for authorization; tokens combine both.

---

### **4. Practical Steps You Practiced**
- Register a user with the API (`POST /register`).
- Use Basic Auth to access protected routes.
- Generate and use an API key to access filtered data.
- Obtain and use a bearer token for token-based endpoints.
- Implement all these in code using Axios and test with Postman.

---

### **5. Coding Exercise**
- You edited `solution.js` to use your credentials, API key, and bearer token.
- Used Axios to make various authenticated requests (no auth, basic, API key, bearer token).
- Understood how to structure requests, pass credentials, and handle responses in code.

---

### **Conclusion**
Today’s practice gave you hands-on experience with:
- Differentiating between authentication and authorization.
- Using and implementing multiple authentication strategies (none, basic, API key, token).
- Understanding security implications and where each method is appropriate.
- Applying these methods in Postman & JavaScript code.

---