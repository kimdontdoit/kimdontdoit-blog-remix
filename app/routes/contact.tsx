export default function ContactRoute() {
  return (
    <>
      <h1>Contact</h1>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Message: <textarea name="message" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Send message
          </button>
        </div>
      </form>
    </>
  );
}
