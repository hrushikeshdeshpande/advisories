const jwt = require('jsonwebtoken');

const data = {
    "API_key": 'ba783c6d68xe5780b738d9a90ed356b7ca4897263d',
    "jwt_secret": jwt.sign({"some": "payload"}, "p5TzKJMLcA9vR2n8", { algorithm: "HS256" }),
    "jwt": "xKihbGciOiJIUzI1NiIsInR5cCI6Ikp.XVCJ8eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNlbWdyZXAiLCJpYXQiOjE1MTYyMzkwMjJ9.XrUzfeoyJOVaq7CXoDlS5PDPqrhWm-SgoJQdxnF7XfY",
    "encoded_jwt": "T8ZImd_b0NsvRJLoA7uZjUTutdtATtNFyb_kku9sFluL49YEYmOnBI6afkEiDzwcgX7chKcCWTgs5a6GWNMBvQK7cnZDgQX89xYD6_Qva.9FsESGZpIZIAIBZaQ2GYNqhsE2X6Hd_TGThOMJFGEiYrIwSF9DObWu5tFX8zVKEjzBmDEP4t95GJnC5sa6.yySX8_7-_FTS.2"
};

console.log(data);
