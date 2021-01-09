module.exports = () => {
  /*html*/
  return `
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field">
    <p class="hidden">
      <label>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
    </p>
    <p>
      <label>
        Name: <input required type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Email: <input required type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        Message:
        <textarea required name="message"></textarea>
      </label>
    </p>
    <p>
      <button class="submit" type="submit">
        Send
      </button>
    </p>
  </form>
  `;
};
