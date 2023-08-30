const Review = () => {
  return (
    <div style={{ width: "200px", height: "175px", flexShrink: 0 }} className="bg-secondary p-3 text-white rounded mb-4">
      <h3>Rating</h3>
      <div className="d-flex align-items-center justify-content-between ">
        <img
          src="assets/Hero.jpg"
          className="thumbnail"
          width="50px"
          height="50px"
        />
        <p className="m-0">Name</p>
      </div>
      <p>Review Text</p>
    </div>
  );
};

export default Review;
