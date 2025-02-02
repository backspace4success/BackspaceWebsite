import React, { useState } from 'react';
import { Search, Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts, categories } from '../data/blog';

interface BlogProps {
  onViewPost: (postId: number) => void;
}

function Blog({ onViewPost }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay updated with the latest insights, tutorials, and news from the world of programming
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold text-black mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-md transition ${
                      selectedCategory === category.name
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="float-right">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-black">{post.author.name}</p>
                        <div className="flex items-center text-sm text-black/60">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                          <Clock className="h-4 w-4 ml-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-block bg-accent/10 text-primary text-sm px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-black mb-2">{post.title}</h2>
                    <p className="text-black/70 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-black/70 text-sm px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => onViewPost(post.id)}
                      className="text-primary font-medium hover:text-primary/90 transition flex items-center"
                    >
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;