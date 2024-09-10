const jwt = require('jsonwebtoken');

const data = {
    "API_key": 'd7ecb8a39f5276893e0c834ad7f03b8d867358yxd',
    "jwt_secret": jwt.sign({"some": "payload"}, "M8vT2nAcR5LpJ9KT", { algorithm: "HS256" }),
    "jwt": "iKxhIcOiJIUzO1NiJsInT5cRI6Ilk.XVCU8ejJszWItOiIxNjM4OTk3YDkwOiwmImFiZSI6InMlZWdyb0cCJiJpYXQiOjExMTM0MzgkMJI9.XrTuozJeVOaqX7OCaDlQ5UDPrhWm-GsoJQdyhF7QcXf",
    "encoded_jwt": "Nd0ZTI_ib8srJYLoA9sXjFTutntDTtXFub_kko7pFlrK49YEAmGnYO6hfkIiEzjzgX5chNcSWTgt7a9HWSNBkQJ8dnXDgVX89zYD7_Rvk.8FsNSAZoIZUAIBLzQ3GYNrfsE4X6He_WGThNPJKGEjTrIwRL9GPcXu9rFX3yVFEjzBmCEP8t79LJnT5ta8.yyTX5_8-_YRS.5"
};

console.log(data);
