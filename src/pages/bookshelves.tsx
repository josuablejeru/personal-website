import React, { useState, useEffect } from 'react'
import { BooksService, BookResponse, Book } from '../generated/bookshelf-client'
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout'
import BookContentCard from '../components/BookContentCard'

const Bookshelves = () => {
  const [books, setBooks] = useState<BookResponse>()
  
  const bg = [
    'linear-gradient(to right, #D4145A 0%, #FBB03B 100%)',
    'linear-gradient(to right, #662D8C 0%, #ED1E79 100%)',
    'linear-gradient(to right, #009245 0%, #FCEE21 100%)',
    'linear-gradient(to right, #D585FF 0%, #00FFEE 100%)'
  ]

  useEffect(() => {
    BooksService.getBookshelfBooks()
      .then((value) => setBooks(value))
      .catch(console.error)
  }, [])

  return (
    <Layout>
      {books?.response?.map((bookResponse: Book, index: number) => (
        <BookContentCard book={bookResponse} bg={bg[index % bg.length]}/>
      ))}
    </Layout>
  )
}

export default Bookshelves
