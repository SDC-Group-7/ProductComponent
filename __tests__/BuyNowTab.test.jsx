import React from 'react';
import { shallow } from 'enzyme';
import BuyNowTab from '../client/src/components/BuyNowTab';
import QuantityToggler from '../client/src/components/QuantityToggler';
import AddToCartButton from '../client/src/components/AddToCartButton';

describe('BuyNowTab', () => {
  test('should render tab if product is available online', () => {
    const fakePropValue = true;

    const wrapper = shallow(<BuyNowTab
      productAvailabilityOnline={fakePropValue}
      productLimit={3}
    />);
    expect(wrapper.contains('Available now')).toBe(true);
    expect(wrapper.find(QuantityToggler).length).toBe(1);
    expect(wrapper.contains('Limit 3')).toBe(true);
    expect(wrapper.find(AddToCartButton).length).toBe(1);
  });

  test('should display out of stock message if product is unavailable online', () => {
    const fakePropValue = false;

    const wrapper = shallow(<BuyNowTab productAvailabilityOnline={fakePropValue} />);
    expect(wrapper.contains('Temporarily out of stock')).toBe(true);
  });
});
