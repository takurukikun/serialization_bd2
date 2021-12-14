import React from 'react'
import BootstrapTable, { BootstrapTableProps } from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'

const Table = ({
  data,
  keyField,
  columns,
  search,
  ...rest
}: BootstrapTableProps): JSX.Element => {
  const { SearchBar } = Search
  // const customColumns: React.FC<
  //   BootstrapTableProps<ColumnFormatter<HeaderFormatter>>
  // > = ({}) => {
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'left',
  //         flexDirection: 'column',
  //         alignItems: 'left',
  //         whiteSpace: 'nowrap',
  //       }}
  //     >
  //       {column.text}
  //       {sortElement}
  //     </div>
  //   )
  // }

  // function createExtraColumn(columns: any[]) {
  //   const newColumns = extrasColumns.map(
  //     (item: {
  //       keyConditionButtonText: string | number
  //       text: any
  //       buttonText: any
  //       className: string | undefined
  //       onClick: (arg0: any) => void
  //     }) => {
  //       if (!item.keyConditionButtonText) {
  //         return {
  //           text: item.text,
  //           dataField: item.buttonText,
  //           mode: 'button',
  //           headerStyle: () => ({ width: '10%', whiteSpace: 'nowrap' }),
  //           headerAlign: 'center',
  //           align: 'center',
  //           formatter: (
  //             cell: any,
  //             row: { id: React.Key | null | undefined },
  //           ) => (
  //             <button
  //               key={row.id}
  //               type="button"
  //               className={item.className}
  //               onClick={() => item.onClick(row)}
  //             >
  //               {!item.keyConditionButtonText && item.buttonText}
  //             </button>
  //           ),
  //         }
  //       }

  //       return {
  //         text: item.text,
  //         dataField: item.buttonText,
  //         mode: 'button',
  //         headerStyle: () => ({ width: '10%', whiteSpace: 'nowrap' }),
  //         headerAlign: 'center',
  //         align: 'center',
  //         formatter: (cell: any, row: { [x: string]: any }) => (
  //           <button
  //             type="button"
  //             className={item.className}
  //             onClick={() => item.onClick(row)}
  //           >
  //             {item.keyConditionButtonText && row[item.keyConditionButtonText]
  //               ? 'Bloquear'
  //               : 'Desbloquear'}
  //           </button>
  //         ),
  //       }
  //     },
  //   )

  //   const parseColumns = columns.map(
  //     (item: { headerFormatter: React.FC<BootstrapTable<any, number>> }) => {
  //       item.headerFormatter = customColumns
  //       return item
  //     },
  //   )

  //   return [...parseColumns, ...newColumns]
  // }

  return (
    <ToolkitProvider
      keyField={keyField}
      data={data}
      columns={columns}
      search={search}
    >
      {(props) => (
        <>
          {search && (
            <SearchBar
              {...props.searchProps}
              style={{
                borderRadius: '12px',
              }}
              placeholder="Pesquisar"
            />
          )}
          <BootstrapTable
            {...props.baseProps}
            {...rest}
            bootstrap4
            wrapperClasses="table-responsive"
            noDataIndication="Sem resultados"
            bordered={false}
          />
        </>
      )}
    </ToolkitProvider>
  )
}
export default Table
