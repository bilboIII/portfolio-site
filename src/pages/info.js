import React from 'react'
import Layout from '../components/Layout'
export default function info() {
  return (
    <Layout>
      <div className="container-fluid main-mh-100 my-5">
        <div className="container flex-grow-1">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <h1>Info</h1>
              <p>I upload my 3d designs on <a href="https://www.printables.com/social/155060-bilboiii/about">Printables</a></p>
              <p>I'm also on <a href="https://www.linkedin.com/in/bilboiii/">linkedin</a> if you want to find me</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
