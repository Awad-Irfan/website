import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { WideContainer } from '../shared'
import { Courses } from '../components/Courses'

const CoursesPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Courses" />
    <WideContainer>
      <Courses />
    </WideContainer>
  </Layout>
)

export default CoursesPage
