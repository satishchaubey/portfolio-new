'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Mesh, TextureLoader } from 'three'
import type { Texture } from 'three'

interface Article {
  title: string
  summary: string
}

const blogData: Article[] = [
  {
    title: 'Mastering Next.js 14',
    summary: 'Next.js 14 introduces a number of powerful features that improve the developer experience and application performance. In this blog, we explore the key features of Next.js 14, including the new app directory structure, enhanced image optimization, server components, and incremental static regeneration. Whether you are a beginner or a seasoned developer, this guide will walk you through the changes and help you leverage Next.js 14 to build modern web applications.',
  },
  {
    title: 'Why I Switched to Redux Toolkit',
    summary: 'Redux has been a popular choice for state management in React applications, but managing boilerplate code with Redux Thunk can be cumbersome. In this blog, I share my journey of migrating from Redux Thunk to Redux Toolkit, a more efficient and user-friendly alternative. Learn about the new API, slices, and how Redux Toolkit simplifies the process of writing Redux logic while maintaining a clean and maintainable codebase.',
  },
  {
    title: 'Animations with Framer Motion',
    summary: 'Framer Motion is a powerful animation library for React that allows developers to create complex animations with minimal code. In this blog, we explore how to integrate Framer Motion into your React applications, from simple transitions to advanced animations. We cover topics such as animating components on scroll, using gesture-based animations, and optimizing animations for performance to create an engaging user experience.',
  },
  {
    title: 'Getting Started with React Hooks',
    summary: 'React Hooks revolutionized the way developers write functional components by enabling state and side-effect management without the need for class components. This blog will introduce you to the basics of React hooks, such as useState, useEffect, and custom hooks. Learn how to effectively use these hooks to manage state, handle lifecycle events, and build reusable logic that simplifies component design.',
  },
  {
    title: 'Building a REST API with Node.js and Express',
    summary: 'In this blog, we walk through the process of building a RESTful API using Node.js and Express.js. Starting with setting up the project, we cover how to define routes, handle HTTP methods, integrate middleware, and connect to a MongoDB database. We also discuss security best practices such as input validation and authentication, ensuring your API is scalable and secure for production environments.',
  },
  {
    title: 'Optimizing Performance in Next.js',
    summary: 'Next.js provides built-in features for server-side rendering (SSR) and static site generation (SSG), but optimizing performance in Next.js applications requires additional considerations. In this blog, we discuss strategies for improving performance, including lazy loading, code splitting, image optimization, and caching techniques. Learn how to take full advantage of Next.js’s features to build lightning-fast applications that deliver an excellent user experience.',
  },
  {
    title: 'Introduction to MongoDB with Node.js',
    summary: 'MongoDB is a NoSQL database that pairs perfectly with Node.js for building scalable applications. This blog covers the essentials of integrating MongoDB with Node.js, including setting up the MongoDB server, performing CRUD operations, and connecting to MongoDB with Mongoose. We also explore best practices for database design, data validation, and error handling, making it easy for you to build robust backends for your applications.',
  },
  {
    title: 'Continuous Integration with Jenkins',
    summary: 'Continuous integration (CI) is an essential part of modern development workflows, and Jenkins is one of the most popular tools for automating the build and deployment process. In this blog, we explore how to set up Jenkins for your Node.js or React projects, automate your testing pipeline, and deploy applications with ease. Learn about Jenkins pipelines, plugins, and how to integrate with version control systems to streamline your development process.',
  },
  {
    title: 'SQL vs NoSQL: Which Database to Choose?',
    summary: 'Choosing between SQL and NoSQL databases can be challenging, especially when deciding which one fits your project requirements. In this blog, we break down the fundamental differences between SQL (relational) and NoSQL (non-relational) databases, including use cases, scalability, and performance considerations. Learn when to choose a relational database like PostgreSQL or MySQL, and when to opt for a NoSQL database like MongoDB or Firebase.',
  },
  {
    title: 'Working with Google Cloud Platform (GCP) in Node.js',
    summary: 'Google Cloud Platform (GCP) provides a comprehensive suite of tools and services to deploy and scale your applications. In this blog, we cover how to integrate GCP with your Node.js applications, from deploying on App Engine to using Firestore for real-time data storage. We’ll also explore how to use GCP’s Pub/Sub for event-driven architectures and take advantage of cloud functions for serverless computing.',
  },
  {
    title: 'Server-Side Rendering (SSR) in Next.js',
    summary: 'Server-Side Rendering (SSR) is a powerful feature in Next.js that allows you to render pages on the server before sending them to the browser. This improves performance and SEO by ensuring that content is delivered to users quickly. In this blog, we’ll explore how SSR works in Next.js, how to implement it in your applications, and the trade-offs compared to Static Site Generation (SSG) and Client-Side Rendering (CSR).',
  },
  {
    title: 'Deploying a Node.js App on Google Cloud',
    summary: 'Deploying applications to the cloud can be a daunting task, but Google Cloud Platform (GCP) makes it easier with tools like Google Kubernetes Engine (GKE) and App Engine. In this blog, we guide you through the process of deploying a Node.js application on GCP, from setting up your project in Google Cloud Console to scaling and managing the application in a production environment.',
  },
  {
    title: 'Handling Authentication in Express.js',
    summary: 'Authentication is a critical aspect of web application security. In this blog, we walk through how to implement authentication in Express.js using JWT (JSON Web Tokens). Learn how to set up authentication middleware, protect routes, and manage user sessions. We’ll also explore how to implement role-based access control (RBAC) and enhance security by using secure HTTP headers and HTTPS.',
  },
  {
    title: 'Building Real-time Applications with Node.js and WebSockets',
    summary: 'WebSockets enable real-time communication between the client and the server, making them perfect for building chat applications, notifications, or collaborative tools. In this blog, we show you how to set up WebSockets with Node.js and Socket.io. Learn how to handle real-time events, manage client connections, and broadcast updates to all connected clients in real time.',
  },
  {
    title: 'The Power of TypeScript in React.js',
    summary: 'TypeScript adds static typing to JavaScript, helping developers catch bugs early and write more maintainable code. In this blog, we explore how TypeScript can be used in React.js applications, from setting up TypeScript with React to defining types for components, props, and state. We’ll also discuss how TypeScript can improve developer productivity, code quality, and scalability.',
  },
  {
    title: 'Using Sequelize with SQL Databases in Node.js',
    summary: 'Sequelize is a promise-based ORM for Node.js that simplifies working with SQL databases like MySQL, PostgreSQL, and SQLite. In this blog, we show you how to use Sequelize to interact with a SQL database in a Node.js application. Learn how to define models, query the database, and handle relationships like one-to-many and many-to-many. We also cover database migrations and seeding for managing your data.',
  },
  {
    title: 'How to Use Environment Variables in Node.js',
    summary: 'Environment variables are essential for managing configuration settings in Node.js applications, especially for sensitive information like API keys or database credentials. In this blog, we explore how to use environment variables securely in Node.js, including how to set them up locally and in production environments. We’ll also cover how to use packages like dotenv to manage configuration files and keep your application settings separate from your codebase.',
  },
  {
    title: 'Introduction to GraphQL in React',
    summary: 'GraphQL is a query language for APIs that allows clients to request only the data they need. In this blog, we introduce GraphQL and show you how to integrate it with React using Apollo Client. Learn how to set up a GraphQL server, query data from the client, and manage local state with Apollo Client. We’ll also compare GraphQL to REST and discuss when to choose one over the other.',
  },
  {
    title: 'Web Development Best Practices for 2025',
    summary: 'As the web continues to evolve, staying up-to-date with the latest best practices is crucial. In this blog, we discuss the top web development practices for 2025, including modern JavaScript features, performance optimization, accessibility, and security. We’ll also highlight the tools and libraries that are shaping the future of web development, from serverless computing to microservices.',
  },
  {
    title: 'Asynchronous Programming in JavaScript',
    summary: 'Asynchronous programming is a key concept in JavaScript that allows you to handle tasks like API calls and file reading without blocking the main thread. In this blog, we dive into asynchronous programming with callbacks, promises, and async/await. Learn how to manage asynchronous tasks efficiently, handle errors, and avoid callback hell to write clean, non-blocking code.',
  },
];


function AnimatedEarth() {
  const meshRef = useRef<Mesh>(null)
  const earthTexture = useLoader(TextureLoader, '/images/images/earth.png') as Texture

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  )
}

const BlogArticles = () => {
  return (
    <section className="relative min-h-screen text-white px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <AnimatedEarth />
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-white">Blog / Articles</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {blogData.map((article, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 shadow-xl"
            >
              <div className='p-4'>
                <h3 className="text-xl font-semibold text-pink-400 mb-2">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default BlogArticles