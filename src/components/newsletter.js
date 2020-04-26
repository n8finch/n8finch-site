import React from "react"

const NewsletterSignup = () => (
    <div className="newsletter-signup">
        <h3>Should I notify you about "all the things"?</h3>
        <p>This will be an occasional (maybe once a month?) email, highlighting things I'm working on, producing, and think you might like.</p>
        <p>If you'd like to see anything else added to it, please let me know!</p>
        <form
        action="https://buttondown.email/api/emails/embed-subscribe/n8finch"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/n8finch', 'popupwindow')"
        className="embeddable-buttondown-form"
        >
            <label for="bd-email">Enter your email:</label>
            <input type="email" name="email" id="bd-email" placeholder="Your email..."/>
            <input type="hidden" value="1" name="embed"/>
            <input type="submit" value="Subscribe"/>
        </form>
        <small>*No spam, no selling your info, none of that crazy stuff.</small>

    </div>
)

export default NewsletterSignup



