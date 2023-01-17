import React from 'react'
import { graphql, Link } from 'gatsby'

const QuestionId = ({data}) => {
  const edges = data?.allContentfulJavascriptQuiz?.edges;

  const q = edges && edges.length && edges[0].node;

  if(q){
    const {question, questionStringId} = q;
    return (
      <div>
        Question id: {questionStringId}
        <br />
        Question: {question}
        <br />
        <Link to='/Questions'>Back</Link>
      </div>
    )
  }

  return(
    <div>No Question found.</div>
  )
}

export default QuestionId



export const query = graphql`
query($id: String) {
  allContentfulJavascriptQuiz(filter:{id: { eq: $id }}) {
    edges {
      node {
        question
        answer
        id
        questionStringId
      }
    }
  }
}
`