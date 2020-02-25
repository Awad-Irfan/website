import React from 'react'
import { Hero, Img } from '../../shared'

const blogPath = require('../../images/hero-blog.svg') as string // tslint:disable-line

export const CoursesHero = () => (
  <Hero
    title="Courses"
    subtitle="Giving back to the community through education"
    Image={<Img src={blogPath} fullWidth mb0 />}
  />
)
