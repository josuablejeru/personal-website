import React, { useState, useEffect } from 'react'
import { BooksService, BookResponse, Book } from '../generated/bookshelf-client'
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout'
import BookContentCard from '../components/BookContentCard'
import { Flex, Heading, Text } from 'theme-ui'

const Bookshelves = () => {
  const [books, setBooks] = useState<BookResponse>()

  const bg = [
    'linear-gradient(to right, #D4145A 0%, #FBB03B 100%)',
    'linear-gradient(to right, #662D8C 0%, #ED1E79 100%)',
    'linear-gradient(to right, #009245 0%, #FCEE21 100%)',
    'linear-gradient(to right, #D585FF 0%, #00FFEE 100%)',
  ]

  useEffect(() => {
    BooksService.getBookshelfBooks()
      .then((value) => setBooks(value))
      .catch(console.error)
  }, [])

  return (
    <Layout>
      <Heading sx={{ textAlign: 'center' }}>Bookshelf</Heading>
      <Text
        sx={{
          textAlign: 'center',
          overflowWrap: 'break-word',
        }}
      >
        As an avid reader, I am always on the lookout for books that are
        informative, thought-provoking, and just plain enjoyable. Over the
        years, I have come across a number of books that have really stood out
        to me, and I wanted to share a few of them with you. I hope you find
        these recommendations helpful and that you enjoy the content as much as
        I did. Happy reading!
      </Text>

      <Flex
        sx={{
          flex: '1 1 160px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {books?.response?.map((bookResponse: Book, index: number) => (
          <BookContentCard book={bookResponse} bg={bg[index % bg.length]} />
        ))}
      </Flex>

      <Text sx={{ fontStyle: 'italic', color: 'lightgray' }}>
        The books and cover art displayed on this website are sourced from
        various sources, including Google Books. These books and cover art are
        provided for informational and promotional purposes only, and are not
        intended for sale. We do not own the rights to these books or cover art,
        and we are not affiliated with Google Books or the authors of these
        books. By accessing this website, you acknowledge and agree that we are
        not responsible for any errors or omissions in the information provided,
        or for any actions you may take based on the information contained on
        this website. Please note that the display of these books and cover art
        on this website may be subject to copyright and other intellectual
        property laws. If you are the copyright owner of any of the materials
        displayed on this website and you believe that your rights have been
        infringed, please contact us at josua@blejeru.com to request removal of
        the materials.
      </Text>
    </Layout>
  )
}

export default Bookshelves
