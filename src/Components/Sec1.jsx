import React from "react";

const Sec1 = () => {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <div>
        <h1>Create user interfaces from components</h1>
        <div>
          <p>
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like Thumbnail,
            LikeButton, and Video. Then combine them into entire screens, pages,
            and apps.
          </p>
        </div>
      </div>
      
      <div>
        <span className="w-full h-full flex items-center justify-center py-10 px-16">
          <img src="src/assets/sec-1-img.png" alt="img" />
        </span>
      </div>

      <div>
        <p>
          My video Video description Whether you work on your own or with
          thousands of other developers, using React feels the same. It is
          designed to let you seamlessly combine components written by
          independent people, teams, and organizations.
        </p>
      </div>
    </div>
  );
};

export default Sec1;
