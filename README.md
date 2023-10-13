# MERN Stack Full Tutorial & Project

In these notes, I have included code and resources for an all-in-one beginner's course in MERN Stack development that I am currently taking. Throughout the course, which spans 8 hours, I will learn about full-stack development using MongoDB, Express, React, and Node.js.

![MERN logo](img/mern.png)

## Table of Contents

0. **[Intro](#intro)**
1. **[Welcome](#welcome)**
2. **[MERN Stack Project](#mern-stack-project)**
3. **[Middleware](#middleware)**
4. **[MongoDB](#mongodb)**
5. **[Controllers](#controllers)**
6. **[React JS](#react-js)**
7. **[Redux & RTK Query](#redux--rtk-query)**
8. **[React & Redux Forms](#react--redux-forms)**
9. **[Authentication vs Authorization](#authentication-vs-authorization)**
10. **[Login Auth](#login-auth)**
11. **[JWT Auth](#jwt-auth)**
12. **[Roles & Permissions](#roles--permissions)**
13. **[Refactoring](#refactoring)**
14. **[Deployment](#deployment)**

---

## Chapter Descriptions

1. **MERN Stack Project**: This chapter introduces the MERN stack and sets up the initial project structure.
2. **Middleware**: Learn about middleware and how it fits into the Express.js framework.
3. **MongoDB**: Dive into MongoDB and understand how to set up your database.
4. **Controllers**: Learn how to manage the logic for handling requests and responses.
5. **React JS**: Get introduced to React and how it fits into the MERN stack.
6. **Redux & RTK Query**: Understand state management in React using Redux and RTK Query.
7. **React & Redux Forms**: Learn how to handle forms using React and Redux.
8. **Authentication vs Authorization**: Understand the difference between authentication and authorization.
9. **Login Auth**: Implement login authentication in your MERN stack project.
10. **JWT Auth**: Learn how to use JSON Web Tokens for secure authentication.
11. **Roles & Permissions**: Implement role-based permissions in your application.
12. **Refactoring**: Learn best practices for refactoring your code.
13. **Deployment**: A guide on how to deploy your full-stack MERN application.

---

## Saving Space

When working with React on your local machine, keeping all the necessary libraries and dependencies can take up a lot of space. To help manage this, you can uninstall all packages from each chapter by running the `uninstall_packages.sh` script in Bash.

This script will use `npm uninstall` to remove all the packages listed in the `package.json` file for each chapter, freeing up space on your machine. To run the script, navigate to the root directory of the project in your terminal and enter the command:

```markdown
bash uninstall_packages.sh
```

This will execute the `uninstall_packages.sh` script, which will remove all the packages listed in the `package.json` file for each chapter.

If you need to reinstall the packages later, you will need to run `npm install` in each chapter to reinstall the necessary dependencies. For example, to reinstall the packages for Chapter 1, navigate to the Chapter 1 directory in your terminal and enter the commands:

```markdown
cd chapter_1
npm install
```

This will install the necessary dependencies for Chapter 1.

Note that the `uninstall_packages.sh` script will permanently remove the packages for each chapter, so make sure to back up any important files before running the script. Additionally, if you have made any changes to the `package.json` file, make sure to save those changes before running the script to avoid losing any work.

---
### Credits

This course is based on the tutorial by [Dave Gray](https://www.youtube.com/channel/UCY38RvRIxYODO4penyxUwTg). You can watch the full tutorial on [YouTube](https://www.youtube.com/watch?v=CvCiNeLnZ00&t=14921s).

---
