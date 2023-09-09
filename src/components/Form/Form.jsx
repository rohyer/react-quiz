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
  const [currentSection, setCurrentSection] = React.useState('p1');
  const [value, setValue] = React.useState(
    {
      p1: '',
      p2: '',
      p3: '',
      p4: ''
    }
  );

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick(id) {
      setCurrentSection(id);
  }

  function handleChange({target}) {
    setValue({...value, [target.id]: target.value});
  }

  function getResult() {
    let counter = 0;
    perguntas.map((pergunta) => {
      if (pergunta.resposta === value[pergunta.id]) counter++;
    });
    return 'Você acertou ' + counter + 'perguntas';
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        {perguntas.map(({ pergunta, options, id }, index) => (
          <div
            className={`section`}
            style={
              id === currentSection ? { display: 'block' } : { display: 'none' }
            }
            key={id}
          >
            <h3>{pergunta}</h3>
            <div className="options">
              <Radio
                options={options}
                value={value[id]}
                id={id}
                onChange={handleChange}
              />
            </div>
            {currentSection === 'p4'
            ?
              <button onClick={() => handleClick('end')}>
                Finalizar Quiz
              </button>
            : 
            <button onClick={() => handleClick(perguntas[++index].id)}>
              Enviar
            </button>}
            
          </div>
        ))}
      </form>

      
      { currentSection === 'end' && getResult()}
    </div>
  );
};

export default Form;
