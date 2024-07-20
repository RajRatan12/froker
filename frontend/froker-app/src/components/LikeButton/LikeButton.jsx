import React, { useState } from 'react';
import likeButton from '../../assets/like-button.jpg'; // Ensure this path is correct

const LikeButton = ({ postId, initialLikes }) => {
  const [likes, setLikes] = useState(Number(initialLikes) || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      // Simulating an API call
      const updatedLikes = liked ? likes - 1 : likes + 1;
      setLikes(updatedLikes);
      setLiked(!liked);

      // In a real app, you'd use the following line to send the request to the server
      // const response = await axios.post(`/api/blogs/${postId}/${liked ? 'unlike' : 'like'}`);
      // setLikes(response.data.likes);
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  return (
    <div className="flex items-center justify-end mt-0 mr-8">
      <img
        src={likeButton}
        alt="Like button"
        className={`cursor-pointer w-10 ${liked ? 'text-red-500' : 'text-gray-500'}`}
        onClick={handleLike}
      />
      <span className="ml-2">{likes} Likes</span>
    </div>
  );
};

export default LikeButton;
