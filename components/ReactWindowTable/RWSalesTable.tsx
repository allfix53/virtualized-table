import { Table, Column, AutoSizer } from 'react-virtualized'
import Draggable from 'react-draggable'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  // height: number
  // width: number
  lists: []
}

export default function RWSalesTable({ lists }: Props) {
  return (
    <React.Fragment>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            headerHeight={30}
            rowHeight={30}
            rowCount={lists.length}
            rowGetter={({ index }) => lists[index]}
            style={{ fontFamily: 'monospace', fontSize: '1rem' }}
          >
            <Column label="id" dataKey="id" width={100} />
            <Column label="name" dataKey="name" width={300} />
            <Column label="sales_id" dataKey="sales_id" width={300} />
            <Column label="item_id" dataKey="item_id" width={300} />
            <Column label="qty" dataKey="qty" width={50} />
            <Column label="consumen_name" dataKey="consumen_name" width={300} />
            <Column
              label="transaction_date"
              dataKey="transaction_date"
              width={300}
            />
          </Table>
        )}
      </AutoSizer>
    </React.Fragment>
  )
}
