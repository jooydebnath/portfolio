export type TProject = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  githubLink: string;
}

export const projects: TProject[] = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    description: "A modern, responsive personal portfolio built with React and Tailwind CSS to showcase skills and projects.",
    imageUrl: "https://designwithrehana.com/wp-content/uploads/2025/07/Untitled-design-17.jpg",
    githubLink: "https://github.com/yourusername/personal-portfolio"
  },
  {
    id: 2,
    name: "React Admin Dashboard",
    description: "A feature-rich admin dashboard with charts, tables, and user management using React and Material UI.",
    imageUrl: "https://colorlib.com/wp/wp-content/uploads/sites/2/reactjs-dashboard-templates.jpg",
    githubLink: "https://github.com/yourusername/react-admin-dashboard"
  },
  {
    id: 3,
    name: "E-Commerce Store",
    description: "Fully functional online shopping site with cart, payment simulation, and product filtering using React and Fake API.",
    imageUrl: "https://devpractical.com/public/2023/ecommerce-website-projects.jpg",
    githubLink: "https://github.com/yourusername/ecommerce-store"
  },
  {
    id: 4,
    name: "Todo List App",
    description: "A clean and interactive todo application with add, edit, delete, and local storage features built in React.",
    imageUrl: "https://user-images.githubusercontent.com/36126362/213862825-c5c342c6-6ba1-421a-9784-2848368feea4.png",
    githubLink: "https://github.com/yourusername/react-todo-app"
  },
  {
    id: 5,
    name: "Weather Forecast App",
    description: "Real-time weather app that fetches data from OpenWeather API and displays current weather and forecast.",
    imageUrl: "https://www.codingnepalweb.com/wp-content/uploads/2021/08/Build-Weather-App-in-JavaScript.jpg",
    githubLink: "https://github.com/yourusername/weather-app"
  },
  {
    id: 6,
    name: "Real-Time Chat Application",
    description: "A full-stack chat app with real-time messaging using Socket.io, React, and Node.js.",
    imageUrl: "https://camo.githubusercontent.com/1d79699f085ac29d2187998037dd7ba2c0f5571b9f5745e22b88f7a2cbc4e060/68747470733a2f2f692e7974696d672e636f6d2f76692f5a77464133594d666b6f632f6d617872657364656661756c742e6a7067",
    githubLink: "https://github.com/yourusername/chat-application"
  },
  {
    id: 7,
    name: "Blog Platform with Django",
    description: "A full-featured blogging platform built with Django, featuring user authentication, rich text editor (TinyMCE), comments, categories, and admin panel.",
    imageUrl: "https://www.djangoproject.com/s/img/site/diagram-blog.4e107d730d7c.png",
    githubLink: "https://github.com/yourusername/django-blog-platform"
  },
  {
    id: 8,
    name: "Task Management API",
    description: "RESTful API for task management built with Django REST Framework. Includes JWT authentication, CRUD operations, filtering, pagination, and PostgreSQL integration.",
    imageUrl: "https://miro.medium.com/max/1400/1*1X6XwLpqhG6zT3Y9m5zqZQ.png",
    githubLink: "https://github.com/yourusername/django-task-api"
  }
];