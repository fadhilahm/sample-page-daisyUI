const Dividers = () => {
  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div className="divider">OR</div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
      <div className="flex w-full">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </>
  );
};

export default Dividers;
