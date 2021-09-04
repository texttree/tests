import { render,screen } from "@testing-library/react";

import List from './List';

const data = ['html', 'css', 'js']


describe('List component', ()=>{ //как правило пишется блок тестов, в которых уже пишутся тесты
    it('List renders',() => { //можно it, можно test, в кавычках указываются суть теста
        render(<List items ={data}/>);//render тестирует отрисовку компонента при определенных пропсах

        expect(screen.getByRole('list')).toBeInTheDocument();//screen - это уже нарисованный рендер, в нем проверяют на существование отдельных элементов 
        expect(screen.getByText('html')).toBeInTheDocument();//expect - это метод, который тестирует то, что мы ожидаем / предполагаем от рендера/функции. Если наши ожидания не оправдались, тест провалится
    });
    it('List renders without data',() => {
        render(<List />);

        expect(screen.queryByRole('list')).toBeNull();
    });
    it('List snapshot',() => {
        const list = render(<List items={data} />);

        expect(list).toMatchSnapshot();
    });
    it('List empty snapshot',() => {
        const list = render(<List  />);

        expect(list).toMatchSnapshot();
    });
})