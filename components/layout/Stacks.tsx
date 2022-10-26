const Stacks = () => {
  return (
    <>
      <div className="stack">
        <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
          1
        </div>
        <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
          2
        </div>
        <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
          3
        </div>
      </div>
      <div className="stack">
        <div className="text-center border border-base-content card w-36 bg-base-100">
          <div className="card-body">A</div>
        </div>
        <div className="text-center border border-base-content card w-36 bg-base-100">
          <div className="card-body">B</div>
        </div>
        <div className="text-center border border-base-content card w-36 bg-base-100">
          <div className="card-body">C</div>
        </div>
      </div>
      <div className="stack">
        <div className="card shadow-md bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 1</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card shadow bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 2</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card shadow-sm bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 3</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stacks;
