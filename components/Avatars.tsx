const Avatars = () => {
  return (
    <>
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-24 mask mask-hexagon">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-24 mask mask-triangle">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className="avatar-group -space-x-6">
        <div className="avatar">
          <div className="w-12">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="w-12 bg-neutral-focus text-neutral-content">
            <span>+99</span>
          </div>
        </div>
      </div>
      <div className="avatar online">
        <div className="w-24 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className="avatar offline">
        <div className="w-24 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
    </>
  );
};

export default Avatars;
