-- Create database likeme
CREATE DATABASE likeme;

-- Create table posts
CREATE TABLE posts (
  id SERIAL,
  usuario VARCHAR(25),  
  url VARCHAR(255),
  descripcion VARCHAR(255),
  likes INT DEFAULT 0);