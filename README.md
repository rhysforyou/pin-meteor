# Pin Meteor Integration Example

This code illustrates how to integrate [Pin][pinsite] payment processing to a
Meteor app. Pin's a great service and the core of this app took around half an
hour to get working.

The eventual goal of this project is to build an [atmosphere][atmospher-repo]
package that makes adding Pin to an app as easy as possible.

## Roadmap

This example code is pretty new so it still has a few rough edges, here's what
I'll be working on over the next few days to make this a more well-rounded
example:

- Integration with the accounts system
- Proper redirection support
- Animation
- Support for showing the payment form as a bootstrap modal
- Support for recurring payments

Once all of those are out of the way, we'll look at turning this into a package.
