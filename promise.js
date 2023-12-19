const createPost = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const post = { id: 1, content: 'Sample post' };
      resolve(post);
    }, 1000);
  });
};

const updateLastUserActivityTime = (lastActivityTime) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const updatedLastActivityTime = new Date().toISOString();
      resolve(updatedLastActivityTime);
    }, 1000);
  });
};

const deletePost = (postId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Post ${postId} deleted`);
    }, 1000);
  });
};

// Function to perform the required actions using Promise.all
const performActionsWithPromiseAll = async () => {
  try {
    // Use Promise.all to execute both promises concurrently
    const [post, updatedLastActivityTime] = await Promise.all([
      createPost(),
      updateLastUserActivityTime(),
    ]);

    // Log posts and lastActivityTime
    console.log('All Posts:', [post]);
    console.log('Last Activity Time:', updatedLastActivityTime);

    // Delete the post
    const deleteResult = await deletePost(post.id);
    console.log(deleteResult);

    // Log remaining posts (after deletion)
    const remainingPosts = [];
    console.log('Remaining Posts:', remainingPosts);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Execute the actions using Promise.all
performActionsWithPromiseAll();