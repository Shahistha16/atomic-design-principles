import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './styles.css'

const Pagination = ({ onChange, pagecount }) => {
  return (
    <div>
      <ReactPaginate
        previousLabel={'< previous'}
        nextLabel={'next >'}
        breakLabel={' ... '}
        breakClassName={styles.breakClassName}
        pageCount={pagecount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={onChange}
        containerClassName={styles.pagination}
        subContainerClassName={styles.pagesPagination}
        activeClassName={styles.activeClassName}
        initialPage={1}
        previousClassName={styles.previousClassName}
        nextClassName={styles.nextClassName}
      />
    </div>
  )
}

export default Pagination
