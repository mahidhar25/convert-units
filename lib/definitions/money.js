var money;

money = {
  USD: {
    name: {
      singular: 'US Dollar'
    , plural: 'US Dollars'
    }
  , to_anchor: 1
  }
, EUR: {
    name: {
      singular: 'Euro'
      , plural: 'Euros'
    }
    , to_anchor: 1
  }
};

module.exports = {
  metric: money
, _anchors: {
    metric: {
      unit: 'USD'
    , ratio: 1
    }
  }
};
