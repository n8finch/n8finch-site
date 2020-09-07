import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/contact-form'


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="If you have any questions about articles on this site, or a project you'd like me to collaborate on, please contact me." />
    
    <ContactForm/>

    {/* Currently, the best way to reach out to me is on Twitter or LinkedIn. I look forward to hearing from you! */}
    
  </Layout>
)

export default ContactPage
