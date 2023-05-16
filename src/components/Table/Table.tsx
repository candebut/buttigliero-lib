import React from "react";

interface IObjectKeys {
  [key: string]: string | number | undefined;
}

export interface TableProps {
  headers: Array<string>;
  data: Array<DataContent>;
}

export interface DataContent extends IObjectKeys {
  text: string;
  id: number;
}

const Table = ({ headers, data }: TableProps) => {
  return (
    <tbody>
      {data.map((d, index) => (
        <tr key={`tr-${index}-${d.id}`}>
          <>
            {Object.keys(headers).map((header, index) => {
              <td key={`td-${index}`}>
                <span>{d[header]}</span>
              </td>;
            })}
          </>
        </tr>
      ))}
    </tbody>
  );
};

export default Table;
