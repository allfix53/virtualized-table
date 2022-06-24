import { Table, Column, AutoSizer } from 'react-virtualized'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  // height: number
  // width: number
  lists: []
}

export default function RWSalesTable({ lists }: Props) {
  const [w, setW] = useState(100)

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
            <Column
              label="id"
              dataKey="id"
              width={w}
              headerRenderer={() => {
                return (
                  <>
                    <div
                      className="ReactVirtualized__Table__headerTruncatedText"
                      style={{
                        position: 'relative',
                        width: 100,
                      }}
                    >
                      id
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                        }}
                        onDragOver={(e: any) => {
                          console.log(e.clientX)
                          setW(w + e.clientX)
                        }}
                        // onDragEnd
                        draggable
                      >
                        ||
                      </div>
                    </div>
                  </>
                )
              }}
            />
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
