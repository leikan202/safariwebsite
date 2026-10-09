import React from 'react';
import { Play } from 'lucide-react';

export default function SocialFeed() {
  // Hiding this section for now, to be added back later
  return null;

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80',
      views: '12.4K views'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80',
      views: '89K views'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?auto=format&fit=crop&w=600&q=80',
      views: '22.1K views'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1569691105751-88df003de7a4?auto=format&fit=crop&w=600&q=80',
      views: '5.2K views'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?auto=format&fit=crop&w=600&q=80',
      views: '31K views'
    }
  ];

  return (
    <section className="social-section" id="social">
      <div className="container">
        <div className="social-header">
          <h2 className="social-headline">On Safari <span style={{ color: 'var(--color-accent)' }}>This Week</span></h2>
          <a href="https://www.instagram.com/safaridirectkenya/" target="_blank" rel="noopener noreferrer" className="social-follow">Follow @safaridirectkenya</a>
        </div>
      </div>

      <div className="social-scroller">
        {posts.map(post => (
          <div className="social-card" key={post.id}>
            <img src={post.image} loading="lazy" alt={`Safari footage ${post.id}`} />
            <div className="social-play">
              <Play size={20} fill="currentColor" />
            </div>
            <div className="social-stats">{post.views}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
