# Day 10 – API Mastery in Backend Development

## Overview
An API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to communicate with each other. It acts as an intermediary, enabling them to work together and share data, even if they are built with different technologies.

---

## Key Concepts Learned
- Communication Bridge: Think of an API as a translator between two people who speak different languages. It provides a common language and set of instructions for software programs to interact.

-Real-World Examples:
- Weather Data: A website can use a weather API (like OpenWeather) to fetch and display current weather information for a specific location without having to collect the data itself.
- Email Services: A website can integrate with an email marketing service's API (like MailChimp) to add new subscribers directly to a mailing list from a signup form.
- IoT Devices: You could create an API for a smart device, like a plant watering system, to trigger actions (e.g., watering the plant) remotely via a command sent over the internet.

API Architectural Styles
There are various ways to design APIs, known as architectural styles. Some common styles mentioned include:

GraphQL
SOAP
gRPC
REST (Representational State Transfer)
For web development, REST is the most popular and widely used style. RESTful APIs use standard HTTP requests (GET, POST, PUT, PATCH, DELETE) to interact with data.

- Practical Demonstration
 How to use an API with a tool called Postman. The example uses the "Where the ISS at?" API to make a GET request to find the real-time latitude and longitude of the International Space Station. This location data is then pasted into Google Maps to pinpoint exactly where the ISS is currently located over the Earth.

 ---

 ### ⚠️ Challenges Faced
- Using an api was different from using a normal get,post commands

---
## 🚀 Key Takeaways
- API Endpoints
An endpoint is a specific URL where an API can be accessed. It represents a particular route on the API provider's server that corresponds to a specific function or set of data.

- Structure: It's the part of the URL that comes after the base address.
Example: In the URL https://www.boredapi.com/api/random, /random is the endpoint used to get a random activity. Another endpoint, /filter, is used for filtering activities.

- Query Parameters
Query parameters are used to customize a request, often for filtering, sorting, or searching. They are key-value pairs added to the end of the URL.

- Structure:
The query string starts with a question mark (?).
Each parameter is a key-value pair, like key=value.
Multiple parameters are separated by an ampersand (&).
Example: To find a social activity for two people, you would make a GET request to https://www.boredapi.com/api/filter?type=social&participants=2.
type=social is the first query parameter.
participants=2 is the second query parameter
---