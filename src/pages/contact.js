import { Heading, Text } from '@chakra-ui/core'
import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <Heading as="h1">Contact</Heading>
            <Text>Coming soon...</Text>
            <a href="mailto:omar.mo.sid@gmail.com">Get in touch</a>
        </Layout>
    )
}

export default Contact
