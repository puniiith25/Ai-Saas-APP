
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import Generatelmage from './pages/Generatelmage'
import RemoveBackGround from './pages/RemoveBackGround'
import RemoveObject from './pages/RemoveObject'
import Reviweresume from './pages/Reviweresume'
import Community from './pages/Community'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='generate-images' element={<Generatelmage />} />
          <Route path='remove-background' element={<RemoveBackGround />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='reviwe-resume' element={<Reviweresume />} />
          <Route path='community' element={<Community />} />

        </Route>
      </Routes>
    </>
  )
}

export default App