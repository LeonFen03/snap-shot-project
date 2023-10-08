import React from 'react';
import renderer from 'react-test-renderer';
import GithubCard from './GithubCard.js';

it('renders correctly', () => {
    const tree = renderer
        .create(<GithubCard />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
