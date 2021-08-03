import * as React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div style="position: relative; padding-top: 56.25%;">
      <iframe src="https://iframe.mediadelivery.net/embed/10099/b4feb7f9-b80b-4e81-8273-bc74593f43e2?autoplay=false"
              loading="lazy" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen="true"></iframe>
    </div>
  </Layout>
)

export default IndexPage
