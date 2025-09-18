/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { ThumbsUp, ThumbsDown} from 'lucide-react';

// Comments Section
const Comments = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    // Handle comment submission
    console.log('New comment:', newComment);
    setNewComment('');
  };

  return (
    <div className="px-6 py-8">
      <h2 className="text-white text-xl font-bold mb-6">Comments</h2>
      
      {/* Comment Input */}
      <div className="mb-8">
        <div className="flex gap-4">
      
          <div className="flex-1 flex gap-2">
            <input
              type="text"
              placeholder="Write your comments here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none"
            />
            <button
              onClick={handleSubmitComment}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0 overflow-hidden">
              {comment.avatar && (
                <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-medium">{comment.author}</span>
                <span className="text-gray-400 text-sm">{comment.date}</span>
              </div>
              
              <p className="text-gray-300 text-sm mb-3">{comment.text}</p>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-sm">{comment.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                  <ThumbsDown className="h-4 w-4" />
                </button>
                <button className="text-gray-400 hover:text-white text-sm">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comments