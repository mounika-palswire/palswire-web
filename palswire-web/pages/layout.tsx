import React from 'react'
import { Layout } from '../components/navbar/layout'
import { Nav } from '../components/navbar/navbar'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}
