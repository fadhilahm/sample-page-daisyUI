import Image from "next/image";

const Avatars = () => {
  return (
    <>
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <Image
            src="https://placeimg.com/192/192/people"
            layout="fill"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-24 mask mask-hexagon">
          <Image
            src="https://placeimg.com/192/192/people"
            layout="fill"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-24 mask mask-triangle">
          <Image
            src="https://placeimg.com/192/192/people"
            layout="fill"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div className="avatar-group -space-x-6">
        <div className="avatar">
          <div className="w-12">
            <Image
              src="https://placeimg.com/192/192/people"
              layout="fill"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <Image
              src="https://placeimg.com/192/192/people"
              layout="fill"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <Image
              src="https://placeimg.com/192/192/people"
              layout="fill"
              alt="Avatar Tailwind CSS Component"
            />
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
          <Image
            src="https://placeimg.com/192/192/people"
            layout="fill"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div className="avatar offline">
        <div className="w-24 rounded-full">
          <Image
            src="https://placeimg.com/192/192/people"
            layout="fill"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
    </>
  );
};

export default Avatars;
