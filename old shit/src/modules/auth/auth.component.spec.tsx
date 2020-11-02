import { Auth } from './auth.component';
import * as renderer from 'react-test-renderer';
import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Auth />', () => {
  it('Should match snapshot', () => {
    const tree = shallow(
      <Auth.Original example='kek' pathname='/cheburek' t={() => ''} />
    );

    expect(toJson(tree)).toMatchSnapshot();
  });
});
