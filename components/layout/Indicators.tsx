import Image from "next/image";

const Indicators = () => {
  return (
    <>
      <div className="indicator">
        <span className="indicator-item badge badge-primary">new</span>
        <div className="grid w-32 h-32 bg-base-300 place-items-center">
          content
        </div>
      </div>
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">99+</span>
        <button className="btn">inbox</button>
      </div>
      <div className="avatar indicator">
        <span className="indicator-item badge badge-secondary">typing…</span>
        <div className="w-20 h-20 rounded-lg">
          <Image
            alt="indicator"
            src="https://placeimg.com/160/160/people"
            layout="fill"
          />
        </div>
      </div>
    </>
  );
};

export default Indicators;
