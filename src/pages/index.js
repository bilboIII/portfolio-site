import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <section id="intro" className="container-fluid main-mh-100 my-5">
        <div class="container h-100">
          <div className="row h-50 justify-content-center">
            <div className="col-lg-7 col-md-6">
              <h1>
                Hola, Josh Here.
                <br></br>
                I'm a software developer 
              </h1>
              <p>
                I am a 22 year old developer learning new skills each day.
                Went to school at Ogden-Weber Tech College for Software Technology.
              </p>

              <p>
                In my free time I like to design and make things with my 3d printer.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-7 col-8">
              <img className="main-circle" src="/portrait.jpeg" width={300} height={300} alt="portrait"/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
