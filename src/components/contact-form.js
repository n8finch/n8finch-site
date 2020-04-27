import React from "react"

const ContactForm = () => (
  <div className="contact-form">
    <p>Currently, the best way to reach out to me is on <a href="https://twitter.com/n8finch" target="_blank" rel="noopener noreferrer">Twitter</a> or <a href="https://www.linkedin.com/in/natefinch" target="_blank" rel="noopener noreferrer">LinkedIn</a>. However, if you like, you can send me a message with the form below.</p>

    <p>I look forward to hearing from you!</p>

    <form name="contact-form-n8finch" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form-n8finch" />
      <p class="sr-only">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <p>
        <label>Email:<br/> <input type="text" name="email" /></label>
      </p>
      <p>
        <label>Message:<br/> <textarea name="message" rows="6"></textarea></label>
      </p>
      <p>
        <button className="btn btn-primary" type="submit">Send</button>
      </p>
    </form>
  </div>
)

export default ContactForm;


