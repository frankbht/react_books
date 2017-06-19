export function selectBook(book) {
  // console.log('book selected', book.title);

  // action {type, payload}
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
