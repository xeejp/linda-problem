import { createAction } from 'redux-actions'

export const fetchContents = createAction('fetch contents')

export const changePage = createAction('change page', page => page)
