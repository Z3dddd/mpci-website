import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Modular Construction",
      date: "March 15, 2024",
      category: "Industry Trends",
      excerpt: "Explore how modular construction is revolutionizing the building industry with sustainable practices and innovative technologies.",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a0c72c150?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Sustainable Building Practices in 2024",
      date: "March 10, 2024",
      category: "Sustainability",
      excerpt: "Discover the latest sustainable building practices that are shaping the future of construction and environmental responsibility.",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a0c72c150?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Innovations in Prefabricated Construction",
      date: "March 5, 2024",
      category: "Innovation",
      excerpt: "Learn about the latest technological advancements in prefabricated construction methods and materials.",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a0c72c150?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Cost-Effective Building Solutions",
      date: "March 1, 2024",
      category: "Business",
      excerpt: "Analysis of cost-effective building solutions and their impact on project timelines and budgets.",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a0c72c150?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="blog">
      <section className="blog-hero">
        <h1>Our Blog</h1>
        <p>Stay updated with the latest insights in modular construction</p>
      </section>

      <div className="blog-container">
        <div className="blog-filters">
          <h2>Categories</h2>
          <ul>
            <li><a href="#" className="active">All Posts</a></li>
            <li><a href="#">Industry Trends</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Innovation</a></li>
            <li><a href="#">Business</a></li>
          </ul>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <Link to={`/blog/${post.id}`} className="blog-card" key={post.id}>
              <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="blog-pagination">
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">Next →</button>
        </div>
      </div>
    </div>
  );
}

export default Blog; 