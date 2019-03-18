import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  let appComponent;

  beforeEach(() => {
    appComponent = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(appComponent).toMatchSnapshot()
  })

  it.skip("should change the state of current player to true when startQuiz is invoked", () => {

    appComponent.setState({
      currentUser: false
    })
    let user = true;

    expect(appComponent.state("currentUser")).toEqual(false);
    appComponent.instance().handleUser();
    expect(appComponent.state("currentUser")).toEqual(true);
  });

})
