export default function SubmitPostRoute() {
  return (
    <>
      <h1>Submit</h1>
      <p>Ask a question or submit a blog post suggestion</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
