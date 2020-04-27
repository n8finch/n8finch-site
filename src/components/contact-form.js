import React from "react"

const ContactForm = () => (
  <div className="contact-form">
    <p>Currently, the best way to reach out to me is on Twitter or LinkedIn. However, if you like, you can send me a message with the form below.</p>

    <p>I look forward to hearing from you!</p>

    <form name="contact-form-n8finch" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <p class="sr-only">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <p>
        <label>Email: <input type="text" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)

export default ContactForm;


