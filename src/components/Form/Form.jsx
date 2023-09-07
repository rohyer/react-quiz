import React from 'react';
import Radio from '../Radio/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Form = () => {
  const [counter, setCounter] = React.useState(0);
  const [currentSection, setCurrentSection] = React.useState(
    perguntas[counter].id,
  );
  const [firstQuestion, setFirstQuestion] = React.useState([]);
  const [secondQuestion, setSecondQuestion] = React.useState([]);
  const [thirdQuestion, setThirdQuestion] = React.useState([]);
  const [fourthQuestion, setFourthQuestion] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick() {
    setCounter((counter) => counter + 1);
    setCurrentSection(perguntas[counter].id);
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <h3></h3>
      {perguntas.map(({ pergunta, options, id }) => (
        <div
          className={`section`}
          style={
            id === currentSection ? { display: 'block' } : { display: 'none' }
          }
          key={id}
        >
          <h3>{pergunta}</h3>
          <div className="options">
            {options.map((option) => (
              <Radio key={option} options={option} id={id} />
            ))}
          </div>
          <button onClick={handleClick}>Enviar</button>
        </div>
      ))}
    </form>
  );
};

export default Form;
