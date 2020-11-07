import React from "react"
import { useLunr } from "react-lunr"
import { graphql, useStaticQuery } from "gatsby"
import PostItem from "../PostItem"
import numberToEnglish from "../../utils/numberToEnglish"

const SearchResults = props => {
  const { searchQuery } = props
  const data = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `)
  const { index, store } = data.localSearchPages
  const results = useLunr(searchQuery, index, store)

  const resultCountString = numberToEnglish(results.length)
  return (
    <>
      {searchQuery === "" ? (
        <h2>Start a new search</h2>
      ) : (
        <h2
          css={`
            margin-top: 10px;
            padding-bottom: 20px;
          `}
        >
          {resultCountString === "one" ? "There's" : "There are"}{" "}
          {resultCountString}{" "}
          {resultCountString === "one" ? "result" : "results"} for "
          {searchQuery}"
        </h2>
      )}

      {results.map(result => {
        return (
          <PostItem
            key={result.title + result.description}
            tags={result.tags}
            slug={result.url}
            title={result.title}
            imageSrc={result.cover}
            description={result.description}
          />
        )
      })}
    </>
  )
}

export default SearchResults
