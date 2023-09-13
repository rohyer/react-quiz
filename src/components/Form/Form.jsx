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
  const [slide, setSlide] = React.useState(0);
  const [result, setResult] = React.useState(null);
  const [responses, setResponses] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      finalResult();
    }
  }

  function handleChange({ target }) {
    setResponses({ ...responses, [target.id]: target.value });
  }

  function finalResult() {
    const correctAnswers = perguntas.filter(
      ({ id, response }) => responses[id] === response,
    );
    setResult(`Você acertou: ${correctAnswers.length} de ${perguntas.length}`);
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()} action="">
        {perguntas.map((pergunta, index) => (
          <Radio
            active={slide === index}
            key={pergunta.id}
            value={responses[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {result ? (
          <p>{result}</p>
        ) : (
          <button onClick={handleClick}>Próxima</button>
        )}
      </form>
    </div>
  );
};

export default Form;
