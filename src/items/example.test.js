import * as example from './example';

import DateProvider from '../module/dateProvider';

jest.mock('../module/dateProvider');

describe('example', () => {
    it('should return the current unix time stamp', () => {
        const expectedResult = 1234;

        DateProvider.now.mockImplementationOnce(() => expectedResult);

        const result = example.doThing();

        expect(result).toEqual(expectedResult);
        expect(DateProvider.now).toHaveBeenCalled();
    });
});
