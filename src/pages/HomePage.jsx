export default function HomePage() {
  return (
    <>
      <main>
        <div className="p-5 mb-4 bg-primary-subtle ">
          <div className="container-fluid text-black bg-primary-subtle py-5">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button className="btn btn-outline-info btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
