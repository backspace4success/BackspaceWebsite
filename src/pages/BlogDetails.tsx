import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, MessageSquare } from 'lucide-react';
import { blogPosts } from '../data/blog';

interface BlogDetailsProps {
  postId: number;
  setActivePage: () => void;
}

function BlogDetails({ postId, setActivePage }: BlogDetailsProps) {
  const post = blogPosts.find(post => post.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Blog post not found</h1>
          <button
            onClick={setActivePage}
            className="text-primary hover:text-primary/90 flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={setActivePage}
            className="text-white/80 hover:text-white flex items-center mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </button>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 text-white px-4 py-1 rounded-full text-sm mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-white font-medium">{post.author.name}</p>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <Clock className="h-4 w-4 ml-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-black/80 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  {/* Simulated article content */}
                  <h2 className="text-2xl font-bold text-black mt-8 mb-4">Introduction</h2>
                  <p className="text-black/80 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <h2 className="text-2xl font-bold text-black mt-8 mb-4">Main Concepts</h2>
                  <p className="text-black/80 mb-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2 className="text-2xl font-bold text-black mt-8 mb-4">Practical Examples</h2>
                  <p className="text-black/80 mb-6">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-black/70 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share and Actions */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-black/70 hover:text-primary">
                        <Share2 className="h-5 w-5 mr-2" />
                        Share
                      </button>
                      <button className="flex items-center text-black/70 hover:text-primary">
                        <Bookmark className="h-5 w-5 mr-2" />
                        Save
                      </button>
                    </div>
                    <button className="flex items-center text-black/70 hover:text-primary">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Author Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-4">About the Author</h3>
                <div className="flex items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-medium text-black">{post.author.name}</p>
                    <p className="text-black/70 text-sm mt-1">
                      Technical Writer & Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(p => p.id !== post.id && p.category === post.category)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <div key={relatedPost.id} className="flex items-start">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-20 h-20 rounded object-cover"
                        />
                        <div className="ml-4">
                          <h4 className="font-medium text-black hover:text-primary cursor-pointer">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-black/70 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;