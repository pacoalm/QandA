import React from 'react';
import { QuestionData } from './QuestionData';

interface Props {
  data: QuestionData;
  showcontent: boolean;
}

export const Question = ({ data, showcontent }: Props) => (
  <div>
    <div>{data.title}</div>
    {/*Renderizado condicional */}
    {showcontent && (
      <div>
        {/*Javascript ternary */}
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}

    <div>
      {`Asked by ${data.userName} on
    ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
