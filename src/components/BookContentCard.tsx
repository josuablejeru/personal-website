import React from "react"
import { Book } from '../generated/bookshelf-client'
import { Card, Image, Text, Flex } from 'theme-ui'



/**
 * Represents Content to be shared 
 */
const BookContentCard = (props: {book: Book, bg: string}) => {

  return (
    <Card sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: '4rem',
      py: ['4rem', '5rem'],
      marginLeft: '1rem',
      marginRight: '1rem',
      color: `white`,
      background: props.bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}>
        <Flex  sx={{justifyContent: 'center', gap: '1rem'}}>
        <Image src={props.book.imageLinks?.thumbnail} />
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
        <Text sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          pt: 2,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
        }}>{props.book.title}</Text>
        <Text sx={{
          fontSize: 2,
          display: 'block'
        }}>
          {props.book.subtitle}
        </Text>
      </Flex>
      </Flex>
    </Card>
  )
}

export default BookContentCard
