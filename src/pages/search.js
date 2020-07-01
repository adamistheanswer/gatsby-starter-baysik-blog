import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import TextField from "../components/TextField"
import SearchResults from "../components/SearchResults/SearchResults"
import { useMediaQuery } from "react-responsive"

const Search = ({ location }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  useEffect(() => {
    setSearchQuery(new URLSearchParams(location.search).get("keywords") || "")
    if (location.search === "?keywords=") {
      if (!isMobileOrTablet) {
        navigate(`/`)
      }
    }
  }, [location.search, searchQuery, isMobileOrTablet])

  return (
    <Layout location={location} isSearch>
      {isMobileOrTablet && (
        <div
          css={`
            margin-bottom: 40px;
          `}
        >
          <TextField
            autoFocus // eslint-disable-line
            search={true}
            type="search"
            id="search-input"
            name="keywords"
            aria-controls="search-results-count"
            handleChange={value =>
              navigate(`/search?keywords=${encodeURIComponent(value)}`)
            }
            value={searchQuery}
          />
        </div>
      )}
      <SearchResults searchQuery={searchQuery} />
    </Layout>
  )
}

export default Search
