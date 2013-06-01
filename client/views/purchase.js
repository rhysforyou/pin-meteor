Template.purchase.events({
  'submit form': function(event) {
    event.preventDefault();

    // Create the card data we'll send to Pin's servers
    var card = {
      number: $(event.target).find("[name=cc-number]").val(),
      name: $(event.target).find("[name=cc-name]").val(),
      expiry_month: $(event.target).find("[name=cc-expiry-month]").val(),
      expiry_year: $(event.target).find("[name=cc-expiry-year]").val(),
      cvc: $(event.target).find("[name=cc-cvc]").val(),
      address_line1: $(event.target).find("[name=address-line1]").val(),
      address_line2: $(event.target).find("[name=address-line2]").val(),
      address_city: $(event.target).find("[name=address-city]").val(),
      address_state: $(event.target).find("[name=address-state]").val(),
      address_postcode: $(event.target).find("[name=address-postcode]").val(),
      address_country: $(event.target).find("[name=address-country]").val()
    }

    Pin.createToken(card, function(data) {
      if (data.error) {
        alert(response.error_description)
      } else {
        Meteor.call('createCharge', data.response.token)
      }
    })
  }
})