import React, { useState, useEffect } from 'react'
import { BooksService, BookResponse, Book } from '../generated/bookshelf-client'
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout'
import BookContentCard from '../components/BookContentCard'

const Bookshelves = () => {
  const [books, setBooks] = useState<BookResponse>()
  
  const bg = 'linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'

  useEffect(() => {
    BooksService.getBookshelfBooks()
      .then((value) => setBooks(value))
      .catch(console.error)
  }, [])

  return (
    <Layout>
      {books?.response?.map((bookResponse: Book) => (
        <BookContentCard book={bookResponse} bg={bg}/>
      ))}
    </Layout>
  )
}

export default Bookshelves
