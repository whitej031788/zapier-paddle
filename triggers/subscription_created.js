// triggers on subscriptioncreated with a certain tag
const triggerSubscriptioncreated = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    params: {
      tag: bundle.inputData.tagName
    }
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content));
};

module.exports = {
  key: 'subscription_created',
  noun: 'Subscription Created',

  display: {
    label: 'New Subscription Created',
    description: 'Triggers when a successful subscription purchase occurs for your Paddle subscription plan(s)'
  },

  operation: {
    inputFields: [
      
    ],
    perform: triggerSubscriptioncreated,

    sample: {
      id: 1,
      name: 'Test'
    },

    outputFields: [
      {key: 'id', label: 'ID'},
      {key: 'name', label: 'Name'}
    ]
  }
};
