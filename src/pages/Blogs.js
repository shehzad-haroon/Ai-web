import React from 'react';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const blogPosts = [
  { id: 1, title: 'How AI is Changing Customer Service', summary: 'Discover how artificial intelligence is revolutionizing the way businesses handle customer calls and support.', path: '/blog/ai-customer-service' },
  { id: 2, title: '5 Benefits of 24/7 Call Answering', summary: 'Learn why round-the-clock call answering is a game changer for small businesses.', path: '/blog/24-7-call-answering' },
  { id: 3, title: 'Tips for Managing Business Calls Efficiently', summary: 'Simple strategies to ensure you never miss an important call and keep your customers happy.', path: '/blog/manage-business-calls' },
  { id: 4, title: 'Why Bilingual Answering Services Matter', summary: 'Explore the importance of offering support in multiple languages for your business growth.', path: '/blog/bilingual-answering' },
  { id: 5, title: 'The Future of Virtual Receptionists', summary: 'A look at how virtual receptionists are evolving with new technology.', path: '/blog/virtual-receptionists' },
  { id: 6, title: 'How to Choose the Right Answering Service', summary: 'Key factors to consider when selecting an answering service for your business.', path: '/blog/choose-answering-service' },
];

function Blogs() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Blogs</h1>
      <div className="solution-section">
        <ul>
          {blogPosts.map(post => (
            <li key={post.id} style={{marginBottom: '24px'}}>
              <Link to={post.path} style={{fontSize: '1.2rem', fontWeight: 700, color: '#7c3aed'}}>{post.title}</Link>
              <div style={{color: '#6b6b6b', marginTop: '6px'}}>{post.summary}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blogs;
