Meteor.methods({
  createCharge: function(cardToken) {
    console.log(response)

    data = {
      email: "fake@example.com",
      description: "Meteor Test",
      amount: 500,
      currency: "AUD",
      ip_address: "127.0.0.1",
      card_token: cardToken
    }

    console.log(data)

    Meteor.http.post("https://test-api.pin.net.au/1/charges", {
      data: data,
      auth: process.env.PIN_API_SECRET + ":"
    }, function(error, response) {
      console.log("Got Response")
      console.log(response)
    })
  }
})
