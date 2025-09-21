 

// import React, { useState, useEffect, useRef } from 'react';
// import { ThumbsUp, ThumbsDown, MoreVertical } from 'lucide-react';

// const Comments = () => {
//   const [newComment, setNewComment] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [replyText, setReplyText] = useState('');
//   const [showDropdown, setShowDropdown] = useState(null);
//   const [visibleComments, setVisibleComments] = useState(5);
//   const dropdownRef = useRef(null);

//   // Initial dummy comments (like your original design)
//   const [comments, setComments] = useState([
//     {
//       id: 1,
//       author: "JAMES",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//       date: "12/06/2020",
//       text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
//       likes: 8,
//       dislikes: 1,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 2,
//       author: "SARAH WILSON",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2e9?w=150&h=150&fit=crop&crop=face",
//       date: "11/06/2020",
//       text: "This movie was absolutely incredible! The cinematography was stunning and the acting was top-notch. Definitely one of my favorites this year.",
//       likes: 15,
//       dislikes: 2,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 3,
//       author: "MICHAEL BROWN",
//       avatar: null,
//       date: "10/06/2020", 
//       text: "I loved the soundtrack and the visual effects were amazing. The story kept me engaged from start to finish.",
//       likes: 12,
//       dislikes: 0,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 4,
//       author: "EMILY DAVIS",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//       date: "09/06/2020",
//       text: "Great movie! The plot twists were unexpected and the character development was really well done.",
//       likes: 20,
//       dislikes: 3,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 5,
//       author: "ALEX JOHNSON",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       date: "08/06/2020",
//       text: "The action sequences were phenomenal and the story was compelling. Highly recommend watching this!",
//       likes: 18,
//       dislikes: 1,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 6,
//       author: "MARIA GARCIA",
//       avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
//       date: "07/06/2020",
//       text: "Beautiful storytelling and excellent performances by all actors. This film touched my heart.",
//       likes: 25,
//       dislikes: 0,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 7,
//       author: "DAVID SMITH",
//       avatar: null,
//       date: "06/06/2020",
//       text: "One of the best films I've seen this year. The director did an amazing job bringing this story to life.",
//       likes: 14,
//       dislikes: 2,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 8,
//       author: "LISA ANDERSON",
//       avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
//       date: "05/06/2020",
//       text: "The cinematography was breathtaking! Every frame looked like a work of art. Definitely a must-watch.",
//       likes: 22,
//       dislikes: 1,
//       userVote: null,
//       replies: []
//     }
//   ]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Handle new comment submission
//   const handleSubmitComment = () => {
//     if (newComment.trim() === '') return;
    
//     const comment = {
//       id: Date.now(),
//       author: "YOU",
//       avatar: null,
//       date: new Date().toLocaleDateString('en-GB'),
//       text: newComment,
//       likes: 0,
//       dislikes: 0,
//       userVote: null,
//       replies: []
//     };
    
//     setComments([comment, ...comments]);
//     setNewComment('');
//   };

//   // Handle like/dislike functionality
//   const handleVote = (commentId, voteType) => {
//     setComments(comments.map(comment => {
//       if (comment.id === commentId) {
//         const newComment = { ...comment };
        
//         // If user is changing their vote or voting for first time
//         if (newComment.userVote !== voteType) {
//           // Remove previous vote if exists
//           if (newComment.userVote === 'like') newComment.likes--;
//           if (newComment.userVote === 'dislike') newComment.dislikes--;
          
//           // Add new vote
//           if (voteType === 'like') newComment.likes++;
//           if (voteType === 'dislike') newComment.dislikes++;
          
//           newComment.userVote = voteType;
//         } else {
//           // User is removing their vote
//           if (voteType === 'like') newComment.likes--;
//           if (voteType === 'dislike') newComment.dislikes--;
//           newComment.userVote = null;
//         }
        
//         return newComment;
//       }
//       return comment;
//     }));
//   };

//   // Handle reply submission
//   const handleSubmitReply = (commentId) => {
//     if (replyText.trim() === '') return;
    
//     const reply = {
//       id: Date.now(),
//       author: "YOU",
//       avatar: null,
//       date: new Date().toLocaleDateString('en-GB'),
//       text: replyText,
//       likes: 0,
//       dislikes: 0,
//       userVote: null
//     };
    
//     setComments(comments.map(comment => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           replies: [...comment.replies, reply]
//         };
//       }
//       return comment;
//     }));
    
//     setReplyText('');
//     setReplyingTo(null);
//   };

//   // Handle delete comment - Fixed function
//   const handleDeleteComment = (commentId) => {
//     setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
//     setShowDropdown(null);
//   };

//   // Load more comments - Fixed function
//   const handleLoadMore = () => {
//     setVisibleComments(prevVisible => Math.min(prevVisible + 5, comments.length));
//   };

//   // Toggle dropdown menu
//   const toggleDropdown = (commentId, event) => {
//     event.stopPropagation();
//     setShowDropdown(showDropdown === commentId ? null : commentId);
//   };

//   return (
//     <div className="relative min-h-screen">
//       {/* Same Multi-layer Background Overlay System */}
//       <div className="absolute inset-0 bg-black/70"></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70"></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
      
//       {/* Content Container with Enhanced Responsiveness */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
        
//         {/* Comments Header */}
//         <div className="mb-8 sm:mb-12">
//           <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-lg">
//             Comments
//           </h2>
//           <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mt-3 rounded-full"></div>
//         </div>
        
//         {/* Comment Input Section */}
//         <div className="mb-8 sm:mb-12">
//           <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
//             <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6 drop-shadow-sm">
//               Share Your Thoughts
//             </h3>
            
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               {/* Avatar Placeholder - Hidden on small mobile */}
//               <div className="hidden sm:block w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border-2 border-white/20 shadow-lg">
//                 <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400/20 to-purple-600/20 flex items-center justify-center">
//                   <span className="text-white text-sm lg:text-base font-medium">U</span>
//                 </div>
//               </div>
              
//               <div className="flex-1 flex flex-col sm:flex-row gap-3">
//                 <input
//                   type="text"
//                   placeholder="Write your comments here..."
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSubmitComment()}
//                   className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 px-4 py-3 sm:py-4 rounded-xl border border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
//                 />
//                 <button
//                   onClick={handleSubmitComment}
//                   className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/30 active:scale-95 whitespace-nowrap"
//                 >
//                   Post Comment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Comments List */}
//         <div className="space-y-6 sm:space-y-8">
//           {comments.slice(0, visibleComments).map((comment) => (
//             <div key={comment.id}>
//               {/* Main Comment */}
//               <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl hover:bg-black/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
//                 <div className="flex gap-3 sm:gap-4">
//                   {/* User Avatar */}
//                   <div className="relative flex-shrink-0">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:border-red-400/30 transition-all duration-300">
//                       {comment.avatar ? (
//                         <img 
//                           src={comment.avatar} 
//                           alt={comment.author} 
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 flex items-center justify-center">
//                           <span className="text-white text-xs sm:text-sm font-medium">
//                             {comment.author?.charAt(0) || 'U'}
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                     {/* Online Status Indicator */}
//                     <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-black/50 shadow-sm"></div>
//                   </div>
                  
//                   <div className="flex-1 min-w-0">
//                     {/* Comment Header */}
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
//                       <span className="text-white font-semibold text-sm sm:text-base drop-shadow-sm truncate">
//                         {comment.author}
//                       </span>
//                       <div className="flex items-center gap-2">
//                         <span className="text-gray-300 text-xs sm:text-sm">
//                           {comment.date}
//                         </span>
//                         {/* Verified Badge */}
//                         <span className="hidden sm:inline-flex items-center px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
//                           ✓ Verified
//                         </span>
//                       </div>
//                     </div>
                    
//                     {/* Comment Text */}
//                     <p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-4 drop-shadow-sm">
//                       {comment.text}
//                     </p>
                    
//                     {/* Comment Actions */}
//                     <div className="flex items-center gap-4 sm:gap-6">
//                       <button 
//                         onClick={() => handleVote(comment.id, 'like')}
//                         className={`flex items-center gap-2 transition-colors duration-200 group/like ${
//                           comment.userVote === 'like' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
//                         }`}
//                       >
//                         <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 group-hover/like:scale-110 transition-transform duration-200" />
//                         <span className="text-xs sm:text-sm font-medium">{comment.likes}</span>
//                       </button>
                      
//                       <button 
//                         onClick={() => handleVote(comment.id, 'dislike')}
//                         className={`flex items-center gap-2 transition-colors duration-200 group/dislike ${
//                           comment.userVote === 'dislike' ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
//                         }`}
//                       >
//                         <ThumbsDown className="h-4 w-4 sm:h-5 sm:w-5 group-hover/dislike:scale-110 transition-transform duration-200" />
//                       </button>
                      
//                       <button 
//                         onClick={() => setReplyingTo(comment.id)}
//                         className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm font-medium transition-colors duration-200 hover:underline"
//                       >
//                         Reply
//                       </button>
                      
//                       {/* More Options */}
//                       <div className="relative ml-auto" ref={dropdownRef}>
//                         <button 
//                           onClick={(e) => toggleDropdown(comment.id, e)}
//                           className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
//                         >
//                           <MoreVertical className="h-4 w-4" />
//                         </button>
                        
//                         {/* Dropdown Menu */}
//                         {showDropdown === comment.id && (
//                           <div className="absolute right-0 top-full mt-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 min-w-[120px]">
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleDeleteComment(comment.id);
//                               }}
//                               className="w-full px-4 py-3 text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-200 text-sm font-medium"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Reply Input */}
//               {replyingTo === comment.id && (
//                 <div className="ml-8 sm:ml-12 lg:ml-16 mt-4">
//                   <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
//                     <div className="flex gap-3">
//                       <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border border-white/20">
//                         <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 rounded-full flex items-center justify-center">
//                           <span className="text-white text-xs font-medium">U</span>
//                         </div>
//                       </div>
//                       <div className="flex-1 flex gap-3">
//                         <input
//                           type="text"
//                           placeholder="Write a reply..."
//                           value={replyText}
//                           onChange={(e) => setReplyText(e.target.value)}
//                           onKeyPress={(e) => e.key === 'Enter' && handleSubmitReply(comment.id)}
//                           className="flex-1 bg-white/10 text-white placeholder-gray-300 px-3 py-2 rounded-lg border border-white/20 focus:border-red-500 focus:outline-none text-sm"
//                         />
//                         <button
//                           onClick={() => handleSubmitReply(comment.id)}
//                           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
//                         >
//                           Reply
//                         </button>
//                         <button
//                           onClick={() => setReplyingTo(null)}
//                           className="text-gray-400 hover:text-white px-3 py-2 text-sm"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Replies */}
//               {comment.replies && comment.replies.length > 0 && (
//                 <div className="ml-8 sm:ml-12 lg:ml-16 mt-4 space-y-4">
//                   {comment.replies.map((reply) => (
//                     <div key={reply.id} className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
//                       <div className="flex gap-3">
//                         <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border border-white/20">
//                           <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 rounded-full flex items-center justify-center">
//                             <span className="text-white text-xs font-medium">{reply.author.charAt(0)}</span>
//                           </div>
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2 mb-2">
//                             <span className="text-white font-medium text-sm">{reply.author}</span>
//                             <span className="text-gray-400 text-xs">{reply.date}</span>
//                           </div>
//                           <p className="text-gray-100 text-sm">{reply.text}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Load More Comments */}
//         {visibleComments < comments.length && (
//           <div className="text-center mt-8 sm:mt-12">
//             <button 
//               onClick={handleLoadMore}
//               className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-red-400/50"
//             >
//               Load More Comments
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Bottom Gradient Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
//     </div>
//   );
// };

// export default Comments;


// import React, { useState, useEffect, useRef } from 'react';
// import { ThumbsUp, ThumbsDown, MoreVertical } from 'lucide-react';

// const Comments = () => {
//   const [newComment, setNewComment] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [replyText, setReplyText] = useState('');
//   const [showDropdown, setShowDropdown] = useState(null);
//   const [visibleComments, setVisibleComments] = useState(5);
//   const dropdownRef = useRef(null);

//   // Initial dummy comments (like your original design)
//   const [comments, setComments] = useState([
//     {
//       id: 1,
//       author: "JAMES",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//       date: "12/06/2020",
//       text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
//       likes: 8,
//       dislikes: 1,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 2,
//       author: "SARAH WILSON",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2e9?w=150&h=150&fit=crop&crop=face",
//       date: "11/06/2020",
//       text: "This movie was absolutely incredible! The cinematography was stunning and the acting was top-notch. Definitely one of my favorites this year.",
//       likes: 15,
//       dislikes: 2,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 3,
//       author: "MICHAEL BROWN",
//       avatar: null,
//       date: "10/06/2020", 
//       text: "I loved the soundtrack and the visual effects were amazing. The story kept me engaged from start to finish.",
//       likes: 12,
//       dislikes: 0,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 4,
//       author: "EMILY DAVIS",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//       date: "09/06/2020",
//       text: "Great movie! The plot twists were unexpected and the character development was really well done.",
//       likes: 20,
//       dislikes: 3,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 5,
//       author: "ALEX JOHNSON",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       date: "08/06/2020",
//       text: "The action sequences were phenomenal and the story was compelling. Highly recommend watching this!",
//       likes: 18,
//       dislikes: 1,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 6,
//       author: "MARIA GARCIA",
//       avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
//       date: "07/06/2020",
//       text: "Beautiful storytelling and excellent performances by all actors. This film touched my heart.",
//       likes: 25,
//       dislikes: 0,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 7,
//       author: "DAVID SMITH",
//       avatar: null,
//       date: "06/06/2020",
//       text: "One of the best films I've seen this year. The director did an amazing job bringing this story to life.",
//       likes: 14,
//       dislikes: 2,
//       userVote: null,
//       replies: []
//     },
//     {
//       id: 8,
//       author: "LISA ANDERSON",
//       avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
//       date: "05/06/2020",
//       text: "The cinematography was breathtaking! Every frame looked like a work of art. Definitely a must-watch.",
//       likes: 22,
//       dislikes: 1,
//       userVote: null,
//       replies: []
//     }
//   ]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Handle new comment submission
//   const handleSubmitComment = () => {
//     if (newComment.trim() === '') return;
    
//     const comment = {
//       id: Date.now(),
//       author: "YOU",
//       avatar: null,
//       date: new Date().toLocaleDateString('en-GB'),
//       text: newComment,
//       likes: 0,
//       dislikes: 0,
//       userVote: null,
//       replies: []
//     };
    
//     setComments([comment, ...comments]);
//     setNewComment('');
//   };

//   // Handle like/dislike functionality
//   const handleVote = (commentId, voteType) => {
//     setComments(comments.map(comment => {
//       if (comment.id === commentId) {
//         const newComment = { ...comment };
        
//         // If user is changing their vote or voting for first time
//         if (newComment.userVote !== voteType) {
//           // Remove previous vote if exists
//           if (newComment.userVote === 'like') newComment.likes--;
//           if (newComment.userVote === 'dislike') newComment.dislikes--;
          
//           // Add new vote
//           if (voteType === 'like') newComment.likes++;
//           if (voteType === 'dislike') newComment.dislikes++;
          
//           newComment.userVote = voteType;
//         } else {
//           // User is removing their vote
//           if (voteType === 'like') newComment.likes--;
//           if (voteType === 'dislike') newComment.dislikes--;
//           newComment.userVote = null;
//         }
        
//         return newComment;
//       }
//       return comment;
//     }));
//   };

//   // Handle reply submission
//   const handleSubmitReply = (commentId) => {
//     if (replyText.trim() === '') return;
    
//     const reply = {
//       id: Date.now(),
//       author: "YOU",
//       avatar: null,
//       date: new Date().toLocaleDateString('en-GB'),
//       text: replyText,
//       likes: 0,
//       dislikes: 0,
//       userVote: null
//     };
    
//     setComments(comments.map(comment => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           replies: [...comment.replies, reply]
//         };
//       }
//       return comment;
//     }));
    
//     setReplyText('');
//     setReplyingTo(null);
//   };

//   // Handle delete comment - Fixed function
//   const handleDeleteComment = (commentId) => {
//     setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
//     setShowDropdown(null);
//   };

//   // Load more comments - Fixed function
//   const handleLoadMore = () => {
//     setVisibleComments(prevVisible => Math.min(prevVisible + 5, comments.length));
//   };

//   // Toggle dropdown menu
//   const toggleDropdown = (commentId, event) => {
//     event.stopPropagation();
//     setShowDropdown(showDropdown === commentId ? null : commentId);
//   };

//   return (
//     <div className="relative min-h-screen">
//       {/* Same Multi-layer Background Overlay System */}
//       <div className="absolute inset-0 bg-black/70"></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70"></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
      
//       {/* Content Container with Enhanced Responsiveness */}
//       <div className="relative z-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 max-w-8xl mx-auto">
        
//         {/* Comments Header - Normal Size with Count */}
//         <div className="mb-6 xs:mb-8 sm:mb-12 md:mb-16">
//           <div className="flex items-center gap-3 xs:gap-4">
//             <h2 className="text-white font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl drop-shadow-lg tracking-wide">
//               Comments
//             </h2>
//             <span className="text-gray-400 font-medium text-sm xs:text-base sm:text-lg">
//               ({comments.length})
//             </span>
//           </div>
//           <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-0.5 xs:h-1 bg-red-600 mt-2 xs:mt-3 rounded-full shadow-lg shadow-red-600/50"></div>
//         </div>
        
//         {/* Comment Input Section */}
//         <div className="mb-6 xs:mb-8 sm:mb-12">
//           <div className="bg-black/40 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
//             <h3 className="text-white text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 drop-shadow-sm">
//               Share Your Thoughts
//             </h3>
            
//             <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4">
//               {/* Avatar Placeholder - Hidden on small mobile */}
//               <div className="hidden sm:block w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border-2 border-white/20 shadow-lg">
//                 <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400/20 to-purple-600/20 flex items-center justify-center">
//                   <span className="text-white text-xs sm:text-sm lg:text-base font-medium">U</span>
//                 </div>
//               </div>
              
//               <div className="flex-1 flex flex-col sm:flex-row gap-2 xs:gap-3">
//                 <input
//                   type="text"
//                   placeholder="Write your comments here..."
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSubmitComment()}
//                   className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 px-3 xs:px-4 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl border border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all duration-300 hover:bg-white/15 text-sm xs:text-base min-h-[44px] touch-manipulation"
//                 />
//                 <button
//                   onClick={handleSubmitComment}
//                   className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-4 xs:px-6 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/30 active:scale-95 whitespace-nowrap text-sm xs:text-base min-h-[44px] touch-manipulation"
//                 >
//                   Post Comment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Comments List */}
//         <div className="space-y-4 xs:space-y-6 sm:space-y-8">
//           {comments.slice(0, visibleComments).map((comment) => (
//             <div key={comment.id}>
//               {/* Main Comment */}
//               <div className="bg-black/30 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 border border-white/10 shadow-xl hover:bg-black/40 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-2xl group">
//                 <div className="flex gap-2 xs:gap-3 sm:gap-4">
//                   {/* User Avatar */}
//                   <div className="relative flex-shrink-0">
//                     <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:border-red-400/30 transition-all duration-300">
//                       {comment.avatar ? (
//                         <img 
//                           src={comment.avatar} 
//                           alt={comment.author} 
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 flex items-center justify-center">
//                           <span className="text-white text-xs xs:text-sm font-medium">
//                             {comment.author?.charAt(0) || 'U'}
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                     {/* Online Status Indicator */}
//                     <div className="absolute -bottom-0.5 xs:-bottom-1 -right-0.5 xs:-right-1 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-black/50 shadow-sm"></div>
//                   </div>
                  
//                   <div className="flex-1 min-w-0">
//                     {/* Comment Header */}
//                     <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 sm:gap-3 mb-2 xs:mb-3">
//                       <span className="text-white font-semibold text-xs xs:text-sm sm:text-base drop-shadow-sm truncate">
//                         {comment.author}
//                       </span>
//                       <div className="flex items-center gap-2">
//                         <span className="text-gray-300 text-xs sm:text-sm">
//                           {comment.date}
//                         </span>
//                         {/* Verified Badge */}
//                         <span className="hidden sm:inline-flex items-center px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
//                           ✓ Verified
//                         </span>
//                       </div>
//                     </div>
                    
//                     {/* Comment Text */}
//                     <p className="text-gray-100 text-xs xs:text-sm sm:text-base leading-relaxed mb-3 xs:mb-4 drop-shadow-sm">
//                       {comment.text}
//                     </p>
                    
//                     {/* Comment Actions */}
//                     <div className="flex items-center gap-3 xs:gap-4 sm:gap-6">
//                       <button 
//                         onClick={() => handleVote(comment.id, 'like')}
//                         className={`flex items-center gap-1.5 xs:gap-2 transition-colors duration-200 group/like min-h-[44px] px-2 py-2 rounded-lg hover:bg-white/5 ${
//                           comment.userVote === 'like' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
//                         }`}
//                       >
//                         <ThumbsUp className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 group-hover/like:scale-110 transition-transform duration-200" />
//                         <span className="text-xs xs:text-sm font-medium">{comment.likes}</span>
//                       </button>
                      
//                       <button 
//                         onClick={() => handleVote(comment.id, 'dislike')}
//                         className={`flex items-center gap-1.5 xs:gap-2 transition-colors duration-200 group/dislike min-h-[44px] px-2 py-2 rounded-lg hover:bg-white/5 ${
//                           comment.userVote === 'dislike' ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
//                         }`}
//                       >
//                         <ThumbsDown className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 group-hover/dislike:scale-110 transition-transform duration-200" />
//                       </button>
                      
//                       <button 
//                         onClick={() => setReplyingTo(comment.id)}
//                         className="text-gray-400 hover:text-blue-400 text-xs xs:text-sm font-medium transition-colors duration-200 hover:underline min-h-[44px] px-2 py-2 rounded-lg hover:bg-white/5"
//                       >
//                         Reply
//                       </button>
                      
//                       {/* More Options */}
//                       <div className="relative ml-auto" ref={dropdownRef}>
//                         <button 
//                           onClick={(e) => toggleDropdown(comment.id, e)}
//                           className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
//                         >
//                           <MoreVertical className="h-3.5 w-3.5 xs:h-4 xs:w-4" />
//                         </button>
                        
//                         {/* Dropdown Menu */}
//                         {showDropdown === comment.id && (
//                           <div className="absolute right-0 top-full mt-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 min-w-[120px]">
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleDeleteComment(comment.id);
//                               }}
//                               className="w-full px-4 py-3 text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-200 text-sm font-medium min-h-[44px] touch-manipulation"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Reply Input */}
//               {replyingTo === comment.id && (
//                 <div className="ml-6 xs:ml-8 sm:ml-12 lg:ml-16 mt-3 xs:mt-4">
//                   <div className="bg-black/20 backdrop-blur-sm rounded-lg xs:rounded-xl p-3 xs:p-4 border border-white/10">
//                     <div className="flex gap-2 xs:gap-3">
//                       <div className="w-6 h-6 xs:w-8 xs:h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border border-white/20">
//                         <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 rounded-full flex items-center justify-center">
//                           <span className="text-white text-xs font-medium">U</span>
//                         </div>
//                       </div>
//                       <div className="flex-1 flex flex-col xs:flex-row gap-2 xs:gap-3">
//                         <input
//                           type="text"
//                           placeholder="Write a reply..."
//                           value={replyText}
//                           onChange={(e) => setReplyText(e.target.value)}
//                           onKeyPress={(e) => e.key === 'Enter' && handleSubmitReply(comment.id)}
//                           className="flex-1 bg-white/10 text-white placeholder-gray-300 px-3 py-2 rounded-lg border border-white/20 focus:border-red-500 focus:outline-none text-xs xs:text-sm min-h-[44px] touch-manipulation"
//                         />
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => handleSubmitReply(comment.id)}
//                             className="bg-red-600 hover:bg-red-700 text-white px-3 xs:px-4 py-2 rounded-lg text-xs xs:text-sm transition-colors duration-200 whitespace-nowrap min-h-[44px] touch-manipulation"
//                           >
//                             Reply
//                           </button>
//                           <button
//                             onClick={() => setReplyingTo(null)}
//                             className="text-gray-400 hover:text-white px-3 py-2 text-xs xs:text-sm min-h-[44px] touch-manipulation"
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Replies */}
//               {comment.replies && comment.replies.length > 0 && (
//                 <div className="ml-6 xs:ml-8 sm:ml-12 lg:ml-16 mt-3 xs:mt-4 space-y-3 xs:space-y-4">
//                   {comment.replies.map((reply) => (
//                     <div key={reply.id} className="bg-black/20 backdrop-blur-sm rounded-lg xs:rounded-xl p-3 xs:p-4 border border-white/10">
//                       <div className="flex gap-2 xs:gap-3">
//                         <div className="w-6 h-6 xs:w-8 xs:h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border border-white/20">
//                           <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 rounded-full flex items-center justify-center">
//                             <span className="text-white text-xs font-medium">{reply.author.charAt(0)}</span>
//                           </div>
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2 mb-2">
//                             <span className="text-white font-medium text-xs xs:text-sm">{reply.author}</span>
//                             <span className="text-gray-400 text-xs">{reply.date}</span>
//                           </div>
//                           <p className="text-gray-100 text-xs xs:text-sm">{reply.text}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Load More Comments */}
//         {visibleComments < comments.length && (
//           <div className="text-center mt-6 xs:mt-8 sm:mt-12">
//             <button 
//               onClick={handleLoadMore}
//               className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-lg xs:rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-red-400/50 text-sm xs:text-base min-h-[44px] touch-manipulation"
//             >
//               Load More Comments
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Bottom Gradient Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 xs:h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
      
//       {/* Professional Responsive Styles */}
//       <style jsx>{`
//         /* Ultra Small Devices (below 360px) */
//         @media (max-width: 359px) {
//           .comment-text {
//             font-size: 0.75rem;
//             line-height: 1.4;
//           }
//         }

//         /* Small Mobile Portrait (360px - 479px) */
//         @media (min-width: 360px) and (max-width: 479px) {
//           .comment-container {
//             padding: 0.75rem;
//           }
//         }

//         /* Mobile Landscape (480px - 639px) */
//         @media (min-width: 480px) and (max-width: 639px) {
//           .comments-section {
//             padding: 1rem 1.5rem;
//           }
//         }

//         /* Small Tablet Portrait (640px - 767px) */
//         @media (min-width: 640px) and (max-width: 767px) {
//           .comment-card {
//             padding: 1.25rem;
//           }
//         }

//         /* Tablet Portrait (768px - 1023px) */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           .comment-section {
//             padding: 2rem 1.5rem;
//           }
//         }

//         /* Tablet Landscape (1024px - 1279px) */
//         @media (min-width: 1024px) and (max-width: 1279px) {
//           .comment-container {
//             max-width: 1024px;
//             margin: 0 auto;
//           }
//         }

//         /* Small Desktop (1280px - 1535px) */
//         @media (min-width: 1280px) and (max-width: 1535px) {
//           .comment-section {
//             padding: 3rem 2rem;
//           }
//         }

//         /* Large Desktop (1536px+) */
//         @media (min-width: 1536px) {
//           .comment-container {
//             max-width: 1536px;
//           }
//         }

//         /* Touch Device Optimizations */
//         @media (hover: none) and (pointer: coarse) {
//           .touch-target {
//             min-height: 44px;
//             min-width: 44px;
//           }
          
//           .comment-card:active {
//             transform: scale(0.98);
//             transition: transform 0.1s ease;
//           }
//         }

//         /* Reduced Motion Support */
//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }

//         /* High DPI Displays */
//         @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//           .comment-avatar img {
//             image-rendering: -webkit-optimize-contrast;
//             image-rendering: crisp-edges;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Comments;


import React, { useState, useEffect, useRef } from 'react';
import { ThumbsUp, ThumbsDown, MoreVertical } from 'lucide-react';

const Comments= () => {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [showDropdown, setShowDropdown] = useState(null);
  const [visibleComments, setVisibleComments] = useState(5);
  const dropdownRef = useRef(null);

  // Initial dummy comments (like your original design)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "JAMES",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "12/06/2020",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      likes: 8,
      dislikes: 1,
      userVote: null,
      replies: []
    },
    {
      id: 2,
      author: "SARAH WILSON",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2e9?w=150&h=150&fit=crop&crop=face",
      date: "11/06/2020",
      text: "This movie was absolutely incredible! The cinematography was stunning and the acting was top-notch. Definitely one of my favorites this year.",
      likes: 15,
      dislikes: 2,
      userVote: null,
      replies: []
    },
    {
      id: 3,
      author: "MICHAEL BROWN",
      avatar: null,
      date: "10/06/2020", 
      text: "I loved the soundtrack and the visual effects were amazing. The story kept me engaged from start to finish.",
      likes: 12,
      dislikes: 0,
      userVote: null,
      replies: []
    },
    {
      id: 4,
      author: "EMILY DAVIS",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "09/06/2020",
      text: "Great movie! The plot twists were unexpected and the character development was really well done.",
      likes: 20,
      dislikes: 3,
      userVote: null,
      replies: []
    },
    {
      id: 5,
      author: "ALEX JOHNSON",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "08/06/2020",
      text: "The action sequences were phenomenal and the story was compelling. Highly recommend watching this!",
      likes: 18,
      dislikes: 1,
      userVote: null,
      replies: []
    },
    {
      id: 6,
      author: "MARIA GARCIA",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      date: "07/06/2020",
      text: "Beautiful storytelling and excellent performances by all actors. This film touched my heart.",
      likes: 25,
      dislikes: 0,
      userVote: null,
      replies: []
    },
    {
      id: 7,
      author: "DAVID SMITH",
      avatar: null,
      date: "06/06/2020",
      text: "One of the best films I've seen this year. The director did an amazing job bringing this story to life.",
      likes: 14,
      dislikes: 2,
      userVote: null,
      replies: []
    },
    {
      id: 8,
      author: "LISA ANDERSON",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      date: "05/06/2020",
      text: "The cinematography was breathtaking! Every frame looked like a work of art. Definitely a must-watch.",
      likes: 22,
      dislikes: 1,
      userVote: null,
      replies: []
    },
    {
      id: 9,
      author: "JOHN DOE",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "04/06/2020",
      text: "Amazing soundtrack and incredible visual effects. This movie kept me on the edge of my seat!",
      likes: 16,
      dislikes: 0,
      userVote: null,
      replies: []
    },
    {
      id: 10,
      author: "RACHEL GREEN",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "03/06/2020",
      text: "One of the best movies I've watched this year. The storyline was captivating and the acting was superb!",
      likes: 19,
      dislikes: 1,
      userVote: null,
      replies: []
    }
  ]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle new comment submission
  const handleSubmitComment = () => {
    if (newComment.trim() === '') return;
    
    const comment = {
      id: Date.now(),
      author: "YOU",
      avatar: null,
      date: new Date().toLocaleDateString('en-GB'),
      text: newComment,
      likes: 0,
      dislikes: 0,
      userVote: null,
      replies: []
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  // Handle like/dislike functionality
  const handleVote = (commentId, voteType) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        const newComment = { ...comment };
        
        // If user is changing their vote or voting for first time
        if (newComment.userVote !== voteType) {
          // Remove previous vote if exists
          if (newComment.userVote === 'like') newComment.likes--;
          if (newComment.userVote === 'dislike') newComment.dislikes--;
          
          // Add new vote
          if (voteType === 'like') newComment.likes++;
          if (voteType === 'dislike') newComment.dislikes++;
          
          newComment.userVote = voteType;
        } else {
          // User is removing their vote
          if (voteType === 'like') newComment.likes--;
          if (voteType === 'dislike') newComment.dislikes--;
          newComment.userVote = null;
        }
        
        return newComment;
      }
      return comment;
    }));
  };

  // Handle reply submission
  const handleSubmitReply = (commentId) => {
    if (replyText.trim() === '') return;
    
    const reply = {
      id: Date.now(),
      author: "YOU",
      avatar: null,
      date: new Date().toLocaleDateString('en-GB'),
      text: replyText,
      likes: 0,
      dislikes: 0,
      userVote: null
    };
    
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply]
        };
      }
      return comment;
    }));
    
    setReplyText('');
    setReplyingTo(null);
  };

  // Handle delete comment - FIXED
  const handleDeleteComment = (commentId) => {
    setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
    setShowDropdown(null);
  };

  // Load more comments - FIXED
  const handleLoadMore = () => {
    setVisibleComments(prevVisible => Math.min(prevVisible + 5, comments.length));
  };

  // Toggle dropdown menu - FIXED
  const toggleDropdown = (commentId, event) => {
    event.stopPropagation();
    setShowDropdown(showDropdown === commentId ? null : commentId);
  };

  return (
    <div className="relative min-h-screen">
      {/* Same Multi-layer Background Overlay System */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
      
      {/* Content Container with Enhanced Responsiveness */}
      <div className="relative z-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
        
        {/* Comments Header - Normal Size with Count */}
        <div className="mb-6 xs:mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 xs:gap-4">
            <h2 className="text-white font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl drop-shadow-lg tracking-wide">
              Comments
            </h2>
            <span className="text-gray-400 font-medium text-sm xs:text-base sm:text-lg">
              ({comments.length})
            </span>
          </div>
          <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-0.5 xs:h-1 bg-red-600 mt-2 xs:mt-3 rounded-full shadow-lg shadow-red-600/50"></div>
        </div>
        
        {/* Comment Input Section */}
        <div className="mb-6 xs:mb-8 sm:mb-12">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
            <h3 className="text-white text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 drop-shadow-sm">
              Share Your Thoughts
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4">
              {/* Avatar Placeholder - Hidden on small mobile */}
              <div className="hidden sm:block w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border-2 border-white/20 shadow-lg">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm lg:text-base font-medium">U</span>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col sm:flex-row gap-2 xs:gap-3">
                <input
                  type="text"
                  placeholder="Write your comments here..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmitComment()}
                  className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 px-3 xs:px-4 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl border border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all duration-300 hover:bg-white/15 text-sm xs:text-base min-h-[44px] touch-manipulation"
                />
                <button
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim()}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold px-4 xs:px-6 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 hover:brightness-110 active:scale-95 disabled:hover:scale-100 disabled:hover:brightness-100 whitespace-nowrap text-sm xs:text-base min-h-[44px] touch-manipulation relative overflow-hidden group"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:tracking-wide">Post Comment</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-4 xs:space-y-6 sm:space-y-8">
          {comments.slice(0, visibleComments).map((comment) => (
            <div key={comment.id}>
              {/* Main Comment */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 border border-white/10 shadow-xl hover:bg-black/40 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-2xl group">
                <div className="flex gap-2 xs:gap-3 sm:gap-4">
                  {/* User Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:border-red-400/30 transition-all duration-300">
                      {comment.avatar ? (
                        <img 
                          src={comment.avatar} 
                          alt={comment.author} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 flex items-center justify-center">
                          <span className="text-white text-xs xs:text-sm font-medium">
                            {comment.author?.charAt(0) || 'U'}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Online Status Indicator */}
                    <div className="absolute -bottom-0.5 xs:-bottom-1 -right-0.5 xs:-right-1 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-black/50 shadow-sm"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Comment Header */}
                    <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 sm:gap-3 mb-2 xs:mb-3">
                      <span className="text-white font-semibold text-xs xs:text-sm sm:text-base drop-shadow-sm truncate">
                        {comment.author}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300 text-xs sm:text-sm">
                          {comment.date}
                        </span>
                        {/* Verified Badge */}
                        <span className="hidden sm:inline-flex items-center px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          ✓ Verified
                        </span>
                      </div>
                    </div>
                    
                    {/* Comment Text */}
                    <p className="text-gray-100 text-xs xs:text-sm sm:text-base leading-relaxed mb-3 xs:mb-4 drop-shadow-sm">
                      {comment.text}
                    </p>
                    
                    {/* Comment Actions */}
                    <div className="flex items-center gap-3 xs:gap-4 sm:gap-6">
                      <button 
                        onClick={() => handleVote(comment.id, 'like')}
                        className={`flex items-center gap-1.5 xs:gap-2 transition-all duration-200 group/like min-h-[44px] px-2 py-2 rounded-lg hover:bg-white/5 ${
                          comment.userVote === 'like' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                        }`}
                      >
                        <ThumbsUp className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 group-hover/like:scale-110 transition-transform duration-200" />
                        <span className="text-xs xs:text-sm font-medium">{comment.likes}</span>
                      </button>
                      
                      <button 
                        onClick={() => handleVote(comment.id, 'dislike')}
                        className={`flex items-center gap-1.5 xs:gap-2 transition-all duration-200 group/dislike min-h-[44px] px-2 py-2 rounded-lg hover:bg-white/5 ${
                          comment.userVote === 'dislike' ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                        }`}
                      >
                        <ThumbsDown className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 group-hover/dislike:scale-110 transition-transform duration-200" />
                        {comment.dislikes > 0 && <span className="text-xs xs:text-sm font-medium">{comment.dislikes}</span>}
                      </button>
                      
                      <button 
                        onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                        className="text-gray-400 hover:text-blue-400 text-xs xs:text-sm font-medium transition-colors duration-200 hover:underline min-h-[44px] px-2 py-2 rounded-lg hover:bg-white/5"
                      >
                        Reply
                      </button>
                      
                      {/* More Options - FIXED DROPDOWN POSITIONING */}
                      <div className="relative ml-auto">
                        <button 
                          onClick={(e) => toggleDropdown(comment.id, e)}
                          className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                          <MoreVertical className="h-3.5 w-3.5 xs:h-4 xs:w-4" />
                        </button>
                        
                        {/* Dropdown Menu - FIXED Z-INDEX TO SHOW ON TOP */}
                        {showDropdown === comment.id && (
                          <>
                            {/* Backdrop */}
                            <div 
                              className="fixed inset-0 z-[9998]" 
                              onClick={() => setShowDropdown(null)}
                            />
                            
                            {/* Dropdown */}
                            <div 
                              ref={dropdownRef}
                              className="relative right-0 top-full mt-2 bg-black/95 backdrop-blur-md border border-white/30 rounded-lg shadow-2xl z-[9999] min-w-[140px] overflow-hidden"
                            >
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteComment(comment.id);
                                }}
                                className="w-full px-4 py-3 text-left text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-all duration-200 text-sm font-medium min-h-[48px] touch-manipulation flex items-center gap-2 border-b border-white/10"
                              >
                                <span>🗑️</span>
                                Delete
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowDropdown(null);
                                  // Add edit functionality here if needed
                                }}
                                className="w-full px-4 py-3 text-left text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 transition-all duration-200 text-sm font-medium min-h-[48px] touch-manipulation flex items-center gap-2"
                              >
                                <span>✏️</span>
                                Edit
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reply Input */}
              {replyingTo === comment.id && (
                <div className="ml-6 xs:ml-8 sm:ml-12 lg:ml-16 mt-3 xs:mt-4">
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg xs:rounded-xl p-3 xs:p-4 border border-white/10">
                    <div className="flex gap-2 xs:gap-3">
                      <div className="w-6 h-6 xs:w-8 xs:h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border border-white/20">
                        <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">U</span>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col xs:flex-row gap-2 xs:gap-3">
                        <input
                          type="text"
                          placeholder="Write a reply..."
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSubmitReply(comment.id)}
                          className="flex-1 bg-white/10 text-white placeholder-gray-300 px-3 py-2 rounded-lg border border-white/20 focus:border-red-500 focus:outline-none text-xs xs:text-sm min-h-[44px] touch-manipulation"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSubmitReply(comment.id)}
                            disabled={!replyText.trim()}
                            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-3 xs:px-4 py-2 rounded-lg text-xs xs:text-sm transition-colors duration-200 whitespace-nowrap min-h-[44px] touch-manipulation"
                          >
                            Reply
                          </button>
                          <button
                            onClick={() => setReplyingTo(null)}
                            className="text-gray-400 hover:text-white px-3 py-2 text-xs xs:text-sm min-h-[44px] touch-manipulation rounded-lg hover:bg-white/5"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-6 xs:ml-8 sm:ml-12 lg:ml-16 mt-3 xs:mt-4 space-y-3 xs:space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="bg-black/20 backdrop-blur-sm rounded-lg xs:rounded-xl p-3 xs:p-4 border border-white/10">
                      <div className="flex gap-2 xs:gap-3">
                        <div className="w-6 h-6 xs:w-8 xs:h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border border-white/20">
                          <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-medium">{reply.author.charAt(0)}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-medium text-xs xs:text-sm">{reply.author}</span>
                            <span className="text-gray-400 text-xs">{reply.date}</span>
                          </div>
                          <p className="text-gray-100 text-xs xs:text-sm leading-relaxed">{reply.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Comments - RESTORED */}
        {visibleComments < comments.length && (
          <div className="text-center mt-6 xs:mt-8 sm:mt-12">
            <button 
              onClick={handleLoadMore}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-lg xs:rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-red-400/50 text-sm xs:text-base min-h-[44px] touch-manipulation shadow-lg hover:shadow-xl"
            >
              Load More Comments ({comments.length - visibleComments} more)
            </button>
          </div>
        )}

        {/* All Comments Loaded Message */}
        {visibleComments >= comments.length && comments.length > 5 && (
          <div className="text-center mt-6 xs:mt-8 sm:mt-12">
            <p className="text-gray-400 text-sm xs:text-base">
              All comments loaded ({comments.length} total)
            </p>
          </div>
        )}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 xs:h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Comments;