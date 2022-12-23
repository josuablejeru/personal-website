import React from "react"
import { Book } from '../generated/bookshelf-client'
import { Card, Image, Text } from 'theme-ui'



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
      px: 4,
      py: [4, 5],
      color: `white`,
      background: props.bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}>
      <Image src={props.book.imageLinks?.smallThumbnail} />
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
      }}>{props.book.subtitle}</Text>
    </Card>
  )
}

export default BookContentCard
