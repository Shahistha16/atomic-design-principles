import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './styles.css'

export interface paginationProps {
  className?: string;
  pagecount: number;
}

const Pagination = ({ pagecount, className }: paginationProps) => {
  return (
    <div className={className}>
      <ReactPaginate
        previousLabel={'< previous'}
        nextLabel={'next >'}
        breakLabel={' ... '}
        breakClassName={styles.breakClassName}
        pageCount={pagecount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        // onPageChange={onChange}
        containerClassName={styles.pagination}
        activeClassName={styles.activeClassName}
        initialPage={1}
        previousClassName={styles.previousClassName}
        nextClassName={styles.nextClassName}
      />
    </div>
  )
}

export default Pagination
