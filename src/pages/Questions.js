import React from 'react'
import { Link, graphql } from 'gatsby'

const QuestionStringIds = ({data}) => {
    console.log(data);
  return (
    <div>
      {data?.allContentfulJavascriptQuiz?.edges?.map(({node}) => {
        return (
            <div  key={node.id}>
                <Link to={`/Questions/${node.questionStringId}`}>
                    {node.questionStringId}
                </Link>
                <br />
            </div>
        )
      })}
    </div>
  )
}

export default QuestionStringIds



export const query = graphql`
  query {
    allContentfulJavascriptQuiz {
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