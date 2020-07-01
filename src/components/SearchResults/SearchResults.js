import React from "react"
import { useLunr } from "react-lunr"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

const PostOverviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 25px;
  }
 
`

const MobileWrapper = styled.div`
 
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DesktopWrapper = styled.div``

function numberToEnglish(n) {
  var string = n.toString(),
    units,
    tens,
    scales,
    start,
    end,
    chunks,
    chunksLen,
    chunk,
    ints,
    i,
    word,
    words,
    and = "and"

  /* Remove spaces and commas */
  string = string.replace(/[, ]/g, "")

  /* Is number zero? */
  if (parseInt(string) === 0) {
    return "zero"
  }

  /* Array of units as words */
  units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ]

  /* Array of tens as words */
  tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ]

  /* Array of scales as words */
  scales = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion",
    "duodecillion",
    "tredecillion",
    "quatttuor-decillion",
    "quindecillion",
    "sexdecillion",
    "septen-decillion",
    "octodecillion",
    "novemdecillion",
    "vigintillion",
    "centillion",
  ]

  /* Split user arguemnt into 3 digit chunks from right to left */
  start = string.length
  chunks = []
  while (start > 0) {
    end = start
    chunks.push(string.slice((start = Math.max(0, start - 3)), end))
  }

  /* Check if function has enough scale words to be able to stringify the user argument */
  chunksLen = chunks.length
  if (chunksLen > scales.length) {
    return ""
  }

  /* Stringify each integer in each chunk */
  words = []
  for (i = 0; i < chunksLen; i++) {
    chunk = parseInt(chunks[i])

    if (chunk) {
      /* Split chunk into array of individual integers */
      ints = chunks[i]
        .split("")
        .reverse()
        .map(parseFloat)

      /* If tens integer is 1, i.e. 10, then add 10 to units integer */
      if (ints[1] === 1) {
        ints[0] += 10
      }

      /* Add scale word if chunk is not zero and array item exists */
      if ((word = scales[i])) {
        words.push(word)
      }

      /* Add unit word if array item exists */
      if ((word = units[ints[0]])) {
        words.push(word)
      }

      /* Add tens word if array item exists */
      if ((word = tens[ints[1]])) {
        words.push(word)
      }

      /* Add 'and' string after units or tens integer if: */
      if (ints[0] || ints[1]) {
        /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
        if (ints[2] || i + 1 > chunksLen) {
          words.push(and)
        }
      }

      /* Add hundreds word if array item exists */
      if ((word = units[ints[2]])) {
        words.push(word + " hundred")
      }
    }
  }

  return words.reverse().join(" ")
}

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

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" })
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

      {results.map(result => (
        <>
          <PostOverviewWrapper>
            <Link to={result.url}>
              <img
                src={result.cover}
                alt={"Blog Post Cover"}
                css={`
                  border-radius: 50%;
                  z-index: -9999;
                  min-width: 75px;
                  min-height: 75px;
                  width: 75px;
                  height: 75px;
                  position: relative;
                  overflow: hidden;
                  display: inline-block;
                  margin-right: 30px;
                  margin-bottom: 0px;
                `}
              />
            </Link>
            {isMobileOrTablet ? (
              <MobileWrapper >
                <header>
                  <h4
                    css={`
                      margin-bottom: 10px;
                      margin-top: 0px;
                    `}
                  >
                    <Link to={result.url}>{result.title}</Link>
                  </h4>
                </header>
                <section>
                  <h4
                    css={`
                      margin-top: 0px;
                      margin-bottom: 0px;
                    `}
                  >
                    {result.description}
                  </h4>
                </section>
              </MobileWrapper>
            ) : (
              <DesktopWrapper>
                <header>
                  <h2
                    css={`
                      margin: 5px 0;
                    `}
                  >
                    <Link to={result.url}>{result.title}</Link>
                  </h2>
                </header>
                <section>
                  <h4
                    css={`
                      margin: 0;
                      padding-top: 7px;
                    `}
                  >
                    {result.description}
                  </h4>
                </section>
              </DesktopWrapper>
            )}
          </PostOverviewWrapper>
        </>
      ))}
    </>
  )
}

export default SearchResults
