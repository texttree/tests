import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () =>{  //как правило пишется блок тестов, в которых уже пишутся тесты
  it('App renders', ()=>{ //можно it, можно test, в кавычках указываются суть теста
    render (<App />); //render тестирует отрисовку компонента при определенных пропсах
    //  screen.debug(); // если это запустить, можно увидеть в тестах всю структуру документа
    expect(screen.getByRole('list')).toBeInTheDocument();//screen - это уже нарисованный рендер, в нем проверяют на существование отдельных элементов 
  })
})
