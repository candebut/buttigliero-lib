import './table.scss';
import React from 'react';

export type TableElement = {};

export type TableColumn<T extends TableElement> = {
  title: string;
  html: (e: T) => JSX.Element;
  width?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type TableModel<T extends TableElement> = {
  columns: TableColumn<T>[];
};

export type Props<T extends TableElement> = {
  model: TableModel<T>;
  elements: T[];
};

const Table = <T extends TableElement>({ model, elements }: Props<T>) => {
  const sumWidth = model.columns.reduce((sum, column) => sum + (column.width || 1), 0);
  const widthOf = (c: TableColumn<T>) => ((c.width || 1) / sumWidth) * 100;
  return (
    <div className="genericTableContainer">
      <div className="genericTableHeader">
        <div className="genericTableRow">
          {model.columns.map((c, index) => (
            <div key={`key-column-${index}`} className="genericTableCell" style={{ width: `${widthOf(c)}%` }}>
              <span className="genericTableCellText">{c.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="genericTableBody">
        {elements.map((e, index) => (
          <div className="genericTableRow" key={`key-element-${index}`} data-test-id="table-row">
            {
              // eslint-disable-next-line react/jsx-no-target-blank
              model.columns.map((c, index) => (
                // eslint-disable-next-line react/jsx-no-target-blank
                <div
                  className="genericTableCell"
                  style={{ width: `${widthOf(c)}%` }}
                  key={`key-element-column-${index}`}
                >
                  {c.html(e)}
                </div>
              ))
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
