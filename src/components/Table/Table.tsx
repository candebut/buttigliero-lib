import './table.scss';

export type TableElement = {};

export type Column<T extends TableElement> = {
  title: string;
  html: (e: T) => JSX.Element;
  width?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type TableModel<T extends TableElement> = {
  columns: Column<T>[];
};

export type Props<T extends TableElement> = {
  model: TableModel<T>;
  elements: T[];
};

const Table = <T extends TableElement>({ model, elements }: Props<T>) => {
  const sumWidth = model.columns.reduce((sum, column) => sum + (column.width || 1), 0);
  const widthOf = (c: Column<T>) => ((c.width || 1) / sumWidth) * 100;
  return (
    <div className="genericTableContainer" data-testid="genericTable" data-cy="genericTable">
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
          <div className="genericTableRow" key={`key-element-${index}`} data-cy="genericTableRow">
            {model.columns.map((c, index) => (
              <div
                data-cy="genericTableCell"
                className="genericTableCell"
                style={{ width: `${widthOf(c)}%` }}
                key={`key-element-column-${index}`}
              >
                {c.html(e)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
